import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const response = await fetch("pages/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black rounded-lg shadow-md">
      <h2 className="text-2xl text-white mb-4">Contact Me</h2>
      {success && (
        <p className="text-green-500 mb-4">Message sent successfully!</p>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
        >
          Send Message
        </button>
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </form>
    </div>
  );
};

export default ContactForm;
