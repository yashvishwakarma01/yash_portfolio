import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full w-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to my digital space! I am{" "}
          <b>
            <i>Yash Vishwakarma</i>
          </b>
          , a final-year Computer Science Engineering student with a fervent
          enthusiasm for turning code into impactful solutions. Currently
          pursuing my Bachelor's degree at United College of Engineering and
          Research Prayagraj , my academic journey has equipped me with a
          comprehensive understanding of algorithms, data structures,full stack
          web development and machine learning. I thrive on challenges, and my
          diverse coursework has enabled me to apply theoretical knowledge to
          practical scenarios. Proficient in programming languages like Java,
          Python, C, C++, SQL and JavaScript, I bring a versatile skill set to
          the table
        </p>

        <br />

        <p className="text-xl">
          Internship experiences at <b><i>Sarvmatre International Pvt. Ltd.</i></b> have further enriched my skill set, exposing me
          to real-world applications of computer science. Active participation
          in extracurricular activities and competitions complements my academic
          journey, emphasizing adaptability and continuous learning. As I stand
          on the threshold of graduation, my aspiration is to contribute to the
          tech industry's dynamism, leveraging my skills to create meaningful
          technological solutions. Explore my portfolio to witness the evolution
          of a dedicated computer science enthusiast ready to embark on the next
          exciting chapter.
        </p>
      </div>
    </div>
  );
};

export default About;
