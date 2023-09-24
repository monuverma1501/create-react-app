import React, { useEffect, useState } from "react";
import "./ContactUs.css";

function Contact() {
  const initialvalue = { name: "", email: "", message: "" };
  const [formvalues, setFormvalues] = useState(initialvalue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formvalues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      alert("Form data is successfully sent.");
      console.log(formvalues);
    }
  }, [formError]);
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "Name in required !";
    }
    if (!values.email) {
      errors.email = "Email in required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format !";
    }
    if (!values.message) {
      errors.message = "Message in required !";
    }
    return errors;
  };
  return (
    <div className="big-b">

        <div className="row1">
          <div className="textbox1">
            <p className="p-1">Newslleter</p>
            <p className="p-2">Get news about articles and updates <br/>in your inbox.</p>
          </div>
          <div className="contactform">
            <form onSubmit={handleSubmit} className="form" action="">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="NAME"
                value={formvalues.name}
                onChange={handleChange}
              />
              <p className="errorshow">{formError.name}</p>

              <br />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formvalues.email}
                onChange={handleChange}
              />
              <p className="errorshow">{formError.email}</p>

              <br />
              <input
                className="input"
                type="text"
                name="message"
                placeholder="MESSAGE"
                value={formvalues.message}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>

        <div className="row2">
          <div className="getInTouch">GET <br /> IN TOUCH</div>
          <p className="errorshow">{formError.message}</p>
              <div>
                <button className="send">SEND</button>
              </div>
        </div>

      </div>
    
  );
}

export default Contact;