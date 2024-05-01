import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import surveyJson from "./questions";
import "survey-react/survey.css";
import themeJson from "./themeJson";
import "survey-core/defaultV2.min.css";
import "./survey.css";
import PredictService from "../../../services/predict.service";
import axios from "axios";
import "../../Particles.scss";
import resultimg from "../../../assets/images/result3.png";

const MySurvey = (props) => {
  const { userid } = useParams();

  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;
  survey.applyTheme(themeJson);
  survey.showCompletedPage = false;

  const showResults = (sender) => {
    const results = JSON.stringify(sender.data);
    const result = JSON.parse(results);
    delete result.sector;
    // console.log(result);
    axios
      .post("http://localhost:8000/", result)

      .then((response) => {
        console.log(response);
        const jsonDataString = JSON.stringify(response.data);
        const jsonData = JSON.parse(jsonDataString);
        const suggestedRole = jsonData.y_pred;
        const originalData = jsonData.original_data;
        originalData["role"] = suggestedRole;

        const completionMessage = `
            <div class="result-container">
              <div class="animation-wrapper">
              <div class="particle particle-1"></div>
              <div class="particle particle-2"></div>
              </div>
              <img src={homebg} alt="" className="home-bg" />
              
              <div class = "result-div">
                <div class = "result-image">
                </div>
                <div class ="result-content">
                    <h3 class="result-title1">Your best-suited career is </h3>
                    <br>
                    <p class="line-1 anim-typewriter result-title">"${suggestedRole}"</p>
                </div>
              </div>
          `;

        survey.completedHtml = completionMessage;
        survey.showCompletedPage = true;
        if (result) {
          PredictService.predict(originalData, userid).then(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error.message);
            }
          );
        }
      });
  };

  survey.onComplete.add(showResults);

  return <Survey model={survey} />;
};

export default MySurvey;
