from datapreprocessing import *
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd

def model_build(actual_data):
    original_data = actual_data
    beforePreprocessData = load_csv("./dataset/updated_dataset.csv")
    result_df = pd.concat([beforePreprocessData, actual_data], ignore_index=True)
    df = dataPreprocess(result_df)
   #  print(df)
   
    actual_data = df.iloc[-1]
    df = df.drop(df.index[-1])
    actual_data = actual_data.drop('role')
    actual_data = actual_data.drop('subject')
    actual_data = actual_data.drop('careerarea')
    actual_data = actual_data.drop('company')

   #  print(actual_data)
   #  actual_data = actual_data[['operating', 'algorithm', 'programming', 'software', 'network',
   #     'architecture', 'mathematics', 'coding', 'logical', 'communication',
   #     'publicspeak', 'selflearning', 'teamwork', 'introvert',
   #     'subject_code', 'careerarea_code', 'workhour','company_code']
   #  ]
    feed = df[['operating', 'algorithm', 'programming', 'software', 'network',
       'architecture', 'mathematics', 'coding', 'logical', 'communication',
       'publicspeak', 'selflearning', 'teamwork', 'introvert', 'gentle', 'management','salary','hardworker',
       'subject_code', 'careerarea_code', 'workhour','company_code', 'role']
    ]
    # feed = df[['operating', 'algorithm', 'programming', 'software', 'network','role']]
    
    # Taking all independent variable columns
    df_train_x = feed.drop('role',axis = 1)
    # Target variable column
    df_train_y = feed['role']
    
    # x_train, x_test, y_train, y_test = train_test_split(df_train_x, df_train_y, test_size=0.20, random_state=42)
    x_train, x_test, y_train, y_test = train_test_split(df_train_x, df_train_y, test_size = 0.3)

    knn = KNeighborsClassifier(n_neighbors=5)

    knn.fit(x_train, y_train)
    # print(x_test.iloc[[0]])
    # data = [[73,81,84,93,45,67,89,90]]
    # Assuming 'data' is a dictionary containing your data
    # print(df_train_x.columns)
    actual_data = actual_data[['operating', 'algorithm', 'programming', 'software', 'network',
       'architecture', 'mathematics', 'coding', 'logical', 'communication',
       'publicspeak', 'selflearning', 'teamwork', 'introvert', 'gentle', 'management','salary','hardworker',
       'subject_code', 'careerarea_code', 'workhour','company_code']
    ]
   #  print("After Process",actual_data)
    if isinstance(actual_data, pd.Series):
      actual_data = pd.DataFrame([actual_data], columns=actual_data.index)
   #  print("After change",actual_data)

    y_pred = knn.predict(actual_data)
    y_pred = y_pred[0] if len(y_pred) > 0 else []
   #  original_data = pd.DataFrame([original_data], columns = ['operating', 'algorithm', 'programming', 'software', 'network',
   #     'architecture', 'mathematics', 'coding', 'logical', 'communication',
   #     'publicspeak', 'selflearning', 'teamwork', 'introvert','gentle', 'management','salary','hardworker',
   #     'subject', 'careerarea', 'workhour','company'])
   #  original_data = original_data[0].to_json(orient='records')
    original_data_dict= original_data.to_dict(orient='records')
    original_data = original_data_dict[0]
   #  original_data = json.dumps(original_data, ensure_ascii=False)
    print(original_data)

    json_data = {
    "original_data": original_data,
    "y_pred": y_pred
   }

   # Return JSON data as a string
    print(json_data)
   #  print(y_pred)

    return json_data
   #  return "Application Developer"
