import React, { useState } from "react";
import Input from './Input';
import TextArea from './TextArea';


const ContactForm = () => {
    
  return (
    <div className="p-4">
      <form action="/contact" id="contact-form" method="post">
        <div className="grid w-full gap-4 py-2 md:grid-cols-2">
          <Input
            name="Name"
            placeholder="Input your name"
          />
          <Input
            name="Phone Number"
            placeholder="Input your phone number"
          />
        </div>
        <Input name="E-mail" placeholder="Input your e-mail" />
        <Input name="Subject" placeholder="Input your subject" />
        <TextArea
          name="Message"
          placeholder="Input your message"
        />
        <button className="w-full p-4 mt-4 text-gray-100" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm
