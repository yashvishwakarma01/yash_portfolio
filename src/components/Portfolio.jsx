import React from "react";
import task from "../assets/portfolio/task.png";
import kitten from "../assets/portfolio/kitten.jpg";
import messanger from "../assets/portfolio/messanger.jpg";
import ecommerce from "../assets/portfolio/ecommerce.png";
import todo from "../assets/portfolio/Todo.jpg";
import breastCancer from "../assets/portfolio/breastCancer.jpg";


const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: task,
      project: "Task Manager Application",
      url:"https://github.com/yashvishwakarma01/Task-Management"
      
    },
    {
      id: 2,
      src: ecommerce,
      project:"Ecommerce site (MERN)",
      url:'https://github.com/yashvishwakarma01/Ecommerce_website_Node'
    },
    {
      id: 3,
      src: messanger,
      project:"Messanger",
      url:"https://github.com/yashvishwakarma01/Python-Messanger"
    },
    {
      id: 4,
      src: todo,
      project:"Todo App",
      url:"https://github.com/yashvishwakarma01/ToDoAPP-using-mern"
    },
    {
      id: 5,
      src: kitten,
      project:"Explodding kitten game",
      url:"https://github.com/yashvishwakarma01/Exploding-kitten"
    },
    {
      id: 6,
      src: breastCancer,
      project:'Breast Cancer Detection',
      url:"https://github.com/yashvishwakarma01/Breast_Cancer_Detection_Model"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:w-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,project,url}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" style={{width:'100%', color:'orange'}}>
                  {project}
                </button>
                {/* <div style={{color:"orange"}} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{project}</div> */}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>window.open(url)} >
                Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
