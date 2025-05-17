import React, { useState, useEffect } from 'react';
import './UpdateProfile.css';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [passwordSection, setPasswordSection] = useState(false);

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        // Fetch user profile data
        fetchUserProfile(token);
    }, [navigate]);

    const fetchUserProfile = async (token) => {
        try {
            setLoading(true);
            // Replace with your actual API endpoint
            const response = await fetch('https://your-api-url.com/api/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch profile');
            }

            const data = await response.json();
            
            // Update form with user data (excluding password fields)
            setFormData(prevData => ({
                ...prevData,
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                address: data.address || ''
            }));
            
        } catch (error) {
            setMessage({ text: error.message || 'Error fetching profile', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const togglePasswordSection = () => {
        setPasswordSection(!passwordSection);
    };

    const validateForm = () => {
        // Basic validation
        if (!formData.name.trim() || !formData.email.trim()) {
            setMessage({ text: 'Name and email are required', type: 'error' });
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setMessage({ text: 'Please enter a valid email address', type: 'error' });
            return false;
        }

        // Password validation (only if user is changing password)
        if (passwordSection) {
            if (!formData.currentPassword) {
                setMessage({ text: 'Current password is required', type: 'error' });
                return false;
            }
            
            if (formData.newPassword) {
                if (formData.newPassword.length < 6) {
                    setMessage({ text: 'New password must be at least 6 characters', type: 'error' });
                    return false;
                }
                
                if (formData.newPassword !== formData.confirmPassword) {
                    setMessage({ text: 'New passwords do not match', type: 'error' });
                    return false;
                }
            }
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            
            // Prepare data to send - exclude confirm password
            const dataToSend = { ...formData };
            delete dataToSend.confirmPassword;
            
            // Don't send password fields if not updating password
            if (!passwordSection) {
                delete dataToSend.currentPassword;
                delete dataToSend.newPassword;
            }
            
            // Replace with your actual API endpoint
            const response = await fetch('https://your-api-url.com/api/user/update-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(dataToSend)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }

            setMessage({ text: 'Profile updated successfully!', type: 'success' });
            
            // Reset password fields
            if (passwordSection) {
                setFormData(prevData => ({
                    ...prevData,
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }));
                setPasswordSection(false);
            }
            
        } catch (error) {
            setMessage({ text: error.message || 'Error updating profile', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="update-profile-container">
            <h2>Update Profile</h2>
            
            {message.text && (
                <div className={`message ${message.type}`}>
                    {message.text}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-section">
                    <h3>Personal Information</h3>
                    
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email address"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="address">Shipping Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Your shipping address"
                            rows="3"
                        />
                    </div>
                </div>
                
                <div className="form-section">
                    <div className="password-header">
                        <h3>Change Password</h3>
                        <button 
                            type="button" 
                            className="toggle-btn"
                            onClick={togglePasswordSection}
                        >
                            {passwordSection ? 'Cancel' : 'Change Password'}
                        </button>
                    </div>
                    
                    {passwordSection && (
                        <div className="password-fields">
                            <div className="form-group">
                                <label htmlFor="currentPassword">Current Password</label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleChange}
                                    placeholder="Enter current password"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="newPassword">New Password</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    placeholder="Enter new password"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm New Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm new password"
                                />
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="form-actions">
                    <button 
                        type="button" 
                        className="cancel-btn"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="save-btn"
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;