import React from 'react';
import AboutImage from '../images/aboutImage.jpg';
import SoftwareDevelopmentImage from '../images/softwareDevelopment.png';
import CloudImage from '../images/Cloud.png';
import BackImage from '../images/Backend.png';
import WebImage from '../images/Web.png';
import DataImage from '../images/Database.png';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div id="about">
      <div className="row">
        <div className="col-sm-6">
          <motion.div
            className="card mb-3 gradient-custom"
            style={{ maxWidth: '540px' }}
            whileHover={{ scale: [null, 1, 1.2] }}
            transition={{ duration: 0.6 }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={AboutImage}
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-white">About</h5>
                  <p className="card-text text-white">
                    I am an expert in the field of software development and can
                    execute a variety of job-related tasks. I am proficient in
                    coding and markup languages, as well as in developing apps
                    employing the client-server model and rest APIs.I have
                    experience dealing with user experience, business logic,
                    database management and cloud-based programming. 
                  </p>
                  <motion.p
                    className="card-text"
                    initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                    whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                    // viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span
                      className="badge badge-success rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      HTML
                    </span>
                    <span
                      className="badge badge-success rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      CSS
                    </span>
                    <span
                      className="badge badge-success rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      JS
                    </span>
                    <span
                      className="badge badge-success rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      Java
                    </span>
                    <span
                      className="badge badge-success rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      C#
                    </span>
                    <br />
                    <span
                      className="badge badge-warning rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      nodeJS
                    </span>
                    <span
                      className="badge badge-warning rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      reactJS
                    </span>
                    <br />
                    <span
                      className="badge badge-primary rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      MongoDB
                    </span>
                    <span
                      className="badge badge-primary rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      Firebase
                    </span>
                    <span
                      className="badge badge-primary rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      MySQL
                    </span>
                    <br />
                    <span
                      className="badge badge-danger rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      AWS
                    </span>
                    <span
                      className="badge badge-danger rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      OAuth2
                    </span>{' '}
                    <span
                      className="badge badge-danger rounded-pill d-inline"
                      style={{ marginLeft: '4px' }}
                    >
                      Google Cloud Platform
                    </span>
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="col-sm-6">
          <div className="card gradient-custom">
            <div className="card-body">
              <h5 className="card-title text-center text-white">Skills</h5>
              {/* <div className="row">
                <div className="col-sm-4">
                  <motion.div
                    className="card testimonial-card mt-2 mb-3"
                    whileHover={{ scale: [null, 1, 1.2] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/6219/6219219.png"
                        className="rounded-circle img-fluid"
                        alt="woman avatar"
                        style={{ background: "black" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h6
                        className="card-title font-weight-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Software Development
                      </h6>
                      <p>
                        <span className="badge rounded-pill badge-danger">
                          Advanced
                        </span>
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-sm-4">
                  <motion.div
                    className="card testimonial-card mt-2 mb-3"
                    whileHover={{ scale: [null, 1, 1.2] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/8472/8472020.png"
                        className="rounded-circle img-fluid"
                        alt="woman avatar"
                        style={{ background: "black" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h6
                        className="card-title font-weight-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Web Development
                      </h6>
                      <p>
                        <span className="badge rounded-pill badge-danger">
                          Advanced
                        </span>
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-sm-4">
                  <motion.div
                    className="card testimonial-card mt-2 mb-3"
                    whileHover={{ scale: [null, 1, 1.2] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3672/3672955.png"
                        className="rounded-circle img-fluid"
                        alt="woman avatar"
                        style={{ background: "black" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h6
                        className="card-title font-weight-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Backend Services
                      </h6>
                      <p>
                        <span className="badge rounded-pill badge-danger">
                          Advanced
                        </span>
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-sm-4">
                  <motion.div
                    className="card testimonial-card mt-2 mb-3"
                    whileHover={{ scale: [null, 1, 1.2] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2452/2452540.png"
                        className="rounded-circle img-fluid"
                        alt="woman avatar"
                        style={{ background: "black" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h6
                        className="card-title font-weight-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Mobile Development
                      </h6>
                      <p>
                        <span className="badge rounded-pill badge-success">
                          Beginner
                        </span>
                      </p>
                    </div>
                  </motion.div>
                </div>{" "}
                <div className="col-sm-4">
                  <motion.div
                    className="card testimonial-card mt-2 mb-3"
                    whileHover={{ scale: [null, 1, 1.2] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2637/2637164.png"
                        className="rounded-circle img-fluid"
                        alt="woman avatar"
                        style={{ background: "black" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h6
                        className="card-title font-weight-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Cloud Development
                      </h6>
                      <p>
                        <span className="badge rounded-pill badge-success">
                          Beginner
                        </span>
                      </p>
                    </div>
                  </motion.div>
                </div>{" "}
                <div className="col-sm-4">
                  <motion.div
                    className="card testimonial-card mt-2 mb-3"
                    whileHover={{ scale: [null, 1, 1.2] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/6123/6123145.png"
                        className="rounded-circle img-fluid"
                        alt="woman avatar"
                        style={{ background: "black" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h6
                        className="card-title font-weight-bold"
                        style={{ fontSize: "0.8rem" }}
                      >
                        UI/UX Design
                      </h6>
                      <p>
                        <span className="badge rounded-pill badge-warning">
                          Intermediate
                        </span>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div> */}
              <motion.div
                className="table-responsive-sm text-nowrap"
                // whileHover={{ scale: [null, 1, 1.2] }}
                // transition={{ duration: 0.6 }}
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                // viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.5 }}
              >
                <table className="table table-bordered table-striped align-middle mb-0 bg-white">
                  <thead className="bg-light">
                    <tr>
                      <th>Areas</th>
                      <th>Level</th>
                      <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={SoftwareDevelopmentImage}
                            alt=""
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'black',
                            }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">Software Development</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-primary rounded-pill d-inline">
                          Beginner
                        </span>
                      </td>
                      <td>5 MTH</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={DataImage}
                            alt=""
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'black',
                            }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">Database Services</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-primary rounded-pill d-inline">
                          Beginner
                        </span>
                      </td>
                      <td>5 MTH</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={WebImage}
                            alt=""
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'black',
                            }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">Web Development</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success rounded-pill d-inline">
                          Intermediate
                        </span>
                      </td>
                      <td>5 MTH</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={BackImage}
                            alt=""
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'black',
                            }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">Backend Services</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-primary rounded-pill d-inline">
                          Beginner
                        </span>
                      </td>
                      <td>5 MTH</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={CloudImage}
                            alt=""
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'black',
                            }}
                            className="rounded-circle"
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">Cloud Development</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-primary rounded-pill d-inline">
                          Beginner
                        </span>
                      </td>
                      <td>5 MTH</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
