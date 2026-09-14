import React from "react";
import Input from "@/components/ui/Input";

function ContactForm() {
  return (
    <section className="w-full px-12 py-24 flex gap-10 bg-gray-100">
      <div className="flex flex-col gap-4 w-[50%] h-auto">
        <p className="text-sm text-green uppercase">online inquiry</p>
        <p className="text-5xl font-extrabold poppins max-w-xl">
          Send Us a <span className="text-green">Message.</span>
        </p>
        <p className="text-lg">
          Fill out the form below and our Southampton-based crew will review and
          respond directly.
        </p>
        <div className="w-full mt-2">
          <p className="font-bold">Name</p>
          <Input type="text" placeholder="your full name" className="mt-1" />
        </div>
        <div className="w-full">
          <p className="font-bold">Email</p>
          <Input
            type="text"
            placeholder="your email address"
            className="mt-1"
          />
        </div>
        <div className="flex items-center sm:gap-4 gap-3 w-full">
          <div className="w-full">
            <p className="font-bold">Phone No (Optional)</p>
            <Input
              type="text"
              placeholder="e.g. +44 7123 456789"
              className="mt-1"
            />
          </div>
          <div className="w-full">
            <p className="font-bold">Booking Reference (Optional)</p>
            <Input type="text" placeholder="e.g. CPS-98765" className="mt-1" />
          </div>
        </div>
        <div className="w-full">
          <p className="font-bold">Subject</p>
          <Input type="text" placeholder="General Enquiry" className="mt-1" />
        </div>
        <div className="w-full">
          <p className="font-bold">Message</p>
          <textarea
            placeholder="How can we help you today?"
            rows={4}
            className="w-full mt-1 resize-none border px-4 py-2 text-sm rounded-md border-gray-400 bg-transparent text-black placeholder:text-gray-400 focus:border-green focus:ring-1 focus:ring-green"
          />
        </div>
        <p className="text-sm">
          We'll get back to you within one business day. A real person from our
          Southampton team reads every message.
        </p>
      </div>
      <div className="w-[50%] h-fit">
        <img
          className="rounded-xl h-[90vh] w-full object-cover"
          src="/contact.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default ContactForm;
