def makeSuggestion(firstCourse,secondCourse,thirdCourse)
	a = []

	userSet = {firstCourse, secondCourse, thirdCourse}
	takenCourses = {"15-112"}

	with open ("data.txt") as f:
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
					courseDict[item] = courseDict.setdefault(item, 0.0) + .1
		elif len(diffList) == 2:
			for item in diffList:
				if (item not in takenCourses):
					courseDict[item] = courseDict.setdefault(item, 0.0) + .3
		elif len(diffList) == 1:
			for item in diffList:
				if (item not in takenCourses):
					courseDict[item] = courseDict.setdefault(item, 0.0) + 1

	ret = sorted(courseDict,key = courseDict.get,reverse=True)

	return ret[0]






