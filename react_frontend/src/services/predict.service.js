import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

class PredictService {
  predict(original_data, userid) {
    // same name with userRequest
    // console.log(original_data[algorithm]);
    const operating = original_data["operating"]
    const algorithm = original_data["algorithm"]
    const programming = original_data["programming"]
    const software = original_data["software"]
    const network = original_data["network"]
    const architecture = original_data["architecture"]
    const mathematics = original_data["mathematics"]
    const coding = original_data["coding"]
    const logical = original_data["logical"]
    const publicspeak = original_data["publicspeak"]
    const selflearning = original_data["selflearning"]
    const teamwork = original_data["teamwork"]
    const communication = original_data["communication"]
    const gentle = original_data["gentle"]
    const management = original_data["management"]
    const hardworker = original_data["hardworker"]
    const introvert = original_data["introvert"]
    const subject = original_data["subject"]
    const careerarea = original_data["careerarea"]
    const workhour = original_data["workhour"]
    const salary = original_data["salary"]
    const company = original_data["company"]
    const role = original_data["role"]
    return axios
      .post(
        API_URL + "predict",
        {
          operating,
          algorithm,
          programming,
          software,
          network,
          architecture,
          mathematics,
          coding,
          logical,
          publicspeak,
          selflearning,
          teamwork,
          communication,
          gentle,
          management,
          hardworker,
          introvert,
          subject,
          careerarea,
          workhour,
          salary,
          company,
          role,
          userid,
        },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data;
      });
  }
}

export default new PredictService();
