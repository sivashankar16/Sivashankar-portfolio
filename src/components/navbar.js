import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { About } from '../pages/aboutPage';
import { Experience } from '../pages/experiencePage';
import { ContactPage } from '../pages/contactPage';
import PraveenResume from '../images/Siva_Shankar_Resume.pdf';
import Logo from '../images/logo.jpg';
import NavbarImage from '../images/navbarImage.avif';

import { Project } from '../pages/projectPage';

const names = ['Software Developer', 'FrontEnd Developer'];

export const Navbar = () => {
  const text = "I'm Siva Rajendran";
  const words = Array.from(text);

  const [newName, setnewName] = useState('');

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-scroll"
          style={{ position: 'absolute' }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={Logo} className="me-2" height="40" alt="MDB Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={50}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={50}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={50}
                  >
                    Projects
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li> */}
              </ul>
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/rajendran-sivashankar-419863303"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </li>
                {/* <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li> */}
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://github.com/"
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section>
          <div
            id="intro"
            className="bg-image"
            style={{
              backgroundImage: `url(${NavbarImage})`,
              //    "url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2106&q=100')",
              height: '100vh',
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <motion.div
                    style={{
                      overflow: 'hidden',
                      display: 'flex',
                      fontSize: '2rem',
                    }}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {words.map((word, index) => (
                      <motion.h1
                        className="mb-3 text-center"
                        variants={child}
                        key={index}
                      >
                        {word === ' ' ? '\u00A0' : word}
                      </motion.h1>
                    ))}
                  </motion.div>
                  {/* <h1 className="mb-3 text-center">I'm Praveen Rajendran</h1> */}
                  <h4 className="mb-3 text-center">{newName}</h4>
                  <div className="d-flex justify-content-center align-items-center">
                    <a
                      className="btn btn-outline-light btn-lg mb-3 text-center"
                      href={PraveenResume}
                      role="button"
                      download
                    >
                      Resume
                      <i className="fas fa-download ms-1"></i>
                    </a>
                    <Link
                      className="btn btn-outline-light btn-lg mb-3"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={50}
                      role="button"
                      style={{ marginLeft: '10px' }}
                    >
                      About
                      <i className="fas fa-gem ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <div className="container my-5 py-5">
          <>
            <About />
          </>
          <>
            <Experience />
          </>
          <>
            <Project />
            <br />
          </>
          <>
            <ContactPage />
          </>
          <>
            {/* <footer className="bg-light text-center text-white">
              <div className="container p-4 pb-0">
                <section className="mb-4">
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor:"#55acee"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>


                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor:"#ac2bac"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor:"#0082ca"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor:"#333333"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </section>
              </div>

              <div
                className="text-center p-3"
                style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}
               
              >
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">
                  MDBootstrap.com
                </a>
              </div>
            </footer> */}
          </>

          {/*  */}
        </div>
      </main>
      <footer className="bg-light text-center text-white">
        <div
          className="text-center p-3 gradient-custom"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-white" href="/">
            Siva Shankar Rajendran
          </a>
        </div>
      </footer>
    </>

    //   <header>
    //   <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
    //     <div className="container">
    //       <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
    //         data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    //         aria-label="Toggle navigation">
    //         <i className="fas fa-bars"></i>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto">
    //           <li className="nav-item">
    //             <a className="nav-link" href="#!">About</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#!">Experience</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#!">Projects</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#!">Contact</a>
    //           </li>
    //         </ul>
    //         <ul className="navbar-nav d-flex flex-row">
    //           <li className="nav-item me-3 me-lg-0">
    //             <a className="nav-link" href="#!">
    //               <i className="fab fa-Linkedin"></i>
    //             </a>
    //           </li>
    //           <li className="nav-item me-3 me-lg-0">
    //             <a className="nav-link" href="#!">
    //               <i className="fab fa-twitter"></i>
    //             </a>
    //           </li>
    //           <li className="nav-item me-3 me-lg-0">
    //             <a className="nav-link" href="#!">
    //               <i className="fab fa-instagram"></i>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    //   <section>

    //     <div id="intro" className="bg-image vh-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2106&q=100')"}}
    //       >
    //       <div className="mask" style={{ backgroundColor:"rgba(250, 182, 162, 0.15)"}} >

    //       </div>
    //     </div>

    //   </section>

    // </header>
  );
};
