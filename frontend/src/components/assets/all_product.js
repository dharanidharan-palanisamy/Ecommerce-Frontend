import p1_img from "./product_1.jpg";
import p2_img from "./product_2.png";
import p3_img from "./product_3.jpg";
import p4_img from "./product_4.jpg";
import p5_img from "./product_5.jpg";
import p6_img from "./product_6.jpg";
import p8_img from "./product_8.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p24_img from "./product_24.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Formal Shirt",
    category: "men",
    image: p1_img,
    new_price: 400.0,
    old_price: 500.0,
  },
  {
    id: 2,
    name: "T shirt & Jacket",
    category: "men",
    image: p2_img,
    new_price: 1000.0,
    old_price: 1200.5,
  },
  {
    id: 3,
    name: "coat & shirt",
    category: "men",
    image: p3_img,
    new_price: 2500.0,
    old_price: 3000.0,
  },
  {
    id: 4,
    name: "T Shirt",
    category: "men",
    image: p4_img,
    new_price: 350.0,
    old_price: 450.0,
  },
  {
    id: 5,
    name: "Coat Shot",
    category: "men",
    image: p5_img,
    new_price: 5500.0,
    old_price: 6000.,
  },
  {
    id: 6,
    name: "Formal Paint",
    category: "men",
    image: p6_img,
    new_price: 350.0,
    old_price: 400.0,
  },
 
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 850.0,
    old_price: 1200.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    new_price: 900.0,
    old_price: 1500.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p16_img,
    new_price: 1850.0,
    old_price: 2000.0,
  },
  {
    id: 17,
    name: "Jeans Shirts",
    category: "men",
    image: p17_img,
    new_price: 850.0,
    old_price: 1000.0,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p18_img,
    new_price: 950.0,
    old_price: 1200.0,
  },
  {
    id: 19,
    name: "T Shirt Full Sleeve",
    category: "men",
    image: p19_img,
    new_price: 750.0,
    old_price: 800.0,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p20_img,
    new_price: 1300.0,
    old_price: 1500.0,
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p21_img,
    new_price: 1850.0,
    old_price: 2000.0,
  },
  {
    id: 22,
    name: "Hoodies",
    category: "men",
    image: p22_img,
    new_price: 600.0,
    old_price: 700.0,
  },
  {
    id: 24,
    name: "Jacket",
    category: "men",
    image: p24_img,
    new_price: 950.0,
    old_price: 1100.5,
  },
  {
    id: 26,
    name: "T Shirt",
    category: "kids",
    image: p26_img,
    new_price: 450.0,
    old_price: 500.0,
  },
  
  {
    id: 27,
    name: "Hoodies",
    category: "kids",
    image: p27_img,
    new_price: 850.0,
    old_price: 1000.0,
  },
  {
    id: 30,
    name: "Jacket",
    category: "kids",
    image: p30_img,
    new_price: 2500.0,
    old_price: 3000.0,
  },
  {
    id: 31,
    name: "Jeans Shirts",
    category: "kids",
    image: p31_img,
    new_price: 750.0,
    old_price: 850.0,
  },
  {
    id: 32,
    name: "shorts",
    category: "kids",
    image: p32_img,
    new_price: 450.0,
    old_price: 550.0,
  },
  {
    id: 33,
    name: "T Shirt Full Sleeve",
    category: "kids",
    image: p33_img,
    new_price: 480.0,
    old_price: 580.0,
  },
  {
    id: 35,
    name: "T Shirt",
    category: "kids",
    image: p35_img,
    new_price: 400.0,
    old_price: 500.0,
  },
  {
    id: 36,
    name: "T shirt & Jacket",
    category: "kids",
    image: p36_img,
    new_price: 600.0,
    old_price: 700.0,
  },
];

export default all_product;
