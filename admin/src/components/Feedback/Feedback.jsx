import React, { useState, useEffect, useCallback } from "react";
import './Feedback.css';
import bin from './../../assets/recycle-bin.png';
import { toast } from "react-toastify";

const ListFeedback = () => {
    const backend_url = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    const [feedbacks, setFeedbacks] = useState([]);

    const fetchFeedbacks = useCallback(async () => {
        const response = await fetch(`${backend_url}/api/feedback/all`);
        const json = await response.json();
        if (response.ok) {
            setFeedbacks(json);
        } else {
            toast.error("Failed to fetch feedbacks");
        }
    }, [backend_url]);

    useEffect(() => {
        fetchFeedbacks();
    }, [fetchFeedbacks]);

    const removeFeedback = async (id) => {
        const response = await fetch(`${backend_url}/api/feedback/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const json = await response.json();
        if (!response.ok) {
            toast.error(json.error);
        } else {
            await fetchFeedbacks();
            toast.success("Feedback deleted");
        }
    };

    return (
        <div className="list-feedback">
            <h1>All Feedbacks</h1>
            <div className="listfeedback-format-main">
                <p>Name</p>
                <p>Email</p>
                <p>Message</p>
                <p>Remove</p>
            </div>
            <div className="listfeedback-allfeedbacks">
                <hr />
                {feedbacks.map((feedback, index) => (
                    <React.Fragment key={index}>
                        <div className="listfeedback-format-main listfeedback-format">
                            <p>{feedback.name}</p>
                            <p>{feedback.email}</p>
                            <p>{feedback.message}</p>
                            <img
                                onClick={() => removeFeedback(feedback._id)}
                                src={bin}
                                alt="Remove"
                                className="listfeedback-remove-icon"
                            />
                        </div>
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ListFeedback;
