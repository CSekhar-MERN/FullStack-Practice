import React, { useState } from "react";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "30vh",
    width: "30vw",
    border: "2px solid black",
  },
};

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3030/submit",
        formData
      );
      console.log(response.data);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", number: "" });
    } catch (error) {
      console.error("error in submiting data : ", error);
    }
  };

  return (
    <>
      <div style={customStyles}>
        <form action="/" method="post" onSubmit={handleSubmit}>
          <label>
            <strong>Name: </strong>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label>
            <strong>Email: </strong>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>
            <br />
            <strong>Phone: </strong>
          </label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
          <br />
          <button type="submit">submit</button>
        </form>
        {formSubmitted && (
          <p>Form submitted! You can now fill in a new form below.</p>
        )}
      </div>
    </>
  );
}

export default Form;
