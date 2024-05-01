import React from "react";
import "./Contact.css";
import { Formik } from "formik";
import contactbg from "../../assets/images/contactbg.png";
import { BsArrowRightCircle } from "react-icons/bs";
import sections from "../../constants/data";

const Contact = () => {
  return (
    <section className="contact section-p-top bg-black" id="contact">
      <div className="container">
        <div className="contact-content grid text-center">
          <div className="contact-left">
            <div className="section-t">
              <h3 className="text-uppercase">Let's Talk?</h3>
              <p className="text">
                {sections.contact.map((contact) => {
                  return (
                    <p className="" key={contact.id}>
                      <span className="item-icon">{contact.icon}</span>
                      <span className="fw-5 text-white"> {contact.info}</span>
                    </p>
                  );
                })}
              </p>
            </div>

            <Formik
              initialValues={{ email: "", feedback: "" }}
              validate={(values) => {
                const errors = {};

                if (!values.feedback) {
                  errors.feedback = "Feedback is required";
                }

                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-elem text-white">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="form-control"
                      placeholder="Email address"
                    />
                    <span className="form-control-text">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                  <div className="form-elem">
                    <textarea
                      name="feedback"
                      rows="50"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.feedback}
                      className="form-control"
                      placeholder=""
                    ></textarea>
                    <span className="form-control-text">
                      {errors.feedback && touched.feedback && errors.feedback}
                    </span>
                  </div>

                  <div className="flex flex-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn"
                    >
                      contact us
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className="contact-right pt-5">
            <img src={contactbg} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
