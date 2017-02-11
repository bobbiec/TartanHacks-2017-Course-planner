import os

full_path = os.path.realpath(__file__)
path = os.path.dirname(full_path)

def makeSuggestion(firstCourse,secondCourse,thirdCourse):
	a = []

	userSet = {firstCourse, secondCourse, thirdCourse}
	takenCourses = {"15-112"}

	with open (path + os.sep + "new_data.txt") as f:
		for line in f:
			a.append(line.strip().split(" "))

	courseDict = dict()
	for i in range(len(a)):
		diffList = []
		diff = 0
		if not a[i][0] in userSet:
			diffList.append(a[i][0])

		if not a[i][1] in userSet:
			diffList.append(a[i][1])


		if not a[i][2] in userSet:
			diffList.append(a[i][2])

		if len(diffList) == 3:
			for item in diffList:
				if (item not in takenCourses):
					courseDict[item] = courseDict.setdefault(item, 0.0) + .0000001
		elif len(diffList) == 2:
			for item in diffList:
				if (item not in takenCourses):
					courseDict[item] = courseDict.setdefault(item, 0.0) + .003
		elif len(diffList) == 1:
			for item in diffList:
				if (item not in takenCourses):
					courseDict[item] = courseDict.setdefault(item, 0.0) + 4

	ret = sorted(courseDict,key = courseDict.get,reverse=True)

	with open (path + os.sep + "new_data.txt", "a") as f:
		f.write("\n" + firstCourse + " " + secondCourse + " " + thirdCourse )

	return ret






