import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/home/home"
import Projects from "./components/projects/projects"
import Contact from './components/contact/contact';
import webserv from "./images/webserv.png";
import containers from "./images/containers.png";


function App() {
  let data = [
    {
      ProjectName: "Docker",
      Description: "This project aims to broaden knowledge of system administration by using Docker. virtualize several Docker images, creating them in new personal virtual machine",
      image: "https://blog.dyma.fr/content/images/2021/09/docker1200x628.png",
      github: "https://github.com/Forstman1/inception-42"
    },
    {
      ProjectName: "Webserv",
      Description: "This project is about writing your own HTTP server. it can be tested in actual browser. HTTP is one of the most used protocols on the internet",
      image: webserv,
      github: "https://github.com/Forstman1/Webserv_42"
    },
    {
      ProjectName: "Containers",
      Description: "This project aims implementing a few container types of the C++ standard template library. Vector, Stack, Map",
      image: containers,
      github: "https://github.com/Forstman1/FT_containers"
    },
    {
      ProjectName: "Minishell",
      Description: "This project is about creating a simple shell. yes, my own little bash.",
      image: "https://camo.githubusercontent.com/d4cc67298f77eb7faafa6a6ae7cf24335f9bad2a11af96de4400d9ef3e29323c/68747470733a2f2f692e696d6775722e636f6d2f456e31334137702e706e67",
      github: "https://github.com/Forstman1/Minishell"
    },
    {
      ProjectName: "Philosophers",
      Description: "This project aims to broaden knowledge of threading a process. learn how to create thread and discovring mutexes in C",
      image: "https://www.thecrazyprogrammer.com/wp-content/uploads/2017/06/Dining-Philosophers-Problem.png",
      github: "https://github.com/Forstman1/Philosophers-42"
    },
    {
      ProjectName: "Cub3d",
      Description: "This project is inspired by the world-famous wolfenstein 3d game, wish was first FPS ever, it enable to explore ray-casting world.",
      image: "https://www.gamereactor.fr/media/59/_3865963.png",
      github: "https://github.com/Forstman1/cub3D_42"
    },
  ]




  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Home data={data} />} />
      <Route exact path='/projects' element={<Projects data={data} />} />
      <Route exact path='/contact' element={<Contact  />} />
    </Routes>
    </Router>
  );
}

export default App;
