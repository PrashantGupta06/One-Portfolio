import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full
      h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        As an aspiring frontend developer, I bring enthusiasm and a fresh perspective for crafting engaging web experiences.
         Proficient in HTML, CSS, and JavaScript, I'm eager to contribute my skills and learn in a collaborative environment. 
         Committed to staying updated on industry trends and  excited to embark on a journey of continuous growth and innovation in the world of frontend development.
         My inclination is drawn towards problem solving in the view of which i have been solving various problems on several platforms like Leetcode and GFG.
         Let's create compelling digital landscapes together!
        </p>
        <br />
      </div>
    </div>
  );
}

export default About