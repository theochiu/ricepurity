import constants

QUESTIONS = constants.QUESTIONS
WEIGHTS = constants.WEIGHTS
MAX = constants.MAX

score = 0

print("Welcome to rice purity 2.0. Answer y for yes and n for no")
for i in range(len(QUESTIONS)):
	response = raw_input(QUESTIONS[i] + "\n\t")
	# input validation loop
	while response.lower() != "y" and response.lower() != "n":
		response = raw_input(QUESTIONS[i] + "\n\t")
	if response.lower() == "y":
		score += WEIGHTS[QUESTIONS[i]]

score = 100 - score / float(MAX) * 100 

print("\n\n")
print("Your final score is " + str(score))