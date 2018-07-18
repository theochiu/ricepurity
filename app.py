import constants

QUESTIONS = constants.QUESTIONS
# sum of weights of questions answered 'no'
points = 0
# sum of weights of all questions
max = 0

print('Welcome to rice purity 2.0. Answer y for yes and n for no.')
for question, weight in QUESTIONS.items():
	response = ''
	# ask until a valid response is given
	print(question)
	# rip do-while loops :(
	response = input()
	while not response.lower() in ['y', 'n']:
		print('Please respond either "y" or "n"')
		response = input()
	# if 'n', purity increases
	if response.lower() == 'n':
		points += weight
	# maximum increases no matter what
	max += weight

score = int(points * 100 / max)
print('\n\n')
print('Your final score is ' + str(score))
