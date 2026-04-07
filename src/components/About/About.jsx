import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-6 px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Sudhir Kadam
          </h2>

          {/* Role */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['MERN Stack Developer']}
              speed={100}
              eraseSpeed={50}
              typingDelay={400}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          {/* About */}
          <p className="text-base sm:text-lg text-gray-400 mb-8 mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a passionate full-stack developer, having completed my Bachelor of Engineering (B.E.) in 2025 from JSPM’s Bhivarabai Sawant Institute of Technology & Research, Wagholi, Pune. I specialize in the MERN stack and have hands-on experience building modern web applications using MongoDB, Express.js, React, and Node.js. I focus on developing strong problem-solving skills and creating efficient, user-friendly solutions using the latest web technologies.
          </p>

          {/* Button */}
          <a
            href="https://drive.google.com/file/d/1TzSu-jSt2NPl4rNtdurS-y2VHytrIPH2/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_#8245ec]"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            }}
          >
            Download CV
          </a>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] border-2 border-purple-500 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Sudhir Kadam"
             className="w-full h-full rounded-full object-cover object-top drop-shadow-[0_10px_25px_rgba(130,69,236,0.6)]"

            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;