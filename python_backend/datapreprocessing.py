import pandas as pd
import numpy as np
import seaborn as sns
import random

def load_csv(filepath):
    return pd.read_csv(filepath)

def dataPreprocess(df) :

    # Binary Encoding for Categorical Variables
    cols = df[["selflearning", "teamwork", "introvert"]]
    for i in cols:
        cleanup_nums = {i: {"yes": 1, "no": 0}}
        df = df.replace(cleanup_nums)
   
    mycol = df[["gentle"]]
    for i in mycol:
        cleanup_nums = {i: {"gentle": 1, "stubborn": 0}}
        df = df.replace(cleanup_nums)

    mycol = df[["management"]]
    for i in mycol:
        cleanup_nums = {i: {"Management": 1, "Technical": 0}}
        df = df.replace(cleanup_nums)

    mycol = df[["hardworker"]]
    for i in mycol:
        cleanup_nums = {i: {"hard worker": 1, "smart worker": 0}}
        df = df.replace(cleanup_nums)

    mycol = df[["salary"]]
    for i in mycol:
        cleanup_nums = {i: {"salary": 1, "work": 0}}
        df = df.replace(cleanup_nums)

    category_cols = df[['subject', 'careerarea', 'company']]
    for i in category_cols:
        df[i] = df[i].str.lower()
        df[i] = df[i].astype('category')
        df[i + "_code"] = df[i].cat.codes
    return df


def change_skill_to_range(data):
    data = str(data) + str(random.randint(0,9))
    # print(data)
    return data

def change_boolen_to_format(data):
    if(data == True):
        return "yes"
    else:
        return "no"

def change_categorical_to_lower(data):
    return data.lower()

change_skill_to_range(1)