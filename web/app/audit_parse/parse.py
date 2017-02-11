import os
import re
import json

full_path = os.path.realpath(__file__)
path = os.path.dirname(full_path)

# Read CIT general ed lists from file
cit = {"ppc":"","sdm":"", "i&i":"", "w&e":""}
for category in cit:
    with open(path + os.sep + "cit_%s.csv" % category) as f:
        cit[category] = f.read().split(",")

# Hardcoded list of requirements
meche = {
'Interp and Argument': ['76-101'],
'Writing and Expression': cit["w&e"],
'Diff/Integral Calculus': ['21-120'],
'Fund. of M.E.': ['24-101'],
'Physics I': ['33-106', '33-141', '33-151'],
'Computing @ Carnegie Mellon': ['99-101'],
'FY General Education Course': ["Check the CIT website for details"], # To be finished
'Diff Eq and Calc of Approx': ['21-260'],
'Physics II': ['33-107', '33-142', '33-152'],
'Intro. Engineering Elective': ['06-100', '12-100', '18-100', '27-100', '19-101', '42-101'],
'Innovation and International': cit["i&i"],
'Modern Chemistry I': ['09-105'],
'Chemistry Lab': ['09-101', '03-124', '33-100', '33-104', '42-203'],
'Calculus in 3D': ['21-259'],
'Thermodynamics I': ['24-221'],
'Statics': ['24-261'],
'Programming': ['15-110', '15-112'],
'Differential Equations': ['21-260'],
'Fluid Mechanics': ['24-231'],
'Stress Analysis': ['24-262'],
'Machine Shop Pract': ['24-200'],
'Intro to CAD': ['24-202'],
'Seminar I': ['24-302'],
'Design I': ['24-370'],
'Heat Transfer': ['24-322'],
'Dynamics': ['24-351'],
'Eng Stats and Qual. Control': ['36-220'],
'Numerical Methods': ['24-321'],
'Thermal - Fluids Exp.': ['24-321'],
'Dyn. Systems & Control': ['24-352'],
'Design II': ['24-441'],
'Mechanical Systems Exp.': ['24-452'],
'MechE Technical Elective': ['24-341', '24-650', '24-651', '24-674', '24-681', '24-683', '24-688', '24-354', '24-355', '24-451', '24-655', '24-657', '24-421', '24-424', '24-425', '24-615', '24-623', '24-642'],
'People Places and Cultures': cit["ppc"],
'Soc Analysis and Dec Making': cit["sdm"],
'Gen Ed Electives': ["Check the CIT website for details"], # To be finished
'Experiential Learning I': ['39-210'],
'Experiential Learning II': ['39-220'],
'Experiential Learning III': ['39-310'],
'Elective 1':"",
'Elective 2':"",
'Elective 3':"",
'Elective 4':"",
'Free Electives':""
}

audit = """-------------------------------------------------------------
 1. Interp and Argument         : 76-101 Spring '16 A     9.0    
 2. Writing and Expression      :9.00 unfilled Units
 3. Diff/Integral Calculus      : 21-120 Fall   '14 AP   10.0    
 4. Fund. of M.E.               :1 unfilled course
 5. Physics I                   : 33-111 Fall   '15 AP   12.0    
 6. Computing @ Carnegie Mellon : 99-101 Fall   '15 P     3.0    
--------------------------------------------------------------
 7. FY General Education Course : 73-100 Spring '16 A     9.0    
 8. Diff Eq and Calc of Approx  : 21-122 Fall   '14 AP   10.0    
 9. Physics II                  : 33-112 Fall   '15 AP   12.0    
10. Intro. Engineering Elective :1 unfilled course
--------------------------------------------------------------
11. Innovation and International:9.00 unfilled Units
12. Modern Chemistry I          : 09-105 Fall   '14 AP   10.0    
13. Chemistry Lab               :1 unfilled course
14. Calculus in 3D              :1 unfilled course
15. Thermodynamics I            :1 unfilled course
16. Statics                     :1 unfilled course
--------------------------------------------------------------
17. Programming                 : 15-112 Fall   '12 AP   12.0    
18. Differential Equations      :1 unfilled course
19. Fluid Mechanics             :1 unfilled course
20. Stress Analysis             :1 unfilled course
21. Machine Shop Pract          :1 unfilled course
22. Intro to CAD                :1 unfilled course
--------------------------------------------------------------
23. Seminar I                   :1 unfilled course
24. Design I                    :1 unfilled course
25. Heat Transfer               :1 unfilled course
26. Dynamics                    :1 unfilled course
27. Eng Stats and Qual. Control :1 unfilled course
-------------------------------------------------------------
28. Numerical Methods           :1 unfilled course
29. Thermal - Fluids Exp.       :1 unfilled course
30. Dyn. Systems & Control      :1 unfilled course
--------------------------------------------------------------
31. Design II                   :1 unfilled course
32. Mechanical Systems Exp.     :1 unfilled course
33. MechE Technical Elective    :1 unfilled course
---------------------------------------------------------------
34. People Places and Cultures  : 82-231 Fall   '12 AP   12.0    
35. Soc Analysis and Dec Making :9.00 unfilled Units
36. Gen Ed Electives            : 76-012 Fall   '14 AP    9.0    
                                  79-211 Fall   '15 A     9.0    
37. Experiential Learning I     :1 unfilled course
38. Experiential Learning II    :1 unfilled course
39. Experiential Learning III   :1 unfilled course
40. Elective 1                  : 15-122 Fall   '15 A    10.0    
41. Elective 2                  : 15-150 Spring '16 A    10.0    
42. Elective 3                  : 15-210 Fall   '16 A    12.0    
43. Elective 4                  : 15-213 Fall   '16 A    12.0    
44. Free Electives              : 15-251 Spring '16 A    12.0    
NOTE: GenEd requirements (1,2,7,11,34-36) must be satisfied
by completing 8 courses of at least 9 units each. Mini courses
of fewer than 9 units may be combined to equal 9 unit courses,
but excess units from courses greater than 9 units may not
be used to satisfy these or other requirements.
"""

def parseAudit(audit):
    matches = re.findall(r"\d\d-\d\d\d", audit)

    jsonOutput = {"finished": matches, 
                  "unfinished": []}

    humanOutput = """You have taken:
    \t%s

    Unfinished requirements:
    """ % ", ".join(matches)

    for line in audit.split("\n"):
        if line.find("unfilled") != -1:
            start = line.find(".") + 1
            end = line.find(":")
            reqname = line[start:end].strip()

            reqObject = {reqname: meche[reqname]}
            jsonOutput["unfinished"].append(reqObject)

            humanOutput += "\t" + reqname + "\n"
            humanOutput += "\t\t" + str(meche[reqname]) + "\n"

    return jsonOutput, humanOutput

if __name__ == "__main__":
    jsonOutput, humanOutput = parseAudit(audit)
    with open("output_audit.txt", "w") as f:
        f.write(humanOutput)
    with open("output_audit.json", "w") as f:
        json.dump(jsonOutput, f)

