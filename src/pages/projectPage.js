import React from 'react';
import { motion } from 'framer-motion';

export const Project = () => {
  return (
    <div id="projects">
      <h1 className="mb-3 text-center" style={{ marginTop: '50px' }}>
        Projects
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <motion.div
            className="card h-100 gradient-custom"
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            // viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://img.freepik.com/free-vector/woman-weight-lifting-with-sports-icons_24877-51338.jpg?t=st=1713175771~exp=1713179371~hmac=9831ed7eb965da7d7adcc1eefda79ec58a83d7852a006648603a685b7a016799& w=720"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="card-body ">
              <h5 className="card-title text-white">Hale & Hearty</h5>

              <p className="card-text text-white">
                Hale&Hearty is a diet and activity tracking smartphone app and
                website. Gamification aspects are used in the app to motivate
                users to stick to their exercise.
              </p>
              <span
                className="badge rounded-pill badge-primary"
                style={{ marginLeft: '10px' }}
              >
                nodeJS
              </span>
              <span
                className="badge rounded-pill badge-success"
                style={{ marginLeft: '10px' }}
              >
                reactJS
              </span>
              <span
                className="badge rounded-pill badge-warning"
                style={{ marginLeft: '10px' }}
              >
                Xamarin
              </span>
              <span
                className="badge rounded-pill badge-secondary"
                style={{ marginLeft: '10px' }}
              >
                MongoDB
              </span>
              <span
                className="badge rounded-pill badge-danger"
                style={{ marginLeft: '10px' }}
              >
                AWS
              </span>
            </div>
          </motion.div>
        </div>
        <div className="col">
          <motion.div
            className="card h-100 gradient-custom"
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            // viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://img.freepik.com/free-vector/flat-design-characters-using-dating-app_23-2148267013.jpg?t=st=1713170359~exp=1713173959~hmac=2c5ee508f9a2b9fd4bd613b81f6090ced9bb41d8396eba7adf0178023930b461&w=740"
              className="card-img-top"
              alt="Palm Springs Road"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="card-body">
              <h5 className="card-title text-white">Real-time Chat App</h5>
              <p className="card-text text-white">
                It is mainly used for broadcasting messages to all connected
                clients in a particular server just like WhatsApp group chats.
                we can create audio,video call also..
              </p>
              <span
                className="badge rounded-pill badge-primary"
                style={{ marginLeft: '10px' }}
              >
                ReactJS
              </span>
              <span
                className="badge rounded-pill badge-primary"
                style={{ marginLeft: '10px' }}
              >
                NodeJS
              </span>
              <span
                className="badge rounded-pill badge-success"
                style={{ marginLeft: '10px' }}
              >
                MongoDB
              </span>
              <span
                className="badge rounded-pill badge-warning"
                style={{ marginLeft: '10px' }}
              >
                Socket.io
              </span>
            </div>
          </motion.div>
        </div>
        <div className="col">
          <motion.div
            className="card h-100 gradient-custom"
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            // viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://img.freepik.com/premium-vector/responsive_116353-13.jpg?w=740"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
              style={{ width: '100%', height: '95%' }}
            />
            <div className="card-body">
              <h5 className="card-title text-white">Huddle Landing Page</h5>
              <p className="card-text text-white">
                A simple landing page using HTML and CSS (with Sass and BEM) for
                a fictional company called Huddle. It utilizes vanilla CSS
                skills such as Flexbox, Grid, ...etc
              </p>
              <span
                className="badge rounded-pill badge-primary"
                style={{ marginLeft: '10px' }}
              >
                HTML
              </span>
              <span
                className="badge rounded-pill badge-primary"
                style={{ marginLeft: '10px' }}
              >
                CSS
              </span>
              <span
                className="badge rounded-pill badge-success"
                style={{ marginLeft: '10px' }}
              >
                JS
              </span>
            </div>
          </motion.div>
        </div>
        <div className="col">
          <motion.div
            className="card h-100 gradient-custom"
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            //viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://img.freepik.com/premium-vector/seo-analysis-flat-vector-download_203633-8954.jpg?w=740"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title text-white">KBL Admin Panel</h5>
              <p className="card-text text-white">
                This real estate admin panel is a system that enables
                administrators and other website workers to conduct various
                tasks like monitoring, maintaining, and controlling certain
                business processes.
              </p>
              <span
                className="badge rounded-pill badge-primary"
                style={{ marginLeft: '10px' }}
              >
                nodeJS
              </span>
              <span
                className="badge rounded-pill badge-success"
                style={{ marginLeft: '10px' }}
              >
                reactJS
              </span>
              <span
                className="badge rounded-pill badge-warning"
                style={{ marginLeft: '10px' }}
              >
                Tailwindcss
              </span>
              <span
                className="badge rounded-pill badge-secondary"
                style={{ marginLeft: '10px' }}
              >
                MongoDB
              </span>
              <span
                className="badge rounded-pill badge-danger"
                style={{ marginLeft: '10px' }}
              >
                MySQL
              </span>
            </div>
          </motion.div>
        </div>
        <div className="col">
          <motion.div
            className="card h-100 gradient-custom"
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            //  viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://img.freepik.com/premium-vector/making-words-with-letters-isolated-cartoon-vector-illustration_107173-19158.jpg?w=740"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title text-white">
                Child Day Care Management System Website
              </h5>
              <p className="card-text text-white">
                This is a web-based application that provides a website about a
                certain Child Day Care and gives an online platform for the
                parents to enroll their child.
              </p>
              <span
                className="badge rounded-pill badge-primary"
                style={{ marginLeft: '10px' }}
              >
                nodeJS
              </span>
              <span
                className="badge rounded-pill badge-success"
                style={{ marginLeft: '10px' }}
              >
                ReactJS
              </span>
              <span
                className="badge rounded-pill badge-success"
                style={{ marginLeft: '10px' }}
              >
                ReactNative
              </span>

              <span
                className="badge rounded-pill badge-warning"
                style={{ marginLeft: '10px' }}
              >
                AdminLTE React
              </span>
              <span
                className="badge rounded-pill badge-secondary"
                style={{ marginLeft: '10px' }}
              >
                MySQL
              </span>
              <span
                className="badge rounded-pill badge-danger"
                style={{ marginLeft: '10px' }}
              >
                PHP
              </span>
            </div>
          </motion.div>
        </div>
        <div className="col">
          <motion.div
            className="card h-100 gradient-custom"
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            //viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3898.jpg?t=st=1713166108~exp=1713169708~hmac=50f30d9c02033b512a412a9306a76e304cc18cfb24f7bafb0630d9ffa4b1b1a5&w=740"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title text-white">
                RFID Based Attendance System With Mobile App
              </h5>
              <p className="card-text text-white">
                The traditional methods of tracking attendance in office
                environments often involve manual processes that are
                time-consuming and prone to errors.
              </p>
              <span
                className="badge rounded-pill badge-primary"
                style={{ marginLeft: '10px' }}
              >
                Firebase
              </span>
              <span
                className="badge rounded-pill badge-success"
                style={{ marginLeft: '10px' }}
              >
                Arduino
              </span>
              <span
                className="badge rounded-pill badge-warning"
                style={{ marginLeft: '10px' }}
              >
                flutter
              </span>
              <span
                className="badge rounded-pill badge-secondary"
                style={{ marginLeft: '10px' }}
              >
                MongoDB
              </span>
              <span
                className="badge rounded-pill badge-secondary"
                style={{ marginLeft: '10px' }}
              >
                MySQL
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
