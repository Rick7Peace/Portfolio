import { useState } from "react";

// The ContactForm component allows users to submit their contact information.
export default function ContactForm() {
  // State hook for managing the 'name' input field value.
  const [name, setName] = useState("");  

  // State hook for managing the 'email' input field value.
  const [email, setEmail] = useState(""); 

  // State hook for managing the 'message' textarea field value.
  const [message, setMessage] = useState(""); 

  // Function to handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents the default form submission behavior (page refresh).
    
    // Redirects the browser to the default email client with pre-filled subject and body.
    window.location.href = `mailto:marmolejo.ricardo@gmail.com?subject=Message from ${name}&body=${message} (Contact: ${email})`;
  };

  return (
    // The form element that wraps the input fields and submit button.
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto md:p-1">
      
      {/* Header of the contact form */}
      <h2 className="text-3xl md:text-5xl mb-10 text-center font-bold text-black">Contact Me</h2>

      {/* Input field for the user's name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-xl text-black">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name} // Binds the value of the input field to the 'name' state variable.
          onChange={(e) => setName(e.target.value)} // Updates 'name' state as the user types.
          required // Marks this input as required before submitting.
          className="w-full border bg-stone-300 rounded p-2 text-stone-900"
        />
      </div>

      {/* Input field for the user's email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-xl text-black">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email} // Binds the value of the input field to the 'email' state variable.
          onChange={(e) => setEmail(e.target.value)} // Updates 'email' state as the user types.
          required // Marks this input as required before submitting.
          className="w-full border bg-stone-300 rounded p-2 text-stone-900"
        />
      </div>

      {/* Textarea for the user's message */}
      <div className="mb-4">
        <label htmlFor="message" className="block text-xl text-black">
          Message:
        </label>
        <textarea
          id="message"
          value={message} // Binds the value of the textarea to the 'message' state variable.
          onChange={(e) => setMessage(e.target.value)} // Updates 'message' state as the user types.
          required // Marks this field as required before submitting.
          className="w-full border bg-stone-300 rounded p-4 text-stone-900"
        />
      </div>

      {/* Submit button to trigger the form submission */}
      <button
        type="submit"
        className="bg-stone-300 text-stone-900 text-xl px-24 py-2 rounded-xl"
      >
        Send
      </button>
    </form>
  );
}
