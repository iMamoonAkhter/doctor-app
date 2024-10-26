import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../css/WorkingHours.css";
import doctorImage from "../assets/images/doctor.png";
import BookAppointmentModal from "./BookAppointmentModal";

const workingHoursData = [
  {
    hospitalName: "Evercare Hospital",
    timings: [
      { day: "MON - THURSDAY", hours: ["10:30 – 14:00", "17:00 – 18:45"] },
      { day: "FRIDAY", hours: ["09:30 – 12:00", "17:00 – 18:45"] },
    ],
  },
  {
    hospitalName: "Saleem Memorial Trust Hospital",
    timings: [
      { day: "MON - FRIDAY", hours: ["15:00 – 17:00"] },
    ],
  },
];

const WorkingHours = () => {
    const { openModal } = useContext(AppContext);

    return (
      <div className="app-container c-width-1 com-margin">
        {/* First Column - Working Hours */}
        <div className="column working-hours-container" style={{ flex: "1.1 0 0" }}>
          <h2 className="working-hours-title c-white">Working Hour</h2>

          {workingHoursData.map((hospital, index) => (
            <div key={index} className="hospital-info">
              <h3 className="hospital-name c-white">{hospital.hospitalName}</h3>
              <div className="schedule">
                {hospital.timings.map((time, idx) => (
                  <div key={idx} className="d-flex justify-content-between">
                    <div>
                      <p className="c-white"><strong>{time.day}</strong></p>
                    </div>
                    <div>
                      {time.hours.map((hour, hIdx) => (
                        <p key={hIdx} className="c-white">{hour}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="contact-info">
            <p className="c-white" style={{fontSize: "1.5vw"}}>Phone / Whatsapp</p>
            <h3 className="phone-number c-white">0321-4994240</h3>
            <button className="appointment-button" onClick={openModal}>GET APPOINTMENT</button>
          </div>
        </div>

        {/* Second Column - Doctor Image */}
        <div className="column doctor-image-container" style={{ flex: "1" }}>
          <img src={doctorImage} alt="Doctor" className="doctor-image" />
        </div>

        {/* Third Column - Doctor Info */}
        <div className="column doctor-info-container" style={{ flex: "1" }}>
          <p className="intro-title">INTRODUCTION</p>
          <h2>Your Experienced Urologist</h2>
          <p>
            Dr. Zubair Ahmad Cheema, a UK-trained urologist, specializes in treating common and complex urological malignancies. Additionally, he is currently focusing on upper tract cancers, kidney stones, infections, prostate enlargement, and men health issues, thereby expanding his expertise in diverse areas of urology.
          </p>
        </div>

        
      </div>
    );
};

export default WorkingHours;
