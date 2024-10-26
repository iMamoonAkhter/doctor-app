import { Modal, ModalClose, ModalDialog, Typography, Button, Input, FormControl, FormLabel } from "@mui/joy";
import "animate.css";
import { useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppContext } from "../context/AppContext";

const BookAppointmentModal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      setAnimationClass("animate__animated animate__backInUp");
    } else if (animationClass) {
      setAnimationClass("animate__animated animate__backOutUp");
    }
  }, [isModalOpen]);

  const handleClose = () => {
    setAnimationClass("animate__animated animate__backOutUp");
    setTimeout(closeModal, 500);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      date: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      contact: Yup.string()
        .required("Contact Number is required")
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
      date: Yup.date().required("Date is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().min(20, "Message must be at least 20 characters").required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted successfully:", values);
      resetForm();
    },
  });

  return (
    <Modal open={isModalOpen} onClose={handleClose} className="d-flex justify-content-center align-content-center">
      <ModalDialog layout="center" size="sm" variant="outlined" className={animationClass}>
        <ModalClose onClick={handleClose} />
        <Typography variant="h5" component="h2" gutterBottom>
          Book Appointment
        </Typography>
        <Typography mb={2}>
          Please fill in your details to book an appointment.
        </Typography>
        <form onSubmit={formik.handleSubmit}>

          {/* Row 1 - Name and Contact Number */}
          <div className="d-flex gap-2 mb-3">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && !!formik.errors.name}
                placeholder="Enter your name"
              />
              {formik.touched.name && formik.errors.name && (
                <Typography color="danger" level="body3">
                  {formik.errors.name}
                </Typography>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Contact Number</FormLabel>
              <Input
                name="contact"
                value={formik.values.contact}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contact && !!formik.errors.contact}
                placeholder="Enter contact number"
              />
              {formik.touched.contact && formik.errors.contact && (
                <Typography color="danger" level="body3">
                  {formik.errors.contact}
                </Typography>
              )}
            </FormControl>
          </div>

          {/* Row 2 - Date and Subject */}
          <div className="d-flex gap-2 mb-3">
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input
                name="date"
                type="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.date && !!formik.errors.date}
              />
              {formik.touched.date && formik.errors.date && (
                <Typography color="danger" level="body3">
                  {formik.errors.date}
                </Typography>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Subject</FormLabel>
              <Input
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.subject && !!formik.errors.subject}
                placeholder="Enter subject"
              />
              {formik.touched.subject && formik.errors.subject && (
                <Typography color="danger" level="body3">
                  {formik.errors.subject}
                </Typography>
              )}
            </FormControl>
          </div>

          {/* Row 3 - Message */}
          <div className="mb-3">
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Input
                name="message"
                multiline
                minRows={3}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && !!formik.errors.message}
                placeholder="Enter your message"
              />
              {formik.touched.message && formik.errors.message && (
                <Typography color="danger" level="body3">
                  {formik.errors.message}
                </Typography>
              )}
            </FormControl>
          </div>

          {/* Submit Button */}
          <Button type="submit" color="primary" variant="contained" fullWidth>
            Submit
          </Button>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default BookAppointmentModal;
