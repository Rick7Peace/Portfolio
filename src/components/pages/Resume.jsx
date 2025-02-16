export default function Resume() {
  // This line defines a functional component named 'Resume'.
  // The 'export default' allows this component to be imported and used in other parts of the application.

  return (
    <section className="text-center m-4 md:m-10 p-10 md:p-20">
      {/* The <section> element is used to group and style content related to the resume. */}
      {/* 'text-center' centers the text horizontally inside the section. */}
      {/* 'm-4' adds margin on all sides of the section (4 units). */}
      {/* 'md:m-10' increases the margin on medium screens and larger (10 units). */}
      {/* 'p-10' adds padding on all sides of the section (10 units). */}
      {/* 'md:p-20' increases the padding on medium screens and larger (20 units). */}

      <h2 className="text-3xl md:text-4xl mb-4">Resume</h2>
      {/* The <h2> element is the heading for the resume section. */}
      {/* 'text-3xl' makes the text size 3xl for small screens. */}
      {/* 'md:text-4xl' increases the text size to 4xl on medium screens and larger. */}
      {/* 'mb-4' adds margin to the bottom of the heading (4 units) to create space between the heading and the content below. */}

      <a
        href="assets/Ricardo Resume 2023.pdf"
        download
        className="bg-stone-300 text-stone-700 text-lg md:text-xl px-10 py-2 md:px-24 rounded-xl"
      >
        Download Resume
      </a>
      {/* The <a> element creates a clickable link to download the resume. */}
      {/* 'href="assets/Updated Resume.pdf"' specifies the location of the file to be downloaded. */}
      {/* 'download' triggers the download when the link is clicked. */}
      {/* 'className' applies Tailwind CSS utility classes to style the link: */}
      {/* 'bg-stone-300' gives the link a background color (light gray). */}
      {/* 'text-stone-700' sets the text color to dark gray. */}
      {/* 'text-lg' makes the text size large for small screens, and 'md:text-xl' increases the size to extra-large on medium screens and above. */}
      {/* 'px-10' adds horizontal padding (10 units), and 'py-2' adds vertical padding (2 units) for smaller screens. */}
      {/* 'md:px-24' increases horizontal padding to 24 units on medium screens and above. */}
      {/* 'rounded-xl' makes the link button have rounded corners. */}

      <h3 className="text-3xl md:text-4xl mt-6">Adeptly</h3>
      {/* The <h3> element is used for a subheading, describing skills or proficiencies. */}
      {/* 'text-3xl' makes the text size 3xl for small screens, and 'md:text-4xl' increases the text size to 4xl on medium screens and larger. */}
      {/* 'mt-6' adds margin to the top of the subheading (6 units), creating space between the subheading and the content above. */}

      <ul className="list-disc list-inside text-left m-4 md:mx-auto md:max-w-xs">
        {/* The <ul> element creates an unordered list for listing skills. */}
        {/* 'list-disc' applies a bullet point style for the list items. */}
        {/* 'list-inside' moves the bullet points inside the list, rather than outside. */}
        {/* 'text-left' aligns the text to the left inside the list. */}
        {/* 'm-4' adds margin around the list (4 units) on all sides. */}
        {/* 'md:mx-auto' centers the list horizontally on medium screens and larger. */}
        {/* 'md:max-w-xs' limits the maximum width of the list to 'xs' (extra small) on medium screens and larger. */}

        <li>JavaScript</li>
        {/* Each <li> element represents a skill listed in the resume. */}
        {/* This first item is 'JavaScript', which is listed as one of the skills. */}

        <li>React</li>
        {/* The second item in the list is 'React', representing the user's proficiency in React.js. */}

        <li>Node.js</li>
        {/* The third item in the list is 'Node.js', representing the user's proficiency in Node.js. */}

        <li>HTML & CSS</li>
        {/* The fourth item in the list is 'HTML & CSS', representing the user's proficiency in web development technologies. */}
      </ul>
    </section>
  );
}
