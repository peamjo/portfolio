import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
"use client";

const ContactForm = () => {
  const [loading,setLoading] = useState(false);
  async function handleSubmit(e: any) {
    setLoading(true);
    e.preventDefault();
    const data = {
    name: String(e.target.name.value),
    number: Number(e.target.number.value),
    email: String(e.target.email.value),
    subject: String(e.target.subject.value),
    message: String(e.target.message.value),
    };
    
    const response = await fetch ("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully")
      setLoading(false);
      // reset the form
      e.target.name.value = "";
      e.target.number.value = "";
      e.target.email.value = "";
      e.target.subject.value = "";
      e.target.message.value = "";
    if (!response.ok) {
      console.log("Error sending message")
      setLoading(false);
    }
  }
}

  return (
    <div className="p-4">
      <form method="post" onSubmit={handleSubmit}>
        <div className="grid w-full gap-4 py-2 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase">Name</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="text"
              required
              id="name"
              placeholder="Input your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase">Phone Number</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="number"
              required
              id="number"
              placeholder="Input your phone number"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase">E-Mail</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="email"
              required
              id="email"
              placeholder="Input your e-mail"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm uppercase">Subject</label>
            <input
              className="flex p-3 border-2 border-gray-300 rounded-lg"
              type="text"
              required
              id="subject"
              placeholder="Input your phone subject"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm uppercase">Message</label>
          <textarea
            className="p-3 border-2 border-gray-300 rounded-lg"
            name="message"
            rows={10}
            style={{ resize: "none" }}
            placeholder="Input your message"
          />
        </div>
        <button
          disabled={loading}
          className="w-full p-4 mt-4 text-gray-100 bg-[#5651e5] disabled:bg-[#9894df] disabled:text-gray-100"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
