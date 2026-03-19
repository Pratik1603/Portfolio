import { useEffect, useRef, useState } from "react";
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
import golang from "../assets/golang.png";
import restAPI from "../assets/restAPI.png";
import gitIcon from "../assets/GIT.png";
import dockerLogo from "../assets/Docker.png";
import kafkaLogo from "../assets/kafka.png";
import azure from "../assets/azure.jpg";
import d365 from "../assets/d365.jpg";
import goStream from "../assets/GO-Stream.png";
import accessAnalyser from "../assets/AccessAnalyse.png";
import CICD from "../assets/CICD.png";
// import pdf from "../Resume_PratikGuptaG.pdf";
import { TypeAnimation } from 'react-type-animation';


const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Resume_PratikGupta.pdf';
  link.download = 'Resume_PratikGupta.pdf';
  link.click();
};

const projects = [
  {
    image: CICD,
    name: "Full-Stack CI/CD Pipeline: Automated AWS Deployment",
    link: "https://github.com/Pratik1603/CI_CD_Pipeline_AWS_Project",
    about: "This project is a comprehensive demonstration of a Full-Stack CI/CD Pipeline, showcasing the automated delivery of a three-tier application (Nexus Messages) from code to production"
  },
  {
    image: goStream,
    name: "GoStream",
    link: "https://github.com/Pratik1603/GO-STREAM-AWS-",
    about: "A high-performance movie streaming application with a Go backend deployed on AWS Lambda,"
  },
  {
    image: accessAnalyser,
    name: "AccessAnalyser",
    link: "https://github.com/Pratik1603/Accessiblity-Analyzer",
    about: "Full-stack web accessibility analyzer automating WCAG 2.1 compliance testing across 8+ categories(ARIA, color contrast, keyboard navigation)"
  },
  {
    image: FIR,
    name: "Report Safe Daap",
    link: "https://reportsafeblocks.netlify.app/",
    about: "This project is a decentralized compliant filing app. It offers increased transparency, security, control, and collaboration while mitigating the limitations of traditional centralized systems. It can revolutionize the way FIRs are handled.",
  },
  {
    image: chat,
    name: "Chat Dapp",
    link: "https://github.com/Pratik1603/Chat-DAPP",
    about: "It is a chat application built on a decentralized network, such as a blockchain. Chat DApps leverage the principles of decentralization to provide increased privacy, security, and censorship resistance.",
  },
  {
    image: supply,
    name: "Supply Chain Daap",
    link: "https://github.com/Pratik1603/SupplyChainDapp",
    about: "This project helps streamline and enhance the efficiency, transparency, and trust in supply chain management processes. It has benefits of decentralization, such as immutability, transparency, and traceability.",
  },
  {
    image: portfolio,
    name: "Portfolio Website",
    link: "https://github.com/Pratik1603/Portfolio",
    about: "This project is  a portfolio website made in threeJs . This project uses blender to make 3d models so that it looks interactive . It have complete details of me.",
  },
  {
    image: fabrest,
    name: "Fabrest",
    link: "https://github.com/Pratik1603/Fabrest_app",
    about: "An e-commerce app is a software application that enables users to browse, purchase, and manage products or services through their mobile devices. E-commerce apps provide a convenient and user-friendly platform.",
  }


]
const sites = [
  {
    name: "Linkedin",
    icon: linkedin,
    url: "https://www.linkedin.com/in/pratik-gupta-8a34a2229",
  },
  {
    name: "Github",
    icon: github,
    url: "https://github.com/Pratik1603",
  },
  {
    name: "Twitter",
    icon: twitter,
    url: "https://twitter.com/PratikG1603",
  },


];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
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
    name: "c++",
    icon: c_Img,
  },
  {
    name: "solidity",
    icon: solidityImg,
  },
  {
    name: "Go",
    icon: golang,
  },

  {
    name: "Git",
    icon: gitIcon,
  },

  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Dynamics 365",
    icon: d365,
  },
  {
    name: "Docker",
    icon: dockerLogo,
  },
  {
    name: "Kafka",
    icon: kafkaLogo,
  },

];

const experiences = [
  {
    title: "Software Engineer",
    company: "MAQ Software",
    location: "Noida, India",
    date: "Jan 2025 - Present",
    description: "Developing enterprise marketing solutions for Fortune 500 clients. Improved system performance by 25% through data structure optimizations and enhanced accessibility compliance by 60%. Built AI-powered automation frameworks using C# and Azure, reducing manual processes by 30%.",
  },
];


const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-4 md:p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-start md:justify-center
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
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const ExperienceSection = () => {
  const scrollRef = useRef();
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const isScrollable = scrollHeight > clientHeight;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
        setCanScroll(isScrollable && !isAtBottom);
      }
    };
    checkScroll();
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener("scroll", checkScroll);
    }
    window.addEventListener("resize", checkScroll);
    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <Section mobileTop>
      <motion.div
        className="w-full md:w-[60%] ml-auto pl-0 flex flex-col justify-start pt-24 md:pt-24"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl md:text-7xl font-extrabold pb-2 mb-4 md:mb-10 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
          Experience
        </h2>

        <div
          ref={scrollRef}
          className="overflow-y-auto pr-6 pb-20 h-[calc(100vh-150px)] md:h-[calc(100vh-250px)] pointer-events-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-indigo-500/20 before:via-indigo-500/50 before:to-indigo-500/20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-start group is-active py-2">
                {/* Icon / Point */}
                <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-indigo-500 bg-white ring-4 ring-indigo-500/20 shadow-[0_0_15px_rgba(79,70,229,0.4)] shrink-0 translate-x-[1px] z-10 ml-[1.15rem]">
                </div>

                {/* Card */}
                <div className="ml-10 w-full max-w-xl bg-white/20 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                  {/* Accent Border Left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div className="flex flex-col">
                      <div className="font-black text-slate-900 text-xl tracking-tight leading-none mb-1">{exp.title}</div>
                      <div className="text-indigo-600 font-bold text-sm tracking-wide uppercase">{exp.company}</div>
                    </div>
                    <time className="font-caveat font-bold text-purple-600 text-lg whitespace-nowrap bg-purple-50/50 px-3 py-1 rounded-full border border-purple-100/50">{exp.date}</time>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4 opacity-70">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {exp.location}
                  </div>

                  <div className="text-slate-600 text-sm leading-relaxed font-medium">
                    {exp.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {canScroll && (
          <motion.div
            className="absolute bottom-8 right-12 flex flex-col items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer hover:bg-white/20 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => scrollRef.current?.scrollBy({ top: 100, behavior: 'smooth' })}
          >
            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-600 mb-2">Explore More</span>
            <div className="w-6 h-10 border-2 border-indigo-500/30 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1 h-2 bg-indigo-500 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mt-20 md:mt-0 text-slate-900 tracking-tight">
        Hi, I'm
        <br />
        <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent italic px-1">
          Pratik Gupta
        </span>
      </h1>
      <motion.p
        className="text-lg md:text-xl text-slate-600 mt-6 font-medium"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <TypeAnimation
          sequence={[
            'Fullstack Web Developer',
            2000,
            'Blockchain Developer',
            2000,
            'Lifelong Learner',
            2000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.2em', display: 'inline-block', fontWeight: '600', color: '#4f46e5' }}
          repeat={Infinity}
        />
        <br />
        Building the decentralized future, one block at a time.
      </motion.p>

      <motion.div
        className="h-min mt-8 flex flex-row flex-wrap justify-start gap-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {sites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 p-3 bg-white/40 backdrop-blur-md rounded-xl hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-white/20"
          >
            <img src={site.icon} alt={site.name} className="w-full h-full object-contain opacity-80 hover:opacity-100" />
          </a>
        ))}
      </motion.div>

      <motion.button
        onClick={() => setSection(4)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-10 rounded-full font-bold text-lg mt-12 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        Contact Me
      </motion.button>
    </Section>
  );
};

const SkillsSection = () => {
  const birthYear = 2003;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <Section>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-start md:justify-center gap-10 pt-20 md:pt-0">

        {/* Left Side: Personal Info Card */}
        <motion.div
          className="w-full md:w-1/3 bg-white/30 backdrop-blur-xl p-3 md:p-8 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg md:text-3xl font-bold mb-2 md:mb-6 text-indigo-100/90 border-b border-white/30 pb-1 md:pb-4">Profile</h3>
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:space-y-4">
            <div className="flex justify-between items-center bg-indigo-900/40 p-2 md:p-3 rounded-lg border border-white/20">
              <span className="text-[10px] md:text-base font-semibold text-indigo-100/90">Name</span>
              <span className="text-[10px] md:text-base font-bold text-white">Pratik Gupta</span>
            </div>
            <div className="flex justify-between items-center bg-indigo-900/40 p-2 md:p-3 rounded-lg border border-white/20">
              <span className="text-[10px] md:text-base font-semibold text-indigo-100/90">Age</span>
              <span className="text-[10px] md:text-base font-bold text-white">{age} Yrs</span>
            </div>
            <div className="flex justify-between items-center bg-indigo-900/40 p-2 md:p-3 rounded-lg border border-white/20 col-span-2">
              <span className="text-[10px] md:text-base font-semibold text-indigo-100/90">From</span>
              <span className="text-[10px] md:text-base font-bold text-white">Gurugram, India</span>
            </div>
          </div>
          <div className="bg-indigo-900/40 p-2 md:p-4 rounded-lg mt-2 md:mt-4 border border-white/20">
            <span className="text-[10px] md:text-sm font-semibold text-indigo-100/90 block">Education</span>
            <span className="text-[9px] md:text-sm text-white/90 font-medium">B.Tech CSE, IIIT Sonepat (2021-2025)</span>
          </div>
        </motion.div>

        {/* Right Side: Skills Grid */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-4xl font-bold mb-2 md:mb-8 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Skills & Tech</h3>
          <div className="grid grid-cols-5 md:flex md:flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
            {technologies.map((tech) => (
              <div key={tech.name} className="w-14 h-14 md:w-24 md:h-24 bg-white/30 backdrop-blur-lg rounded-xl md:rounded-2xl flex flex-col items-center justify-center p-1 md:p-2 border border-white/50 transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer hover:bg-white/50 group">
                <div className="w-6 h-6 md:w-12 md:h-12 mb-1">
                  <BallCanvas icon={tech.icon} />
                </div>
                <span className="text-[7px] md:text-xs font-bold text-white text-center drop-shadow-md group-hover:text-indigo-900 transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <a href="../assets/Pratik_s_Resume_SDE_1-2.pdf" download className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-xl text-sm md:text-base">
              <img src={download} className="w-5 h-5 filter invert" alt="down" />
              Download CV
            </a>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

const ProjectsSection = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // smoother scrolling
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <Section>
      <motion.div
        className="w-full h-full flex flex-col justify-start md:justify-center pointer-events-none pt-24 md:pt-0 pb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Container aligned to the RIGHT to leave space for Avatar on the LEFT */}
        <div className="w-full md:w-[85%] ml-auto pl-0 md:pl-0 pointer-events-auto">

          <div className="mb-8">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">My Works</h2>
            <p className="text-lg text-slate-700 font-medium leading-relaxed max-w-3xl">
              Here are some projects that showcase my skills in Web3, Blockchain, and Fullstack Development. Each project solves a unique problem.
            </p>
          </div>

          <div className="w-full">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              containerClass="carousel-container pb-12"
              itemClass="px-1 md:px-3"
              showDots={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.name}
                  className="bg-white/40 backdrop-blur-xl border border-white/50 p-4 md:p-6 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 h-[350px] md:h-[420px] flex flex-col group cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col">
                    <div className="h-32 md:h-44 rounded-2xl overflow-hidden mb-3 md:mb-5 border border-white/30 relative">
                      <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300"></div>
                      <img src={project.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" alt={project.name} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{project.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 flex-grow">
                      {project.about}
                    </p>

                    <div className="mt-4 w-full py-3 bg-white/50 hover:bg-white/80 rounded-xl font-bold text-indigo-700 text-center transition-all border border-white/50 shadow-sm">
                      View Project
                    </div>
                  </a>
                </motion.div>
              ))}
            </Carousel>
          </div>

        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xjvqvdke");
  return (
    <Section>
      <div className="w-full h-full flex items-start md:items-center justify-center pt-20 md:pt-0">
        {/* Adjusted wrapper: Removed bg/blur/border/shadow, kept layout structure */}
        <div className="w-full max-w-5xl p-4 md:p-8 flex flex-col md:flex-row gap-8 relative">

          {/* Form Side - Aligned Left with Glassmorphism */}
          <div className="w-full md:w-1/2 z-10 p-4 md:p-8 bg-white/30 backdrop-blur-lg rounded-[2rem] border border-white/40 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">Let's Connect</h2>
            <p className="text-slate-600 mb-6 font-medium">Have a project in mind? Send me a message.</p>

            {state.succeeded ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-100 p-6 rounded-2xl text-green-800 font-bold text-center text-xl border border-green-200"
              >
                Thanks for your message! 🚀
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1 ml-1">Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-white/70 border border-white/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 placeholder-slate-400 font-medium transition-all" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1 ml-1">Email</label>
                  <input type="email" name="email" id="email" required className="w-full bg-white/70 border border-white/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 placeholder-slate-400 font-medium transition-all" placeholder="john@example.com" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1 ml-1">Message</label>
                  <textarea name="message" id="message" required rows={3} className="w-full bg-white/70 border border-white/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 placeholder-slate-400 font-medium transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>

                <button type="submit" disabled={state.submitting} className="mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl shadow-lg transform active:scale-95 transition-all">
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-6 flex gap-4 justify-start">
              {sites.map((site) => (
                <a key={site.name} href={site.url} target="_blank" className="w-10 h-10 bg-white/50 rounded-full p-2 shadow-sm hover:scale-110 transition-transform">
                  <img src={site.icon} className="w-full h-full object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Empty Right Side for Avatar */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </div>
    </Section>
  );
};
