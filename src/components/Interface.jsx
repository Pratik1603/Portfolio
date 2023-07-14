import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import BallCanvas from "./ballCanvas";
import Carousel from "react-multi-carousel";
import download from "../assets/download.png";
import img1 from "../assets/nft.png";
import img2 from "../assets/ether.png";
import img3 from "../assets/rupee.png";
import solidityImg from "../assets/solidity.png";
import reactImg from "../assets/react.png";
import c_Img from "../assets/c++.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import three from "../assets/three.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import "react-multi-carousel/lib/styles.css";
import connect from "../assets/connect.png";
import connect2 from "../assets/connect2.png";
import FIR from "../assets/arrestedHands.png";
import chat from "../assets/chatD.png";
import supply from "../assets/supplyChain.png";
import fabrest from "../assets/fabrest.png";
import portfolio from "../assets/portfolio.png";
import { TypeAnimation } from 'react-type-animation';

const projects=[
  {
    image:FIR,
    name:"Report Safe Daap",
    link:"https://reportsafeblocks.netlify.app/",
    about:"This project is a decentralized compliant filing app. It offers increased transparency, security, control, and collaboration while mitigating the limitations of traditional centralized systems. It can revolutionize the way FIRs are handled.",
  },
  {
    image:chat,
    name:"Chat Dapp",
    link:"https://github.com/Pratik1603/Chat-DAPP",
    about:"It is a chat application built on a decentralized network, such as a blockchain. Chat DApps leverage the principles of decentralization to provide increased privacy, security, and censorship resistance.",
  },
  {
    image:supply,
    name:"Supply Chain Daap",
    link:"https://github.com/Pratik1603/SupplyChainDapp",
    about:"This project helps streamline and enhance the efficiency, transparency, and trust in supply chain management processes. It has benefits of decentralization, such as immutability, transparency, and traceability.",
  },
  {
    image:portfolio,
    name:"Portfolio Website",
    link:"https://github.com/Pratik1603/Portfolio",
    about:"This project is  a portfolio website made in threeJs . This project uses blender to make 3d models so that it looks interactive . It have complete details of me.",
  },
  {
    image:fabrest,
    name:"Fabrest",
    link:"https://github.com/Pratik1603/Fabrest_app",
    about:"An e-commerce app is a software application that enables users to browse, purchase, and manage products or services through their mobile devices. E-commerce apps provide a convenient and user-friendly platform.",
  }


]
const sites = [
  {
    name: "Linkedin",
    icon: linkedin,
    url:"https://www.linkedin.com/in/pratik-gupta-8a34a2229",
  },
  {
    name: "Github",
    icon: github,
    url:"https://github.com/Pratik1603",
  },
  {
    name: "Twitter",
    icon: twitter,
    url:"https://twitter.com/PratikG1603",
  },

 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
 
  {
    name: "React JS",
    icon: reactImg,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "Three JS",
    icon: three,
  },
 
  {
    name:"c++",
    icon:c_Img,
  },
  {
    name:"solidity",
    icon:solidityImg,
  },
  {
    name:"Java",
    icon:java,
  }
 
];


const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className="text-[#bb2d2d] px-1 italic">Pratik Gupta</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        
        <TypeAnimation
      sequence={[
        
        'I am a Student',
        1000, 
        'I am a Fullstack Web Developer',
        1000,
        'I am a Blockchain Developer',
        1000,
        'I am a learner',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        <br />
        Interested to change the world through Daaps
      </motion.p>
      <motion.div className=" h-min  mt-[2%] flex flex-row flex-wrap justify-center gap-2"
       initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 2,
      }}>
        {sites.map((site)=>{
          return(
            <div className='w-10 h-10 hover:scale-105 cursor-pointer' key={site.name}>
              <a href={site.url} target="_blank" rel="noopener noreferrer">
              <img src={site.icon} href={site.url} />
              </a>
            </div>
          )
        })} 
      </motion.div>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-8 `}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};




const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-[100%]   h-full md:w-[50%]  md:mt-4" whileInView={"visible"}
      >
        <div className="text-white ">
          <motion.div className=" h-min  relative  flex"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            
          }}>
          <motion.div className="hover:scale-105 absolute hidden md:block right-[-30%] w-40 h-40">
              <img src={img1}/>

          </motion.div>
          <motion.div className=" hover:scale-105 absolute hidden md:block top-[160%] right-[-50%] w-48 h-48">
              <img src={img2}/>
              
          </motion.div>
          <motion.div className=" hover:scale-105 absolute hidden md:block top-[350%] right-[-40%] w-40 h-40">
              <img src={img3}/>
              
          </motion.div>
          <div className="  w-[33%] hover:scale-105">
            <div className="border-l-4 cursor-pointer  border-t-2 border-r-2 font-bold text-white shadow-2xl bg-[#1912e77a]  opacity-80 w-[64%] rounded-l-xl p-[1%] md:p-[1] rounded-tr-xl text-lg md:text-xl text-center">
              Name
            </div>
            <div className="font-bold border-r-4 cursor-pointer  border-b-2 border-b-black border-l-black border-l-2 border-r-black text-[#16163f] shadow-2xl p-[2%] bg-[#f0eff4c5]  opacity-80 rounded-r-xl rounded-bl-xl ml-[10%] text-sm  text-center w-[95%] md:w-[70%]">
              Pratik Gupta
            </div>

          </div>

          <div className=" w-[33%] hover:scale-105">
            <div className="border-l-4 cursor-pointer  border-t-2 border-r-2 font-bold text-white shadow-2xl bg-[#1912e77a]  opacity-80 w-[60%] rounded-l-xl p-[1%] rounded-tr-xl  text-lg md:text-xl text-center">
              Age
            </div>
            <div className="font-bold border-r-4 cursor-pointer  border-b-2 border-b-black border-l-black border-l-2 border-r-black text-[#16163f] shadow-2xl p-[2%] bg-[#f0eff4c5]  opacity-80 rounded-r-xl text-sm rounded-bl-xl ml-[10%] text-center w-[95%] md:w-[70%]">
            20 Yrs
            </div>

          </div>

          <div className=" w-[33%] hover:scale-105">
            <div className="border-l-4 cursor-pointer  border-t-2 border-r-2 font-bold text-white shadow-2xl bg-[#1912e77a]  opacity-80 w-[60%] rounded-l-xl p-[1%] rounded-tr-xl text-lg md:text-xl text-center">
              From
            </div>
            <div className="font-bold border-r-4 cursor-pointer  border-b-2 border-b-black border-l-black border-l-2 border-r-black text-[#16163f] shadow-2xl p-[1%] bg-[#f0eff4c5] text-sm  opacity-80 rounded-r-xl rounded-bl-xl ml-[10%] text-center w-[100%] md:w-[70%]">
              Gurugram ,India
            </div>

          </div>
          
          </motion.div>
          <motion.div className="mt-[4%]   w-[100%] hover:scale-105"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            
          }}>
            <div className="border-l-4 cursor-pointer  border-t-2 border-r-2 font-bold text-white shadow-2xl bg-[#1912e77a]  opacity-80 w-[50%] rounded-l-xl p-[1%] rounded-tr-xl  text-lg md:text-xl text-center">
              Education
            </div>
            <div className="font-bold border-r-4 cursor-pointer  border-b-2 border-b-black border-l-black border-l-2 border-r-black text-[#16163f] shadow-2xl p-[2%] bg-[#f0eff4c5]  opacity-80 rounded-r-xl md:text-lg text-sm rounded-bl-xl ml-[20%] text-center w-[85%] md:w-[70%]">
              IIIT Sonepat <br></br>
              Btech Computer Science Engineering<br></br>
              2021-2025
            </div>

          </motion.div>
          <motion.div className="mt-[4%]  w-[100%] hover:scale-105"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            
          }}>
            <div className="border-l-4 cursor-pointer  border-t-2 border-r-2 font-bold text-white shadow-2xl bg-[#1912e77a]  opacity-80 w-[50%] rounded-l-xl p-[1%] rounded-tr-xl text-lg md:text-xl text-center">
              Position Of Responsibility
            </div>
            <div  className="font-bold border-r-4 cursor-pointer  border-b-2 border-b-black border-l-black border-l-2 border-r-black text-[#16163f] shadow-2xl p-[2%] bg-[#f0eff4c5] md:text-lg text-sm  opacity-80 rounded-r-xl rounded-bl-xl ml-[20%] text-center w-[85%] md:w-[70%]">
            Ecell IIIT Sonepat - Events Team Lead <br></br>
              GDSC IIIT Sonepat - Social Media Lead
            </div>

          </motion.div>
          <motion.div className=" mt-[4%] w-[200%]  md:flex gap-8"
           initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            
          }}>
            <div className="  hover:scale-105 w-[50%]">            
            <div className="border-l-4 p-[1%] cursor-pointer  border-t-2 border-r-2 font-bold text-white shadow-2xl bg-[#1912e77a]  opacity-80 w-[50%] rounded-l-xl rounded-tr-xl text-lg md:text-xl text-center">
              About
            </div>
            <div  className="font-bold border-r-4 cursor-pointer  border-b-2 border-b-black border-l-black border-l-2 border-r-black text-[#16163f] shadow-2xl p-[2%] bg-[#f0eff4c5]  text-sm opacity-80 rounded-r-xl rounded-bl-xl ml-[20%]  w-[85%] md:w-[70%]">
            Hi, I'm , a passionate blockchain developer with
             a focus on revolutionizing industries through decentralized
              technologies. With experience in web development
               and a deep understanding of blockchain principles
            </div>
            </div>

            <div className="w-[50%]  flex">   
            <div className="w-[70%] md:w-[60%]">       
            <div className=" hover:scale-105 mx-auto   border-l-4 p-[1%] cursor-pointer border-b-2  border-t-2 border-r-2 font-bold text-white shadow-2xl bg-[#1912e77a]  opacity-80 w-[50%] rounded-l-xl  rounded-tr-xl  text-lg md:text-xl text-center">
              Skills
            </div>
            <div  className=" cursor-pointer mt-[2%] text-center w-[100%] md:w-[100%] ">
            <motion.div className=" h-min flex flex-row flex-wrap justify-center gap-[2%]"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay:1,
            }}>
              {technologies.map((technology)=>{
                return(
                  <div className='w-10 h-10' key={technology.name}>
                    <BallCanvas icon={technology.icon}  />
                  </div>
                )
              })}
              
            </motion.div>
            </div>
            </div>  
            <div className="w-[30%] md:w-[40%]">
            <div className=" hover:scale-105 cursor-pointer  mt-[1%] gap-8 w-[100%] ">
              <div className="shadow-2xl border-2 text-center mx-auto  h-10 w-[100%] md:w-[60%] flex flex-col justify-center mt-[8%] md:mt-[3%] border-white bg-[#1912e77a] font-bold p-[4%] rounded-2xl">
                Resume 
              </div>
              <div className="w-[50%] md:w-[25%] h-16 mx-auto p-[1%] mt-[20%] md:mt-[10%] shadow-2xl bg-[#f0eff4c5] text-[#16163f] font-bold rounded-xl animate-bounce">
              <a href="../assets/solidity.png" download>
                <img src={download}  className=" w-20 h-16"/>
              </a>
              </div>  
              
            </div>
            </div>
            </div>

          </motion.div>
          
      
        </div>
        
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
 
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
    <Section>
      <motion.div className="mt-[30%]  md:mt-0 w-full h-full  "
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay:1,
        
      }}>
        <div className="w-full h-[35%] mt-4  p-2">
          <div className="text-4xl md:text-4xl mb-2 font-bold text-[#120d24] px-1 p-2 italic">
            My Works
          </div>
         <div className="md:w-[65%] md:text-lg  text-sm w-[80%]  text-[#0f0a23]  ">
            Following projects showcase my skills and experience through real-world examples of my work . Each project is briefly described with links to code repositories and demo . It reflects my ability to solve complex problems ,work with different technologies and manage project effectively . 
         </div>

        </div>
        
        <div className=" w-full h-[55%] mt-24 md:mt-8 ">
        <Carousel  responsive={responsive} infinite={true} showDots={true}removeArrowOnDeviceType={["tablet", "mobile"]} >
        {projects.map((project)=>{
          return(

          <motion.div key={project.name} className="shadow-2xl  py-2 mx-auto cursor-pointer bg-[#14072e] w-72 h-80 rounded-xl hover:scale-105 transition-transform ease-in-out">
            <a href={project.link} target="blank">
             < motion.div className="shadow-2xl bg-[#fbf6ab] w-[90%] h-[60%] mt-2 mx-auto border-2 rounded-2xl">
              <img src={project.image} className="w-[90%] h-[90%] mx-auto"/>
             </motion.div>
             <div className="shadow-2xl p-[1%]  bg-white w-[90%] h-[36%] mx-auto mt-[2%] border-2 rounded-2xl">
               <p className="font-bold text-sm">{project.name}</p>
               <p className="text-xs">{project.about}</p>
               
             </div>
             </a>
          </motion.div>
          )
          
        })}
        </Carousel>
        </div>
      </motion.div>
      
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xjvqvdke");
  return (
    <Section >
      
      <div className="mt-8 md:mt-0 h-full  w-full">
        <h2 className="text-4xl md:text-5xl font-bold  h-[10%]">Contact me</h2>
        <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay:1,
        }}>
        <img className="absolute right-[15%] w-[20%] hidden md:block h-[10%] hover:scale-105" src={connect}/>
        </motion.div>
      <div className="mt-4 pt-4 px-8 rounded-md bg-white bg-opacity-50 w-96 h-[88%] max-w-full">
        {state.succeeded ? (
          <p className="text-[#171b52] text-4xl font-bold mt-[50%] text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay:1,
            }}>
            <img className="absolute right-[2%] hidden md:block w-[20%] h-[10%] hover:scale-105 " src={connect2}/>
            </motion.div>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg md:mt-4 mt-12 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
      </div>
      
    </Section>
  );
};


