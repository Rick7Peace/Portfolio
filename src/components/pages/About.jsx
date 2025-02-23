function About() {
  return (
    // Outer div that sets the overall layout and styling for the page
    <div className='min-h-screen text-black font-thin font-serif antialiased tracking-wider mb-4'>
      
      {/* Header section displaying the title "About Me" */}
      <h1 className='text-center text-5xl font-bold text-black p-6'>
        About Me
      </h1>

      {/* Profile image section, centered on the page */}
      <div className='flex justify-center mb-5'>
        <img src='./assets/IMG_3764.jpeg' alt='Profile Picture' className='rounded-full w-40 h-40 object-cover' />
      </div>

      {/* Introduction paragraph */}
      <p className='text-center text-2xl font-light text-black mb-5 pl-70 pr-70'>
        Hi, I'm Ricardo Marmolejo! 
      </p>
      
      {/* Paragraph detailing background, skills, and current role */}
      <p className='text-center text-2xl text-black mb-5 pl-70 pr-70'>
        I have always been passionate about technology and I'm excited to take on new challenges in the world of coding. I currently serve as the Board President of my HDFC building. This responsibility taught me how to work collaboratively with others. This skill set has been a vital part of my coding practice, as I have had to work in various teams. I have learned how to divide tasks based on individual skill sets and how to manage team work and group dynamics. 
      </p>
      
      {/* Empty paragraph */}
      <p className='text-center text-2xl text-black mb-5 pl-70 pr-70'>
      </p>

      {/* Paragraph about personal hobbies and interests */}
      <p className='text-center text-2xl text-black mb-5 pl-70 pr-70'>
        When I'm not immersed in the world of coding, I love exploring New York City via bicycle rides, or taking walks with my dog. I like to find unique and hidden gems of the city and document my adventures through photography. In my free time, I also enjoy watching sci-fi movies, listening to music and playing video games. A dream of mine would be to create my own superhero themed video game or app. 
      </p>

      {/* Paragraph expressing values and goals */}
      <p className='text-center text-2xl text-black mb-5 pl-70 pr-70'>
        I take great pride in creating balance— both in my professional life and my personal life. My goal is to live a fulfilling, fun and adventurous life! 
      </p>

    </div>
  );
}

// Export the About component to be used in other parts of the application
export default About;
