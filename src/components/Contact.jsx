import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const body = { name, email, message };

  // const url =
  //   "https://script.google.com/macros/s/AKfycbwKWYkRFS7DwBiQZSPPiwNDnW7qm5T23DmFNSptOu8e8pLuMfPIP0Pn-aZRtXoH500s/exec";
  // const handleSubmit = async (e) => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     // body: JSON.stringify(body),
  //     body: body,
  //   };
  //   const response = await fetch(url, requestOptions);
  //   const data = await response.json();

  //   setName({ name: data.name });
  //   setName({ name: data.email });
  //   setName({ name: data.message });

  const handleSubmit = (e) => {
    // e.preventDefault();
    // let url="https://script.google.com/macros/s/AKfycbwiMA-FEQtou9BL_DEW2w2FbMmDdMzy0eoO0m2fonEOoduLn42tOzMDALlSbptYTmJdOQ/exec"
    // let form=document.querySelector('form');
    // form.addEventListener('submit',(e)=>{
    //   e.target.btn="Submitting";
    //   let d=new FormData(form);
    //   fetch(url,{
    //     method:'POST',
    //     mode:'no-cors',
    //     body:d
    //   }).then((res)=>res.text())
    //   .then((finalRes)=>{
    //     e.target.btn="Let's Talk"
    //     console.log(finalRes)
    //   })
    //   e.preventDefault()
    // })
  };
  // };
  return (
    <div
      name="contact"
      className="w-full w-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/lbjnnydb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name={name}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name={email}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name={message}
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 btn"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  // <script src="GoogleSheet.js"></script>
};

export default Contact;
