
#extra info that might be helpful in making the recommendations

import json
from tkinter import *

stuff = open("file.json").read()  #this is the file with the data
data = json.loads(stuff)

    
a = data["courses"]["15-112"]
b = data["courses"]["15-122"]
c = data["courses"]["24-262"]


def Conflict(course1, course2):
    conflict = True
    if course1 == course2: return False
    for day in (course1['lectures'][0]["times"][0]['days']):
        if day in course2['lectures'][0]["times"][0]['days']:
            start1 = int(course1['lectures'][0]["times"][0]['begin'][:2])
            end1 = int(course1['lectures'][0]["times"][0]['end'][:2])
            start2 = int(course2['lectures'][0]["times"][0]['end'][:2])
            end2 = int(course2['lectures'][0]["times"][0]['end'][:2])
            if (start1 > start2 and start1 < end2) or  \
               (start1 < start2 and start2 < end1):
                conflict = True
        else:
            conflict = False
    return conflict

            #FOR WHEN COURSES ARE AT SAME TIME OR SOMETHING
'''
for course in courses:
    for other_course in courses:
        if Conflict(course, other_course):
            break #do something here
'''

def time_constraint(courses, Times):    #give a range of times for schedule
    print(courses["lectures"][0]['times'][0]['begin'][:2])
    return int(courses["lectures"][0]['times'][0]['begin'][:2]) < Times[0] or \
           int(courses['lectures'][0]['times'][0]['end'][:2]) >= Times[1] 


def init(data):
    data.rows = 10
    data.cols = 10
    data.margin = 5

def drawBlock(canvas, cx, cy, cy2, x):
    canvas.create_rectangle(cx, cy, cx+100, cy2, fill = 'red', width = 1)
    canvas.create_text(cx+40, cy+50, text = str(x))


def schedule(canvas, courses):
    for course in courses:
        days = course['lectures'][0]['times'][0]['days']
        start = int(course["lectures"][0]['times'][0]['begin'][:2])
        end = int(course["lectures"][0]['times'][0]['end'][:2])
        x = course['name']
        for day in days:
            drawBlock(canvas, (day-1)*100, ((start-9)%12)*100, \
                      ((end-9)%12)*100, x)
    return


def mousePressed(event, data):
    pass
def keyPressed(even, data):
    pass
def timerFired(data):
    pass

def redrawAll(canvas, data):
    schedule(canvas, [a, b, c])



def run(width=300, height=300):

    def redrawAllWrapper(canvas, data):
        canvas.delete(ALL)
        redrawAll(canvas, data)
        canvas.update()    

    def mousePressedWrapper(event, canvas, data):
        mousePressed(event, data)
        redrawAllWrapper(canvas, data)

    def keyPressedWrapper(event, canvas, data):
        keyPressed(event, data)
        redrawAllWrapper(canvas, data)

    def timerFiredWrapper(canvas, data):
        timerFired(data)
        redrawAllWrapper(canvas, data)
        # pause, then call timerFired again
        canvas.after(data.timerDelay, timerFiredWrapper, canvas, data)
    # Set up data and call init
    class Struct(object): pass
    data = Struct()
    data.width = width
    data.height = height
    data.timerDelay = 100 # milliseconds
    init(data)
    # create the root and the canvas
    root = Tk()
    canvas = Canvas(root, width=data.width, height=data.height)
    canvas.pack()
    # set up events
    root.bind("<Button-1>", lambda event:
                            mousePressedWrapper(event, canvas, data))
    root.bind("<Key>", lambda event:
                            keyPressedWrapper(event, canvas, data))
    timerFiredWrapper(canvas, data)
    # and launch the app
    root.mainloop()  # blocks until window is closed
    print("bye!")
    
    
run(500, 800)    
