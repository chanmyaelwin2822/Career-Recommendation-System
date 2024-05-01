from flask import Flask, request, redirect, url_for ,jsonify
import pandas as pd
import numpy as np
import seaborn as sns
from model import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/',methods=["POST"]) 
def predict(): 
    data = request.get_json()
    if 'subject-Comment' in data:
        data['subject'] = data['subject-Comment']
        del data['subject-Comment']  # Delete 'subject-comment' key
    if 'careerarea-Comment' in data:
        data['careerarea'] = data['careerarea-Comment']
        del data['careerarea-Comment']  # Delete 'subject-comment' key
    if 'company-Comment' in data:
        data['subject'] = data['company-Comment']
        del data['company-Comment']  # Delete 'subject-comment' key

   
    data['operating'] = change_skill_to_range(data['operating'])
    data['algorithm'] = change_skill_to_range(data['algorithm'])
    data['programming'] = change_skill_to_range(data['programming'])
    data['software'] = change_skill_to_range(data['software'])
    data['network'] = change_skill_to_range(data['network'])
    data['architecture'] = change_skill_to_range(data['architecture'])
    data['mathematics'] = change_skill_to_range(data['mathematics'])
    data['coding'] = change_skill_to_range(data['coding'])
    data['logical'] = change_skill_to_range(data['logical'])
    data['communication'] = change_skill_to_range(data['communication'])
    data['publicspeak'] = change_skill_to_range(data['publicspeak'])
    data['selflearning'] = change_boolen_to_format(data['selflearning'])
    data['teamwork'] = change_boolen_to_format(data['teamwork'])
    data['introvert'] = change_boolen_to_format(data['introvert'])
    data['subject'] = change_categorical_to_lower(data['subject'])
    data['careerarea'] = change_categorical_to_lower(data['careerarea'])
    data['company'] = change_categorical_to_lower(data['company'])

    actual = pd.DataFrame([data], columns = ['operating', 'algorithm', 'programming', 'software', 'network',
       'architecture', 'mathematics', 'coding', 'logical', 'communication','publicspeak', 'selflearning',
       'teamwork', 'gentle','management', 'hardworker', 'introvert', 'subject','careerarea',
       'workhour', 'salary', 'company', 'role'])
    actual['role'] = ""

    response_data = model_build(actual)
    return response_data

if __name__ == '__main__': 
    app.run(host='localhost', port=8000)