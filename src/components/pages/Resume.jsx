// This is the functional component 'Resume' which is used to render the resume section.
export default function Resume() {
  return (
    // The <section> element groups and styles the content related to the resume. 
    // It is centered with margins and padding that adjust based on the screen size.
    <section className="text-center m-4 md:m-10 p-10 md:p-0">
      
      {/* The <h2> element displays the main heading of the resume section */}
      <h2 className="text-3xl md:text-5xl font-bold mb-25 text-black">Resume</h2>

      {/* The <a> element creates a clickable link that allows the user to download the resume file */}
      <a
        href="assets/Ricardo Resume 2023.pdf" // Path to the resume PDF file
        download // This makes the link initiate a download of the file when clicked
        className="bg-stone-300 text-black font-bold text-lg md:text-xl px-10 py-2 md:px-24 rounded-xl"
      >
        Download Resume
      </a>
      
      {/* The <h3> element serves as a subheading to introduce a message */}
      <h3 className="text-3xl md:text-3xl mb-16 font-bold mt-26 text-black">Thank You</h3>
      
      {/* The <ul> element is used to display a list of skills */}
      <ul className="list- text-black text-center m-4 md:mx-auto md:max-w-xs">
        {/* Each <li> element represents a skill listed on the resume */}
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
      </ul>
    </section>
  );
}
