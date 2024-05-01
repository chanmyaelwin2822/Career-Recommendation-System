import "./Profilehome.css";
import img from "../../assets/images/working_21.png";
// import Particles from "../Particles";
import "../Particles.scss";

const ProfileHome = (props) => {
  return (
    <section className="hero page-bg hero-bg d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-text">
              <h1 className="text-white mb-3" data-aos="fade-up">
                {" "}
                Hello <span className="text-upper">{props.currentUser}</span>
              </h1>
              <p className="text-white fs-5 mb-3" data-aos="fade-up">
                We are ready to recommend your career
              </p>
              <div className="mt-5 btn-bg">
                {" "}
                <a
                  href={"/careerprediction/" + props.currentUserid}
                  className="custom-btn btn mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Find your career!
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="hero-image">
              <img src={img} className="img-fluid" alt="working girl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfileHome;
