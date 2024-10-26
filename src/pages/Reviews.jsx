import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaStar } from "react-icons/fa";
import "../css/Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", date: "2024-10-01", time: "14:00", rating: 4, message: "Great experience!" },
    { id: 2, name: "Jane Smith", date: "2024-10-02", time: "16:30", rating: 5, message: "Excellent service!" },
  ]);

  const formik = useFormik({
    initialValues: {
      name: "",
      date: new Date().toISOString().split("T")[0],  // Pre-fill with current date
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),  // Pre-fill with current time
      rating: 0,
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      rating: Yup.number().min(1, "Please provide a rating").required("Rating is required"),
      message: Yup.string().min(20, "Message must be at least 20 characters").required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setReviews([...reviews, { ...values, id: Date.now() }]);
      resetForm();
    },
  });

  const handleStarClick = (index) => {
    formik.setFieldValue("rating", index + 1);
  };

  return (
    <div className="reviews-container c-width-1 m-auto">
      <div className="review-form">
        <h2>Submit a Review</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Patient Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={formik.touched.name && formik.errors.name ? "input-error" : ""}
            />
            {formik.touched.name && formik.errors.name ? <div className="error-message">{formik.errors.name}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className={formik.touched.date && formik.errors.date ? "input-error" : ""}
            />
            {formik.touched.date && formik.errors.date ? <div className="error-message">{formik.errors.date}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              name="time"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              className={formik.touched.time && formik.errors.time ? "input-error" : ""}
            />
            {formik.touched.time && formik.errors.time ? <div className="error-message">{formik.errors.time}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleStarClick(index)}
                  className={index < formik.values.rating ? "star-filled" : "star-empty"}
                />
              ))}
            </div>
            {formik.touched.rating && formik.errors.rating ? <div className="error-message">{formik.errors.rating}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={formik.touched.message && formik.errors.message ? "input-error" : ""}
            />
            {formik.touched.message && formik.errors.message ? <div className="error-message">{formik.errors.message}</div> : null}
          </div>

          <button type="submit" className="submit-button">Submit Review</button>
        </form>
      </div>

      <div className="reviews-list com-margin" style={{marginBottom: "5vw"}}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.name}</h3>
            <h4>PATIENT</h4>
            <p>{review.date} - {review.time}</p>
            <p>{review.message}</p>
            <div className="rating">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} size={20} color="#ffc107" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
