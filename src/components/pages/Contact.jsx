import { useState } from "react";
// This line imports the 'useState' hook from React. 'useState' is a built-in hook that allows us to add state to a functional component.

export default function ContactForm() {
  // This is the definition of the 'ContactForm' functional component.
  // The 'export default' allows this component to be imported and used in other parts of the application.

  const [name, setName] = useState("");
  // Defines a state variable 'name' and a function 'setName' to update the value of 'name'.
  // 'useState("")' initializes the 'name' state with an empty string.

  const [email, setEmail] = useState("");
  // Defines a state variable 'email' and a function 'setEmail' to update the value of 'email'.
  // 'useState("")' initializes the 'email' state with an empty string.

  const [message, setMessage] = useState("");
  // Defines a state variable 'message' and a function 'setMessage' to update the value of 'message'.
  // 'useState("")' initializes the 'message' state with an empty string.

  const handleSubmit = (e) => {
    // Defines the 'handleSubmit' function, which will be called when the form is submitted.
    // 'e' represents the event object passed to the function.

    e.preventDefault();
    // 'e.preventDefault()' prevents the default form submission behavior, which would typically reload the page.
    // This allows us to handle the form submission programmatically without a page refresh.

    window.location.href = `mailto:marmolejo.ricardo@gmail.com?subject=Message from ${name}&body=${message} (Contact: ${email})`;
    // 'window.location.href' is used to simulate a mailto link, which opens the default email client with the subject and body pre-filled.
    // The email is sent to 'marmolejo.ricardo@gmail.com', and the subject includes the user's name.
    // The body contains the message and the user's email address.
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto m-28 md:p-8">
      {/* This is the form element that contains the inputs and the submit button. */}
      {/* 'onSubmit={handleSubmit}' binds the form submission to the 'handleSubmit' function. */}
      {/* 'flex flex-col' makes the form layout use a column layout (one item stacked on top of another). */}
      {/* 'max-w-md' limits the form's maximum width to medium size. */}
      {/* 'mx-auto' centers the form horizontally. */}
      {/* 'm-28' adds margin around the form. */}
      {/* 'md:p-8' adds padding on medium screens and larger. */}

      <div className="mb-4">
        {/* This <div> wraps the Name input field. 'mb-4' applies margin to the bottom. */}
        
        <label htmlFor="name" className="block text-xl">
          Name:
        </label>
        {/* The label element is associated with the 'name' input field, providing a description for the input. */}
        {/* 'htmlFor="name"' binds this label to the input with id='name'. */}
        {/* 'text-xl' makes the label text extra large. */}
        
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border bg-stone-300 rounded p-2 text-stone-900"
        />
        {/* The 'input' field for the user's name. */}
        {/* 'type="text"' specifies this is a text input field. */}
        {/* 'id="name"' associates the input with the label. */}
        {/* 'value={name}' binds the input value to the 'name' state variable. */}
        {/* 'onChange={(e) => setName(e.target.value)}' updates the 'name' state when the user types in the input. */}
        {/* 'required' makes this field mandatory to fill before submitting. */}
        {/* 'w-full' makes the input take up the full width of its container. */}
        {/* 'border' adds a border around the input. */}
        {/* 'bg-stone-300' sets a background color. */}
        {/* 'rounded' makes the input field's corners rounded. */}
        {/* 'p-2' adds padding inside the input field. */}
        {/* 'text-stone-900' sets the text color inside the input to a dark color. */}
      </div>

      <div className="mb-4">
        {/* This <div> wraps the Email input field. 'mb-4' applies margin to the bottom. */}
        
        <label htmlFor="email" className="block text-xl">
          Email:
        </label>
        {/* The label element is associated with the 'email' input field, providing a description for the input. */}
        
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border bg-stone-300 rounded p-2 text-stone-900"
        />
        {/* The 'input' field for the user's email. */}
        {/* 'type="email"' specifies this is an email input field. */}
        {/* 'value={email}' binds the input value to the 'email' state variable. */}
        {/* 'onChange={(e) => setEmail(e.target.value)}' updates the 'email' state when the user types in the input. */}
        {/* 'required' makes this field mandatory to fill before submitting. */}
      </div>

      <div className="mb-4">
        {/* This <div> wraps the Message textarea field. 'mb-4' applies margin to the bottom. */}
        
        <label htmlFor="message" className="block text-xl">
          Message:
        </label>
        {/* The label element is associated with the 'message' textarea field, providing a description for the input. */}
        
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full border bg-stone-300 rounded p-4 text-stone-900"
        />
        {/* The 'textarea' element allows users to type longer text, such as a message. */}
        {/* 'value={message}' binds the textarea value to the 'message' state variable. */}
        {/* 'onChange={(e) => setMessage(e.target.value)}' updates the 'message' state when the user types in the textarea. */}
        {/* 'required' makes this field mandatory to fill before submitting. */}
        {/* 'p-4' adds more padding inside the textarea compared to the input fields. */}
      </div>

      <button
        type="submit"
        className="bg-stone-300 text-stone-900 text-xl px-24 py-2 rounded-xl"
      >
        Send
      </button>
      {/* The 'button' element is used to submit the form. */}
      {/* 'type="submit"' makes it trigger the form's onSubmit event when clicked. */}
      {/* 'bg-stone-300' sets the background color of the button. */}
      {/* 'text-stone-900' sets the text color inside the button. */}
      {/* 'text-xl' makes the button text extra large. */}
      {/* 'px-24 py-2' applies horizontal and vertical padding. */}
      {/* 'rounded-xl' makes the button have rounded corners. */}
    </form>
  );
}
