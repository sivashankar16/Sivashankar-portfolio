import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <>
      <h1
        className="mb-3 text-center"
        style={{ marginTop: '50px' }}
        id="experience"
      >
        Work Experience
      </h1>

      <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              'linear-gradient(to right, rgba(0,255,242,0.8), rgba(0,0,0,0.8)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #494949' }}
          iconStyle={{ background: '#00FFFF', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <motion.h3
            className="vertical-timeline-element-title"
            initial={{ opacity: 0, translateX: -20, translateY: -20 }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            // viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5 }}
          >
            Front-End Developer
          </motion.h3>
          <h6 className="vertical-timeline-element-subtitle">
            Zeal Zoft,Adyar
          </h6>
          <p>
            Database Services,Rest API's, Website development, App development
          </p>
          <p>April 2024 - Present</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};
