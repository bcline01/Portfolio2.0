
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import BookHub from '../assets/BookHub2.png';
import BookShelf from '../assets/bookshelf2.png';
import Candidate from '../assets/candidate2.png';
import Ecommerce from '../assets/Ecommerce.png';
import Google from '../assets/googlesearch2.png';
import Kanban from '../assets/kanban2.png';
import Postgress from '../assets/postgres2.png';
import PP from '../assets/pp2.png';
import Doc from '../assets/spineImg2.png';
import TakeOut from '../assets/TakeoutMENU.png';
import '../styles/Projects.css';


  // Options for the Owl Carousel
  const options = {
    items: 1, // Default number of visible items
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
        0: { items: 1 },
        400: { items: 1 },
        600: { items: 1 },
        700: { items: 1 },
        800: { items: 1 },
        1000: { items: 1 }
      }
  };


const Projects: React.FC = () => {



  const projects = [
    { id: 1, image: BookHub, title: 'BookHub-Full Stack', description: 'HTML, CSS, Typescript, Bootstrap, GraphQL, MERN, Bcrypt, JWT, Cypress, GitHub Actions' },
    { id: 2, image: BookShelf, title: 'BookShelf-Full Stack', description: 'HTML, CSS, Typescript, Bcrypt, JWT, Sequelize, Axios, React, Bootstrap'},
    { id: 3, image: Candidate, title: 'Candidate Search-Front End', description: 'HTML, CSS, Bootstrap, Typescript, Node.JS, React, Sequelize' },
    { id: 4, image: Ecommerce, title: 'Ecommerce- Front End', description: 'HTML, Tailwind, Angular, SCSS' },
    { id: 5, image: Google, title: 'Google Books-Full Stack', description: 'HTML, CSS, Bootstrap,React, Node, Express, Typescript, bcrypt, JWT, MongoDB, GraphQL' },
    { id: 6, image: Kanban, title: 'Kanban Board-Full Stack', description: 'HTML, CSS, Typescript, Node.JS, React, postgresSQL, Express.JS, JWT, Bcrypt' },
    { id: 7, image: Postgress, title: 'Postgres APP-Back End', description: 'HTML, Typescript, Node.JS, PostgresSQL, Inquierer' },
    { id: 8, image: PP, title: 'Puzzle Pairs-Front End', description: 'HTML, CSS, JavaScript, React, Bootstrap, Framer-Motion' },
    { id: 9, image: Doc, title: 'Chiropractic Website-Front End', description: 'HTML, CSS, React, Typescript, JQuery, Node, Bootstrap, ' },
    { id: 10, image: TakeOut, title: 'Take Out Menu-Back End', description: 'Python3' },
  ];

  return (
    <div className='my-projects'>
    <div className="project-container">
      <div className="project-heading">My Projects</div>
      {/* <div className='project-item-container'> */}
      <OwlCarousel className="owl-theme" {...options}>
        {projects.map((project) => (
          <div className="item" key={project.id}>
            <img src={project.image} alt={project.title} className="item-image" />
            <div className="item-title">{project.title}</div>
            <p className="item-description">{project.description}</p>
            </div>
            
          
        ))}
      </OwlCarousel>
    </div>
    </div>
    
    
  );
};

export default Projects;
