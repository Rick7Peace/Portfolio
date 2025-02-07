export default function Project({ title, img, liveLink, repoLink }) {
  // This is a functional component called "Project". It accepts props: `title`, `img`, `liveLink`, and `repoLink`.
  // These props are passed from the parent component when the Project component is used. The props represent the title,
  // image URL, live demo link, and GitHub repository link of a project.

  return (
    <div className="bg-stone-300 text-stone-700 shadow-lg rounded-lg overflow-hidden mx-4 md:mx-0">
      {/* The outer <div> serves as the container for each project card. It is styled with Tailwind CSS utility classes: */}
      {/* - 'bg-stone-300' gives the container a light gray background. */}
      {/* - 'text-stone-700' applies a darker gray text color. */}
      {/* - 'shadow-lg' adds a large shadow to give it depth. */}
      {/* - 'rounded-lg' rounds the corners of the card. */}
      {/* - 'overflow-hidden' ensures that content inside the container (like images) doesn't overflow the borders. */}
      {/* - 'mx-4' adds horizontal margin on small screens, and 'md:mx-0' removes margin on medium and larger screens for a centered layout. */}

      <img
        src={img}
        alt={title}
        className="w-full h-40 md:h-48 object-cover"
      />
      {/* The <img> element displays the image of the project. It uses the 'img' prop passed into the component for the source. */}
      {/* - 'src={img}' sets the image source to the value of the 'img' prop (an image URL). */}
      {/* - 'alt={title}' provides alternative text for the image, which is useful for accessibility and SEO. It uses the 'title' prop to describe the image. */}
      {/* - 'className="w-full h-40 md:h-48 object-cover"' ensures that the image covers the full width of its container and maintains its aspect ratio */}
      {/*   - 'w-full' makes the image span the entire width of its container. */}
      {/*   - 'h-40' sets the height to 40 units on small screens, and 'md:h-48' sets the height to 48 units on medium and larger screens. */}
      {/*   - 'object-cover' ensures the image is cropped in a way that maintains its aspect ratio while covering the space of the container. */}

      <div className="p-4">
        {/* This <div> acts as a wrapper for the content below the image, like the title and links. */}
        {/* - 'p-4' adds padding around the content inside this div for spacing. */}

        <h3 className="text-lg md:text-xl font-bold text-center">{title}</h3>
        {/* The <h3> element displays the title of the project. */}
        {/* - 'text-lg' sets the font size to large on small screens, and 'md:text-xl' increases the font size to extra-large on medium screens and above. */}
        {/* - 'font-bold' makes the text bold. */}
        {/* - 'text-center' centers the title horizontally within its container. */}
        {/* The title of the project is dynamically displayed using the 'title' prop passed to the component. */}

        <div className="flex flex-col md:flex-row justify-between mt-2 text-center md:text-left">
          {/* This <div> is a flex container that wraps the links for the GitHub repository and live demo. */}
          {/* - 'flex' makes the container a flexbox. */}
          {/* - 'flex-col' stacks the links vertically on small screens. */}
          {/* - 'md:flex-row' arranges the links horizontally on medium and larger screens. */}
          {/* - 'justify-between' places space between the links on larger screens, ensuring they are spread out. */}
          {/* - 'mt-2' adds top margin between the title and the links. */}
          {/* - 'text-center' centers the text on small screens, and 'md:text-left' aligns the text to the left on medium and larger screens. */}

          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="text-stone-900 mb-2 md:mb-0"
          >
            {/* The first <a> element creates a link to the GitHub repository. */}
            {/* - 'href={repoLink}' uses the 'repoLink' prop for the URL of the repository. */}
            {/* - 'target="_blank"' ensures the link opens in a new tab. */}
            {/* - 'rel="noreferrer"' is a security feature that prevents the new page from accessing the previous page's information. */}
            {/* - 'className="text-stone-900"' applies a dark gray text color to the link. */}
            {/* - 'mb-2' adds margin at the bottom of the link on small screens. 'md:mb-0' removes the margin on medium and larger screens. */}
            GitHub Repo
          </a>

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-stone-900"
            >
              {/* This conditional <a> element only renders if the 'liveLink' prop is provided (i.e., if it's not empty or undefined). */}
              {/* - 'href={liveLink}' uses the 'liveLink' prop for the URL to the live demo of the project. */}
              {/* - 'target="_blank"' opens the link in a new tab. */}
              {/* - 'rel="noreferrer"' is used for security. */}
              {/* - 'className="text-stone-900"' applies a dark gray text color to the link. */}
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
