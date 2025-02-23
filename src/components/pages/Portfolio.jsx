import Project from "../Project";

// This is the Portfolio component, which displays a collection of projects.
export default function Portfolio() {
  
  // Array holding data for each project in the portfolio, including title, image, live link, and repository link.
  const projects = [
    {
      title: "Multi-Dictionary ",
      img: "assets/",
      liveLink: "",
      repoLink: "https://github.com/DeenTradesCode/Multi-Dictionary-App",
    },
    {
      title: "Weather Dashboard",
      img: "assets/weather dash board ss copy.png",
      liveLink: "https://weather-forecast-app-aigi.onrender.com/",
      repoLink: "https://github.com/Rick7Peace/Weather-Dashboard",
    },
    {
      title: "README Generator",
      img: "assets/README Generator.png",
      liveLink: "",
      repoLink: "",
    },
    {
      title: "Employee Tracker",
      img: "assets/",
      liveLink: "",
      repoLink: "",
    },
    {
      title: "Vehicle Builder",
      img: "assets/Vehicle Builder.png",
      liveLink: "",
      repoLink: "https://github.com/Rick7Peace/Vehicle-Builder",
    },
  ];

  // The return function renders the layout of the portfolio section on the page.
  return (
    <section className="p-4 md:p-8 ">
      {/* This heading is the title of the portfolio section, with styling for different screen sizes. */}
      <h2 className="text-2xl md:text-5xl text-center mb-20 font-bold text-black">My Projects</h2>

      {/* This div creates a responsive grid layout for displaying the project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* The map function is used to loop over each project in the 'projects' array and display a Project component for each */}
        {projects.map((project) => (
          <Project
            key={project.title}  // The 'key' is used for optimal rendering and uniqueness in the list
            title={project.title}  // Passes the title of the project
            img={project.img}  // Passes the image associated with the project
            liveLink={project.liveLink}  // Passes the live demo URL if available
            repoLink={project.repoLink}  // Passes the GitHub repository link
          />
        ))}
      </div>
    </section>
  );
}
