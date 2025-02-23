import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Footer component to display footer content including copyright and social media links.
export default function Footer() {
  return (
    // <footer> element for wrapping footer content, with background and padding styles.
    <footer className="bg-stone-300 p-8">
      <div className="container mx-auto text-center text-black">
        {/* Copyright text with the year and the author's name. */}
        <p className="text-base md:text-lg">&copy; 2025 Ricardo Marmolejo</p>

        {/* Social media icons container, flex display and center alignment with spacing. */}
        <div className="flex justify-center flex-wrap space-x-4 mt-4">
          {/* GitHub link with icon, opens in a new tab, and adds hover effect. */}
          <a href="https://github.com/Rick7Peace" target="_blank" rel="noreferrer" className="hover:text-yellow-700">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          {/* LinkedIn link with icon, opens in a new tab, and adds hover effect. */}
          <a href="https://www.linkedin.com/in/ricardo-marmolejo-bba004155/" target="_blank" rel="noreferrer" className="hover:text-yellow-700">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
