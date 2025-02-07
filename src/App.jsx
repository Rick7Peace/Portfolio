import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// This line imports necessary components from the 'react-router-dom' package to handle routing in the application.
// - 'BrowserRouter' is renamed to 'Router' to encapsulate the routing functionality.
// - 'Route' defines individual paths and components that should be rendered for specific URL routes.
// - 'Routes' is a container for all 'Route' components, determining which component should be displayed based on the current route.

import Header from './components/Header';
// Imports the 'Header' component, which will be displayed at the top of the app on all pages.

import Footer from './components/Footer';
// Imports the 'Footer' component, which will be displayed at the bottom of the app on all pages.

import About from './components/pages/About';
// Imports the 'About' component, which will be displayed on the root route ("/").

import Portfolio from './components/pages/Portfolio';
// Imports the 'Portfolio' component, which will be displayed when the user navigates to the "/portfolio" route.

import Contact from './components/pages/Contact';
// Imports the 'Contact' component, which will be displayed when the user navigates to the "/contact" route.

import Resume from './components/pages/Resume';
// Imports the 'Resume' component, which will be displayed when the user navigates to the "/resume" route.

function App() {
  // Defines the main App component, which contains the layout and routing for the application.
  return (
    <div className='min-h-screen bg-gray-700 text-gray-300 font-thin font-serif antialiased tracking-wider'>
      {/* This <div> serves as the root container for the app */}
      {/* 'min-h-screen' ensures the div takes at least the height of the screen */}
      {/* 'bg-gray-700' sets the background color to dark gray */}
      {/* 'text-gray-300' sets the text color to light gray */}
      {/* 'font-thin' applies a thin font weight */}
      {/* 'font-serif' sets a serif font family */}
      {/* 'antialiased' ensures smooth font rendering */}
      {/* 'tracking-wider' increases letter-spacing for text */}
      
      <Router>
        {/* 'Router' wraps the entire app, enabling client-side routing. It listens to the URL and renders the correct components. */}

        <div className="flex flex-col min-h-screen">
          {/* This <div> uses flexbox layout to arrange elements in a column ('flex-col'). */}
          {/* 'min-h-screen' ensures the container takes at least the full height of the screen. */}
          
          <Header />
          {/* The 'Header' component is displayed at the top of the page */}
          
          <main className="flex-grow container mx-auto p-4">
            {/* This <main> element is where the main content of the page is rendered */}
            {/* 'flex-grow' makes the main content expand to fill available space in the layout */}
            {/* 'container' ensures content is constrained to a specific width */}
            {/* 'mx-auto' centers the content horizontally */}
            {/* 'p-4' applies padding on all sides of the main content */}
            
            <Routes>
              {/* 'Routes' is a container for 'Route' elements. It helps determine which component to render based on the current URL */}
              
              <Route path="/" element={<About />} />
              {/* This route matches the root URL ("/"). When the user visits the home page, the 'About' component is rendered */}
              
              <Route path="/portfolio" element={<Portfolio />} />
              {/* This route matches the "/portfolio" URL. When the user navigates to '/portfolio', the 'Portfolio' component is rendered */}
              
              <Route path="/contact" element={<Contact />} />
              {/* This route matches the "/contact" URL. When the user navigates to '/contact', the 'Contact' component is rendered */}
              
              <Route path="/resume" element={<Resume />} />
              {/* This route matches the "/resume" URL. When the user navigates to '/resume', the 'Resume' component is rendered */}
            </Routes>
          </main>
          
          <Footer />
          {/* The 'Footer' component is displayed at the bottom of the page */}
        </div>
      </Router>
    </div>
  );
}

export default App;
// 'export default App;' makes the 'App' component available for use in other parts of the application.
// It is the default export from this module, so other files can import and use this component.
