import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <>
    <section id = "offers" class = "py-5">
    <div class = "container">
        <div class = "row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
            <div class = "offers-content">
                <span class = "text-white">Discount Up To 40%</span>
                <h2 class = "mt-2 mb-4 text-white">Grand Sale Offer!</h2>
                <Link to = "/shop" class = "btn">Buy Now</Link>
            </div>
        </div>
    </div>
</section>
    <section id = "popular" class = "py-5">
    <div class = "container">
        <div class = "title text-center pt-3 pb-5">
            <h2 class = "position-relative d-inline-block ms-4">Popular Of This Year</h2>
        </div>

        <div class = "row">
            <div class = "col-md-6 col-lg-4 row g-3">
                <h3 class = "fs-5">Top Rated</h3>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/top_rated_1.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Blue Shirt</p>
                        <span>₦ 4500.00</span>
                    </div>
                </div>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/top_rated_2.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Wristwatch</p>
                        <span>₦ 40000.00</span>
                    </div>
                </div>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/top_rated_3.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Red Hoodie</p>
                        <span>₦ 8000.00</span>
                    </div>
                </div>
            </div>

            <div class = "col-md-6 col-lg-4 row g-3">
                <h3 class = "fs-5">Best Selling</h3>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/best_selling_1.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Vintage Suit</p>
                        <span>₦ 45000.00</span>
                    </div>
                </div>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/best_selling_2.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Black Sweater</p>
                        <span>₦ 7500.00</span>
                    </div>
                </div>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/best_selling_3.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Polo Shirt</p>
                        <span>₦ 5400.00</span>
                    </div>
                </div>
            </div>

            <div class = "col-md-6 col-lg-4 row g-3">
                <h3 class = "fs-5">On Sale</h3>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/on_sale_1.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Vintage Bag</p>
                        <span>₦ 78000.00</span>
                    </div>
                </div>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/on_sale_2.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Black Hoodie</p>
                        <span>₦ 7000.00</span>
                    </div>
                </div>
                <div class = "d-flex align-items-start justify-content-start">
                    <img src = "../assets/on_sale_3.jpg" alt = "" class = "img-fluid pe-3 w-25" />
                    <div>
                        <p class = "mb-0">Nike Shoe</p>
                        <span>₦ 7000.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Popular