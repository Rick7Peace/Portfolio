import Project from "../Project";
// This line imports the 'Project' component, which is used to render individual project details in the portfolio.
// The 'Project' component is expected to be located in the "../Project" file, relative to this file.

export default function Portfolio() {
  // This line defines the 'Portfolio' functional component.
  // The 'export default' allows this component to be imported and used in other parts of the application.

  const projects = [
    // This initializes the 'projects' array, which holds the data for multiple projects to be displayed in the portfolio.
    // Each project object contains information like 'title', 'img', 'liveLink', and 'repoLink' for a specific project.

    {
      title: "Multi-Dictionary",
      img: "assets/",
      liveLink: "",
      repoLink: "https://github.com/DeenTradesCode/Multi-Dictionary-App",
    },
    // This object represents the first project, "Multi-Dictionary", and includes placeholders for its image, live demo link, and GitHub repo link.
    // The 'title' field holds the name of the project, 'img' is the path to the image, 'liveLink' is for the live demo URL, and 'repoLink' is for the GitHub repository.

    {
      title: "Weather Dashboard",
      img: "assets/weather dash board ss copy.png",
      liveLink: "https://weather-forecast-app-aigi.onrender.com/",
      repoLink: "https://github.com/Rick7Peace/Weather-Dashboard",
    },
    // This object represents the second project, "Weather Dashboard", with similar data fields (title, img, liveLink, repoLink).

    {
      title: "README Generator",
      img: "assets/README Generator.png",
      liveLink: "",
      repoLink: "",
    },
    // This object represents the third project, "README Generator", with similar data fields.

    {
      title: "Employee Tracker",
      img: "assets/",
      liveLink: "",
      repoLink: "",
    },
    // This object represents the fourth project, "Employee Tracker", with similar data fields.

    {
      title: "Vehicle Builder",
      img: "assets/Vehicle Builder.png",
      liveLink: "",
      repoLink: "https://github.com/Rick7Peace/Vehicle-Builder",
    },
    // This object represents the fifth project, "Vehicle Builder", with similar data fields.

  ];

  return (
    <section className="p-4 md:p-8">
      {/* The <section> element is used to group and style content related to the portfolio. */}
      {/* 'p-4' applies padding on all sides, and 'md:p-8' increases the padding on medium screen sizes and above. */}
      
      <h2 className="text-2xl md:text-3xl text-center mb-6">My Projects</h2>
      {/* The <h2> element is the title of the portfolio section. */}
      {/* 'text-2xl' applies extra-large text size for smaller screens, and 'md:text-3xl' increases the text size on medium screens and above. */}
      {/* 'text-center' centers the title text horizontally. */}
      {/* 'mb-6' adds margin to the bottom of the title to space it from the content below. */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* The <div> element is used to create a responsive grid layout for the projects. */}
        {/* 'grid' establishes the container as a grid. */}
        {/* 'grid-cols-1' defines 1 column for smaller screens, 'sm:grid-cols-2' creates 2 columns on small screens, and 'lg:grid-cols-3' defines 3 columns on large screens. */}
        {/* 'gap-6' adds a 6-unit gap between the grid items. */}

        {projects.map((project) => (
          // The 'projects.map()' function loops through each project in the 'projects' array and renders a 'Project' component for each one.
          // For each iteration, the 'project' object is passed to the 'Project' component as props.
          
          <Project
            key={project.title}
            // 'key={project.title}' provides a unique key for each rendered project. Using the project title as a key ensures the list is properly identified in the virtual DOM.
            title={project.title}
            // Passes the project title to the 'title' prop of the 'Project' component.
            img={project.img}
            // Passes the project image path to the 'img' prop of the 'Project' component.
            liveLink={project.liveLink}
            // Passes the project live demo link to the 'liveLink' prop of the 'Project' component.
            repoLink={project.repoLink}
            // Passes the project GitHub repository link to the 'repoLink' prop of the 'Project' component.
          />
        ))}
      </div>

    </section>
  );
}
