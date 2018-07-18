import constants

QUESTIONS = constants.QUESTIONS
# sum of weights of questions answered "no"
points = 0
# sum of weights of all questions
max = 0

print("Welcome to rice purity 2.0. Answer y for yes and n for no.")
for question, weight in QUESTIONS.iteritems():
	response = ""
	# ask until a valid response is given
	while response[0].lower() in ["y", "n"]:
		response = raw_input(question + "\n\t")
	# if "n", purity increases
	if response[0].lower() == "n":
		points += weight
	# maximum increases no matter what
	max += weight

score = points * 100 / max
print("\n\n")
print("Your final score is " + str(score))
