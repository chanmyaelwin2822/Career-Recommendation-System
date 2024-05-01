import MySurvey from "./SurveyDetail/survey";
import "./SurveyPage.css";
import "../Particles.scss";
const SurveyPage = (props) => {
  return (
    <div className="page-bg">
      <div className="animation-wrapper">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
      </div>
      <section className="survey-page d-flex justify-content-center align-items-center">
        <div className="container mt-5 pt-5">
          <div className="survey-container">
            <MySurvey className="survey"></MySurvey>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SurveyPage;
