// The Project component accepts four props: title, img, liveLink, and repoLink.
// It is used to display a project card with an image, title, and links to the project’s GitHub repository and live demo.
export default function Project({ title, img, liveLink, repoLink }) {

  return (
    <div className="bg-stone-300 text-stone-700 shadow-lg rounded-lg overflow-hidden mx-4 md:mx-0">
      {/* This div is the main container for the project card. 
      - It has a light stone-gray background, darker text color, shadow for depth, and rounded corners. 
      - The margins adjust based on the screen size using 'mx-4' for small screens and 'md:mx-0' for medium and larger screens. */}
      
      <img
        src={img} // The 'img' prop provides the URL of the project image.
        alt={title} // The 'alt' text is set to the project title for accessibility and SEO.
        className="w-full h-40 md:h-48 object-cover"
        // The image spans the full width of the container ('w-full') and has a height of 40 units on small screens and 48 units on medium screens and up.
        // 'object-cover' ensures the image maintains its aspect ratio and fills the container without distortion.
      />

      <div className="p-4">
        {/* This div holds the content below the image (title and links), with padding to ensure spacing. */}

        <h3 className="text-lg md:text-xl font-bold text-center">{title}</h3>
        {/* The title of the project is displayed as a centered heading. 
        - The font size is 'text-lg' on small screens and 'md:text-xl' for larger screens. 
        - 'font-bold' makes the text bold. */}

        <div className="flex flex-col md:flex-row justify-between mt-2 text-center md:text-left">
          {/* This div is used to align the project links (GitHub Repo and Live Demo) either vertically or horizontally, depending on screen size.
          - 'flex' makes the container a flexbox. 
          - 'flex-col' stacks the links vertically on small screens, while 'md:flex-row' arranges them horizontally on medium and larger screens.
          - 'justify-between' ensures space between the links. 
          - 'mt-2' adds margin on top, separating the links from the title. */}

          <a
            href={repoLink} // The 'repoLink' prop provides the URL of the project's GitHub repository.
            target="_blank" // Opens the link in a new tab.
            rel="noreferrer" // Security measure to prevent the new page from accessing the referring page's information.
            className="text-stone-900 mb-2 md:mb-0"
            // The 'text-stone-900' class applies a dark text color. 
            // 'mb-2' adds margin below the link on small screens, while 'md:mb-0' removes it on medium screens and larger.
          >
            GitHub Repo
          </a>
          {/* This link directs to the project's GitHub repository. If clicked, it opens in a new tab due to 'target="_blank"'. */}

          {liveLink && (
            // The live demo link is only rendered if the 'liveLink' prop is provided (non-null).
            <a
              href={liveLink} // The 'liveLink' prop provides the URL of the live demo.
              target="_blank" // Opens the link in a new tab.
              rel="noreferrer" // Security measure to prevent the new page from accessing the referring page's information.
              className="text-stone-900"
            >
              Live Demo
            </a>
          )}
          {/* If the 'liveLink' prop exists, this link is rendered, allowing users to view the live demo of the project. */}
        </div>
      </div>
    </div>
  );
}
