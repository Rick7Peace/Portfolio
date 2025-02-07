import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// This line imports the 'FontAwesomeIcon' component from the 'react-fontawesome' package. This component will be used to display Font Awesome icons in the app.

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// Here, the specific Font Awesome icons for GitHub (faGithub) and LinkedIn (faLinkedin) are imported from the 'free-brands-svg-icons' package. These icons are part of the Font Awesome brand icons.

export default function Footer() {
  // This defines a functional component named Footer, which is the footer section of the webpage. It's exported as the default export, making it accessible to be imported elsewhere.

  return (
    <footer className="bg-stone-300 p-6">
      {/* The <footer> tag defines the footer section of the page, which usually contains information like copyright or links. */}
      {/* 'bg-stone-300' applies a background color to the footer (a light gray tone from Tailwind CSS). */}
      {/* 'p-6' adds padding of 6 units around the entire footer to give it some spacing. */}

      <div className="container mx-auto text-center text-stone-700">
        {/* This <div> is used to wrap the content inside the footer. */}
        {/* 'container' centers the content and applies maximum width constraints for responsiveness. */}
        {/* 'mx-auto' centers the <div> horizontally within its parent. */}
        {/* 'text-center' centers the text horizontally inside this <div>. */}
        {/* 'text-stone-700' applies a dark gray color to the text. */}

        <p className="text-base md:text-lg">&copy; 2025 Ricardo marmolejo</p>
        {/* The <p> element is for the copyright information. */}
        {/* 'text-base' applies a standard text size on small screens. */}
        {/* 'md:text-lg' increases the font size on medium screens and larger (using Tailwind's responsive classes). */}
        {/* '&copy;' is the copyright symbol, followed by the year and the author's name. */}

        <div className="flex justify-center flex-wrap space-x-4 mt-4">
          {/* This <div> holds the social media links (GitHub and LinkedIn). */}
          {/* 'flex' makes this <div> a flex container, which aligns its child elements (the <a> tags) in a row by default. */}
          {/* 'justify-center' centers the child elements horizontally inside this container. */}
          {/* 'flex-wrap' allows the child elements to wrap onto a new line if the screen is small and the space runs out. */}
          {/* 'space-x-4' adds horizontal spacing of 4 units between each child element (social media links). */}
          {/* 'mt-4' adds margin to the top of the <div>, creating space between the copyright and the social media icons. */}

          <a href="https://github.com/Rick7Peace" target="_blank" rel="noreferrer" className="hover:text-yellow-700">
            {/* The <a> tag creates a hyperlink to the GitHub profile. */}
            {/* 'href="https://github.com/Rick7Peace"' specifies the URL that the link will navigate to when clicked. */}
            {/* 'target="_blank"' opens the link in a new tab, so the user doesn't leave the current page. */}
            {/* 'rel="noreferrer"' ensures that the new tab cannot access information about the origin of the link, improving security. */}
            {/* 'className="hover:text-yellow-700"' applies a hover effect that changes the icon color to yellow-700 when the user hovers over it. */}
            
            <FontAwesomeIcon icon={faGithub} size="2x" />
            {/* The 'FontAwesomeIcon' component is used to display an icon. */}
            {/* 'icon={faGithub}' specifies that the GitHub icon should be shown. */}
            {/* 'size="2x"' increases the icon size to twice the default size, making it more visible. */}
          </a>

          <a href="https://www.linkedin.com/in/ricardo-marmolejo-bba004155/" target="_blank" rel="noreferrer" className="hover:text-yellow-700">
            {/* The <a> tag creates a hyperlink to the LinkedIn profile. */}
            {/* 'href="https://www.linkedin.com/in/ricardo-marmolejo-bba004155/"' specifies the LinkedIn profile URL. */}
            {/* 'target="_blank"' ensures the link opens in a new tab. */}
            {/* 'rel="noreferrer"' is included for security reasons. */}
            {/* 'className="hover:text-yellow-700"' applies a yellow hover effect on the icon. */}
            
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            {/* The 'FontAwesomeIcon' component is used to render the LinkedIn icon. */}
            {/* 'icon={faLinkedin}' indicates the LinkedIn icon is being displayed. */}
            {/* 'size="2x"' makes the icon twice as large as the default size. */}
          </a>
        </div>
      </div>
    </footer>
  );
}
