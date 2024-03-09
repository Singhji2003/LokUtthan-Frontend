import React from 'react'
import '../CSS/HomeReview.css'
const HomeReview = () => {
    return (
        <div className="home-review">
            <div className="home-review-heading">
                <h1>Donor Speak</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa amet, architecto corrupti quos repellendus ea cumque a obcaecati! Libero quam quos assumenda officia vitae necessitatibus ea et est neque, provident ullam, molestias voluptates tenetur.</p>
            </div>
            <div className="home-review-content">
                <div className="home-each-review first-review">
                    <img src={require('../Image/arpan.jpeg')} alt="" />
                    <i class="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis placeat culpa cupiditate maiores explicabo laudantium unde, est dicta quod, officia vel dolores reprehenderit illum nam. Inventore reprehenderit adipisci libero vel repellat eaque harum.</p>
                </div>
                <div className="home-each-review second-review">
                    <img src={require('../Image/arpan.jpeg')} alt="" />
                    <i className="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis placeat culpa cupiditate maiores explicabo laudantium unde, est dicta quod, officia vel dolores reprehenderit illum nam. Inventore reprehenderit adipisci libero vel repellat eaque harum.</p>
                </div>
                <div className="home-each-review third-review">
                    <img src={require('../Image/arpan.jpeg')} alt="" />
                    <i class="fa-solid fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis placeat culpa cupiditate maiores explicabo laudantium unde, est dicta quod, officia vel dolores reprehenderit illum nam. Inventore reprehenderit adipisci libero vel repellat eaque harum.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeReview