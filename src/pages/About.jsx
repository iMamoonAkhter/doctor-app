import React from 'react';
import '../css/About.css'; // Import your CSS file
import Pic from "../assets/images/myPic.jpg";

const About = () => {
  const doctorInfo = {
    name: "Dr. John Doe",
    heading: "Clinical Psychologist & Speech Pathologist",
    experience: "10 years",
    image: "doctor-image.jpg"
  };

  const services = [
    "Anger Management",
    "Anxiety Disorders Treatment",
    "Autism Treatment",
    "Career Counselling",
    "Intellectual Disabilities",
    "Social Anxiety Disorders Treatment",
    "Speech Therapy",
    "Voice Disorder"
  ];

  const education = [
    {
      degree: "BS (Clinical Psychology)",
      duration: "4 years (2010 - 2014)",
      university: "ABC University"
    },
    {
      degree: "MS (Speech and Language Pathology)",
      duration: "2 years (2015 - 2017)",
      university: "XYZ University"
    }
  ];

  const specialization = [
    "Psychologist",
    "Speech and Language Pathologist"
  ];

  const experienceList = [
    "2018 - 2019: Assistant to Speech and Language Pathologist, Doctor's Hospital, Lahore",
    "2013 - Present: Clinical Psychologist, Private Practice",
    "2018 - Present: Psychologist, Speech and Language Pathologist, SOS Children's Home, Johar Town",
    "2018 - Present: Visiting Lecturer, Psychology Department, COMSATS University",
    "2013 - Present: Visiting Psychologist, Speech and Language Pathologist, Zubaida Sharif Centre"
  ];

  const languagesSpoken = ["English", "Punjabi", "Urdu"];

  const aboutMe = "I am a Psychologist and Speech and Language Pathologist with a BS in Clinical Psychology and an MS in Speech and Language Pathology.";

  return (
    <div className="about-container">
      <section className="about-header c-width-1 m-auto">
        <img src={Pic} alt="Doctor" className="doctor-image" />
        <div className="doctor-info">
          <h1 className="doctor-name">{doctorInfo.name}</h1>
          <h2 className="doctor-heading">{doctorInfo.heading}</h2>
          <p className="doctor-experience">Experience: {doctorInfo.experience}</p>
        </div>
      </section>

      <section className="about-me-section c-width-1 m-auto">
        <h3>About Me</h3>
        <p>{aboutMe}</p>
      </section>

      <div className='d-flex justify-content-between align-items-start c-width-1 m-auto'>
        <section className="services-section">
          <h3>Services</h3>
          <ul className="services-list">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="education-section">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div className="education-item" key={index}>
              <p>{edu.degree}</p>
              <p>Duration: {edu.duration}</p>
              <p>University: {edu.university}</p>
            </div>
          ))}
        </section>
      </div>


      <div className='d-flex justify-content-between align-items-start c-width-1 m-auto'>
        <section className="specialization-section">
          <h3>Specialization</h3>
          <ul>
            {specialization.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </section>

        <section className="languages-section">
          <h3>Languages Spoken</h3>
          <ul>
            {languagesSpoken.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="experience-section c-width-1 m-auto">
        <h3>Experience</h3>
        <ul className="experience-list">
          {experienceList.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
