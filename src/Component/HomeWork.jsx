import React from "react";
import '../CSS/HomeWork.css'
const HomeWork = () => {
    return (
        <div className="home-work">
            <h1>What We Do </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam laborum earum molestiae dolorem, laudantium eveniet eligendi asperiores velit, facilis similique possimus blanditiis assumenda iusto enim! Ab ducimus distinctio repudiandae quos? Exercitationem illum non veritatis laboriosam libero repellendus voluptatibus modi. Praesentium fugit nulla possimus voluptatibus reprehenderit hic necessitatibus voluptas consequatur vitae.</p>
            <div className="home-work-card">
                <div className="each-work-card">
                    <img src={require('../Image/home.PNG')} alt="" />
                    <h2>Helping Girl from poor Families Married Off Society</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque cum, quae cumque deserunt necessitatibus nulla libero ipsam exercitationem, quasi inventore? Aspernatur perferendis </p>
                    <a href="">Learn More +</a>
                </div>
                <div className="each-work-card">
                    <img src={require('../Image/home3.PNG')} alt="" />
                    <h2>Helping Young Children with Food and Education</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque cum, quae cumque deserunt necessitatibus nulla libero ipsam exercitationem, quasi inventore? Aspernatur perferendis </p>
                    <a href="">Learn More +</a>
                </div>
                <div className="each-work-card">
                    <img src={require('../Image/home.PNG')} alt="" />
                    <h2>Offering Elderly Care for a better Life</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque cum, quae cumque deserunt necessitatibus nulla libero ipsam exercitationem, quasi inventore? Aspernatur perferendis </p>
                    <a href="">Learn More +</a>
                </div>
            </div>
        </div>
    )
}

export default HomeWork;