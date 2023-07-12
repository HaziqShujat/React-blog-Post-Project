import React from "react";
import "./AboutUS.css";

function AboutUS({ setOpen }) {
  return (
    <div>
      <form onClick={setOpen}>
        <div className="blog-container">
          <h1 className="blog-title">About Us</h1>
          <p className="blog-content">
            Welcome to our website! We are a passionate team dedicated to
            providing high-quality products and excellent customer service. With
            years of experience in the industry, we strive to deliver the best
            solutions for our customers' needs.
          </p>
          <p className="blog-content">
            Our mission is to make your life easier. Whether you're looking for
            innovative gadgets, stylish accessories, or practical tools, we have
            you covered. We carefully curate our product selection to ensure
            that each item meets our strict standards of quality, functionality,
            and style.
          </p>
          <p className="blog-content">
            At our core, we value customer satisfaction above all else. We
            believe in building strong relationships with our customers and
            providing them with exceptional support. Our friendly and
            knowledgeable team is always ready to assist you, answer your
            questions, and help you find the perfect products.
          </p>
          <p className="blog-content">
            We are also committed to sustainability and ethical business
            practices. We strive to source products that are eco-friendly,
            promote fair labor conditions, and contribute positively to our
            communities.
          </p>
          <p className="blog-content">
            Thank you for visiting our website. We hope you enjoy exploring our
            collection and find exactly what you're looking for. If you have any
            suggestions, feedback, or inquiries, please don't hesitate to reach
            out to us. We're here to make your experience with us exceptional.
          </p>
        </div>
      </form>
    </div>
  );
}

export default AboutUS;
