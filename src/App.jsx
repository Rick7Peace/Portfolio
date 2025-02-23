import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary components from react-router-dom for routing
import Header from './components/Header'; // Importing the Header component
import Footer from './components/Footer'; // Importing the Footer component
import About from './components/pages/About'; // Importing the About component for the homepage
import Portfolio from './components/pages/Portfolio'; // Importing the Portfolio component
import Contact from './components/pages/Contact'; // Importing the Contact component
import Resume from './components/pages/Resume'; // Importing the Resume component

// Main App component
function App() {
  return (
    // Root container with styling for full height and design
    <div className='min-h-screen bg-gray-400 text-gray-300 font-thin font-serif antialiased tracking-wider'>
      {/* Router wraps the entire app to enable routing functionality */}
      <Router>
        {/* Flexbox container with column layout to structure the page */}
        <div className="flex flex-col min-h-screen">
          {/* Header component is displayed at the top of the page */}
          <Header />
          
          {/* Main content area where routes will render different pages */}
          <main className="flex-grow container mx-auto p-10">
            {/* 'Routes' component determines which page to display based on the current route */}
            <Routes>
              {/* Route for the home page ("/") */}
              <Route path="/" element={<About />} />
              
              {/* Route for the portfolio page ("/portfolio") */}
              <Route path="/portfolio" element={<Portfolio />} />
              
              {/* Route for the contact page ("/contact") */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Route for the resume page ("/resume") */}
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
          
          {/* Footer component displayed at the bottom of the page */}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
