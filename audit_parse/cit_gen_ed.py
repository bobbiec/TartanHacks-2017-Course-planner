import re
import requests


cit = {
        "ppc":"https://engineering.cmu.edu/current_students/services/general_education_requirements/general_education_2016/people_places_cultures.html",
        "sdm":"https://engineering.cmu.edu/current_students/services/general_education_requirements/general_education_2016/social_decision_making.html",
        "i&i":"https://engineering.cmu.edu/current_students/services/general_education_requirements/general_education_2016/innovation_internationalization.html",
        "w&e":"https://engineering.cmu.edu/current_students/services/general_education_requirements/general_education_2016/writing_expression.html"
       }

def getCourses():
    for category in cit:
        print("Getting %s..." % category.upper(), end=" ")
        r = requests.get(cit["ppc"])
        matches = re.findall(r"\d\d-\d\d\d", r.text)
        with open("cit_%s.csv" % category, "w") as f:
            f.write(",".join(matches))
        print("Done.")

if __name__ == "__main__":
    getCourses()