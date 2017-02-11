import os

full_path = os.path.realpath(__file__)
path = os.path.dirname(full_path)

def makeSuggestion(firstCourse,secondCourse,thirdCourse):
	a = []

	userSet = {firstCourse, secondCourse, thirdCourse}
	takenCourses = {"15-112"}

	with open (path + os.sep + "new_data.txt") as f:
		for line in f:
			if a != '': a.append(line.strip().split(" "))


	#print(a)
	courseDict = dict()
	for i in range(len(a)):
		diffList = []
		diff = 0
		if a[i][0] not in userSet:
			diffList.append(a[i][0])

		if a[i][1] not in userSet:
			diffList.append(a[i][1])

		if a[i][2] not in userSet:
			diffList.append(a[i][2])

		if len(diffList) == 3:
			for item in diffList:
				if (item not in takenCourses):
					courseDict[item] = courseDict.setdefault(item, 0.0) + .000001
		elif len(diffList) == 2:
			for item in diffList:
				if (item not in takenCourses):
					courseDict[item] = courseDict.setdefault(item, 0.0) + .3
		elif len(diffList) == 1:
			for item in diffList:
				if (item not in takenCourses):
					courseDict[item] = courseDict.setdefault(item, 0.0) + 1

	ret = sorted(courseDict,key = courseDict.get,reverse=True)

	with open (path + os.sep + "new_data.txt", "a") as f:
		f.write(firstCourse + " " + secondCourse + " " + thirdCourse + "\n")

	return ret[0]






