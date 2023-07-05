import React,{useState} from 'react';
import Navigation from './Navigation';
import './Authors.css';
import Footer from './Footer';

const Authors = () =>{

   const [selectedAuthor,setSelectedAuthor] = useState(null);

   const pageAuthors = 
         [
   {
      id: 1,
      name: 'Amos Kasumba',
      role: 'Team Lead',
      bio: 'I am passionate about Networking and Cybersecurity with an aim of leveraging skills to secure assets in the cyberspace.',
      imageUrl: 'https://images.pexels.com/photos/13725306/pexels-photo-13725306.jpeg',
      skils:[
         {
            id: 1,
            name: 'CyberSecurity',
            imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },
         {
            id: 2,
            name: 'Networking',
            imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },

         {
            id: 3,
            name: 'Databases',
            imageUrl:'https: //images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },
      ]

   },

   {
      id: 2,
      name: 'Lewis Ndahinyuka ',
      role: 'Frontend Developer Lead',
      bio: 'I am a full-stack web developer proficient in HTML, CSS, PHP, Node.js, and React.js. I contributed to this project as a front-end developer, utilizing my expertise in React.js and other technologies.My role involved implementing the user interface, collaborating with the team, and optimizing the codebase for enhanced performance.',
      imageUrl: 'https://images.pexels.com/photos/13725306/pexels-photo-13725306.jpeg',
      skils:[
         {
            id: 1,
            name: 'React.js',
            imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },
         {
            id: 2,
            name: 'Node.js',
            imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },

         {
            id: 3,
            name: 'Php',
            imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },
      ]

   },

   {
      id: 3,
      name: 'Victory Friday',
      role: 'QA Specialist',
      bio: 'I am a UI/UX designer, also proficient in Python, HTML, CSS and C++. I have worked on a few design projects and spend my free time volunteering, doing research and documenting my experiencesI am a full-stack web developer proficient in HTML, CSS, PHP, Node.js, and React.js. I contributed to this project as a front-end developer, utilizing my expertise in React.js and other technologies.My tasks involve writing documentation for the project, project evaluation, and writing a report on the project.',
      imageUrl: 'https://images.pexels.com/photos/13725306/pexels-photo-13725306.jpeg',
      skils:[
         {
            id: 1,
            name: 'Python',
            imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },
         {
            id: 2,
            name: 'C++',
            imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },

         {
            id: 3,
            name: 'Html',
            imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
         },
      ]
         },
        
         {
            id: 4,
            name: 'Harry Goliyo',
            role: 'Trello Admin',
            bio: 'Passionate software student enthusiast. Committed to continuous learning and collaboration. Excited to explore diverse tech projects and contribute meaningfully to the fields',
            imageUrl: 'https://images.pexels.com/photos/13725306/pexels-photo-13725306.jpeg',
            skils:[
               {
                  id: 1,
                  name: 'java',
                  imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
               },
               {
                  id: 2,
                  name: 'Spring Boot',
                  imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
               },
      
               {
                  id: 3,
                  name: 'Express.js',
                  imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
               },
            
   
                ]

             },

             {
               id: 5,
               name: 'Pascal Gihozo',
               role: 'Git Manager',
               bio: 'I am a backend developer, proficient in Django and FastAPI. I have worked on several frontend projects, which made me comfortable with frontend tools like ReactJS, HTML, CSS, Bootstrap and Tailwind CSS.My role is to set-up and manage GitHub operations, set-up the project, and  source the APIs to use within the project.',
               imageUrl: 'https://images.pexels.com/photos/13725306/pexels-photo-13725306.jpeg',
               skils:[
                  {
                     id: 1,
                     name: 'React.js',
                     imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
                  },
                  {
                     id: 2,
                     name: 'Python',
                     imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
                  },
         
                  {
                     id: 3,
                     name: 'Django',
                     imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
                  },
                  ] 
                },

                {
                  id: 6,
                  name: 'Lyse Arlette ANEZE',
                  role: 'Pr. Cordinator',
                  bio: 'I am a web developer who aims to create user centered tech solutions. In this project I was the secretary and contributed to the front end part of the website.',
                  imageUrl: 'https://images.pexels.com/photos/13725306/pexels-photo-13725306.jpeg',
                  skils:[
                     {
                        id: 1,
                        name: 'React.js',
                        imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
                     },
                     {
                        id: 2,
                        name: 'Bootstrap',
                        imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
                     },
            
                     {
                        id: 3,
                        name: 'Html',
                        imageUrl:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
                     },
                      ]
      
                   },
          
                  ];


const authorClickedHandler = (authorId) => {
   if(selectedAuthor === authorId){
      setSelectedAuthor(null);
   }else{
      setSelectedAuthor(authorId);
   }
};

return(
   <div className='container'>
      <Navigation />
      <div className='all-authors'>
         {pageAuthors.map((author) =>(
            <div key = {author.id} className='one-author'
            onClick={() => authorClickedHandler(author.id)}>

      <img src={author.imageUrl} alt = {author.name}
      style={{cursor: 'pointer'}}   
      />
      <h3>{author.name}</h3>
      </div>
         ))}
      </div>
      {selectedAuthor && (
         <div className='authorInfo'>
            <img 
            src= {pageAuthors[selectedAuthor - 1].imageUrl}
            alt= {pageAuthors[selectedAuthor - 1].name}
            style = {{width: '150px', height:'150px',borderRadius:'50%'}}
            />
            <h2>{pageAuthors[selectedAuthor - 1].name}</h2>
            <p>{pageAuthors[selectedAuthor - 1].role}</p>
            <p>{pageAuthors[selectedAuthor - 1].bio}</p>
            <h4  className= "SkillTitle">SKILLS</h4>
            <div className= "skillDivs">
            {pageAuthors[selectedAuthor - 1].skils.map((skill) =>(
            <div className= "skill" key = {skill.id}>
               <img src = {skill.imageUrl} alt = {skill.name}/>
               <p>{skill.name}</p>
               <div className= "darkDiv"></div>
               </div>
            ) ) } 
     </div> 
   </div>
      )}

<Footer />
   </div>
);
};
export default Authors;