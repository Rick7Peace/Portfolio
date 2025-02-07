import { Link, useLocation } from 'react-router-dom';
// The 'Link' component is imported from 'react-router-dom'. This is used for navigation without reloading the page (client-side routing).
// The 'useLocation' hook is imported from 'react-router-dom'. It allows us to access the current URL's location, which helps highlight the active link in the navigation.

import { useState } from 'react';
// The 'useState' hook from React is imported to manage the state of the mobile menu (whether it is open or closed).

export default function Header() {
  // This defines a functional component called 'Header' that represents the header of the website.

  const location = useLocation();
  // The 'location' variable stores the current location of the page (i.e., the URL). This is useful for dynamically updating the style of links depending on whether they are active.

  const [isOpen, setIsOpen] = useState(false);
  // The 'useState' hook creates a state variable 'isOpen', which tracks whether the mobile menu is open (true) or closed (false).
  // 'setIsOpen' is a function that allows you to update the state of 'isOpen'.

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // The 'toggleMenu' function is used to change the state of the mobile menu. It toggles the value of 'isOpen' between true and false.
  // If the menu is closed, it opens; if it’s open, it closes.

  return (
    <header className="bg-stone-300 p-4 md:p-8 shadow-lg">
      {/* The <header> element represents the header of the page. */}
      {/* 'bg-stone-300' applies a light gray background to the header. */}
      {/* 'p-4' adds padding to the header (for smaller screens). */}
      {/* 'md:p-8' increases the padding on medium and larger screens. */}
      {/* 'shadow-lg' applies a large shadow around the header for depth. */}

      <div className="container mx-auto flex justify-between items-center tracking-wider antialiased">
        {/* This <div> is used to create a container for the header content. */}
        {/* 'container' centers and constrains the width of the content for responsiveness. */}
        {/* 'mx-auto' horizontally centers the content within the container. */}
        {/* 'flex' applies flexbox to the container, making its children (logo and navigation) align in a row. */}
        {/* 'justify-between' places space between the logo on the left and the navigation on the right. */}
        {/* 'items-center' vertically centers the items inside the flex container. */}
        {/* 'tracking-wider' increases the letter-spacing for readability. */}
        {/* 'antialiased' applies anti-aliasing to text for smoother edges. */}

        {/* Logo/Name */}
        <Link to="/">
          {/* The 'Link' component is used to navigate to the homepage ("/"). It prevents a page reload and enables client-side routing. */}
          <h1 className="text-2xl md:text-4xl text-stone-700 font-bold cursor-pointer">
            {/* The <h1> tag displays the name/logo of the website. */}
            {/* 'text-2xl' sets the font size to 2xl on small screens. */}
            {/* 'md:text-4xl' increases the font size to 4xl on medium and larger screens. */}
            {/* 'text-stone-700' applies a dark gray color to the text. */}
            {/* 'font-bold' makes the text bold. */}
            {/* 'cursor-pointer' changes the cursor to a pointer when hovering over the text, indicating it's clickable. */}
            Ricardo Marmolejo
          </h1>
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-stone-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* The <button> element creates a button to toggle the mobile menu. */}
          {/* 'md:hidden' hides the button on medium and larger screens (only visible on mobile). */}
          {/* 'text-stone-700' applies a dark gray color to the button. */}
          {/* 'focus:outline-none' removes the default focus outline when the button is clicked. */}
          {/* 'onClick={toggleMenu}' triggers the 'toggleMenu' function when the button is clicked, opening or closing the mobile menu. */}
          
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* The <svg> element is used to display the hamburger icon. */}
            {/* 'className="w-6 h-6"' sets the width and height of the icon to 6 units. */}
            {/* 'fill="none"' ensures the icon is not filled with color. */}
            {/* 'stroke="currentColor"' allows the icon to inherit the text color. */}
            {/* 'viewBox="0 0 24 24"' defines the aspect ratio and coordinate system for the SVG. */}
            {/* 'xmlns' specifies the XML namespace for the SVG. */}

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
            {/* The <path> element defines the lines that make up the hamburger icon (three horizontal lines). */}
          </svg>
        </button>

        {/* Desktop Navigation Links (Hidden when the mobile menu is open) */}
        <nav
          className={`${
            isOpen ? "hidden" : "flex"
          } md:flex space-x-4 text-stone-700 hidden md:block`}
        >
          {/* The <nav> element represents the navigation section of the header. */}
          {/* 'isOpen ? "hidden" : "flex"' dynamically applies the "hidden" or "flex" class to the navigation, depending on whether the mobile menu is open or not. */}
          {/* 'md:flex' makes the navigation visible on medium and larger screens using flexbox. */}
          {/* 'space-x-4' adds horizontal spacing between each link. */}
          {/* 'text-stone-700' applies a dark gray color to the text. */}
          {/* 'hidden md:block' hides the navigation on small screens (mobile), and displays it on medium and larger screens. */}

          <Link to="/" className={location.pathname === "/" ? "text-xl text-yellow-800" : ""}>
            {/* The <Link> component is used for navigation to the homepage. */}
            {/* 'className={location.pathname === "/" ? "text-xl text-yellow-800" : ""}' dynamically applies the active link styling when the current path matches "/". */}
            ABOUT
          </Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "text-xl text-yellow-800" : ""}>
            {/* Similar to the previous link, this <Link> navigates to the portfolio page and applies the active class when the user is on the portfolio page. */}
            PORTFOLIO
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "text-xl text-yellow-800" : ""}>
            CONTACT
          </Link>
          <Link to="/resume" className={location.pathname === "/resume" ? "text-xl text-yellow-800" : ""}>
            RESUME
          </Link>
        </nav>
      </div>

      {/* Mobile Menu (Appears when hamburger is clicked) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-4 text-center bg-stone-200 rounded-lg shadow-lg p-4`}
      >
        {/* This <div> contains the mobile menu links, which only appear when the hamburger button is clicked (when 'isOpen' is true). */}
        {/* 'isOpen ? "block" : "hidden"' toggles whether the mobile menu is shown. */}
        {/* 'md:hidden' hides this menu on medium and larger screens. */}
        {/* 'mt-4' adds top margin to create spacing. */}
        {/* 'text-center' centers the text horizontally. */}
        {/* 'bg-stone-200' applies a light gray background to the mobile menu. */}
        {/* 'rounded-lg' gives the mobile menu rounded corners. */}
        {/* 'shadow-lg' applies a large shadow around the menu for visual depth. */}
        {/* 'p-4' adds padding inside the mobile menu. */}

        <Link to="/" className="block py-2 text-stone-700" onClick={toggleMenu}>
          {/* Each <Link> inside the mobile menu is used for navigation. */}
          {/* 'block' makes the <Link> take up the full width of the container. */}
          {/* 'py-2' adds padding on the y-axis (top and bottom) to each link. */}
          {/* 'text-stone-700' applies a dark gray color to the text. */}
          {/* 'onClick={toggleMenu}' ensures the mobile menu closes when a link is clicked. */}
          ABOUT
        </Link>
        <Link to="/portfolio" className="block py-2 text-stone-700" onClick={toggleMenu}>
          PORTFOLIO
        </Link>
        <Link to="/contact" className="block py-2 text-stone-700" onClick={toggleMenu}>
          CONTACT
        </Link>
        <Link to="/resume" className="block py-2 text-stone-700" onClick={toggleMenu}>
          RESUME
        </Link>
      </div>
    </header>
  );
}
