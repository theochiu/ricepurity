// questions and weights
let questions = ["Held hands romantically?", "Been on a date?", "Been in a relationship?", "Danced without leaving room for Jesus?", "Kissed a non-family member?", "Kissed a non-family member on the lips?", "French kissed?", "French kissed in public?", "Kissed on the neck?", "Kissed horizontally?", "Given or received a hickey?", "Kissed or been kissed on the breast?", "Kissed someone below the belt?", "Kissed for more than two hours consecutively?", "Played a game involving stripping?", "Seen or been seen by another person in a sensual context?", "Masturbated?", "Masturbated to a picture or video?", "Masturbated while someone else was in the room?", "Been caught masturbating?", "Masturbated with an inanimate object?", "Seen or read pornographic material?", "Massaged or been massaged sensually?", "Gone through the motions of intercourse while fully dressed?", "Undressed or been undressed by a MPS (member of the preferred sex)?", "Showered with a MPS?", "Fondled or had your butt cheeks fondled?", "Fondled or had your breasts fondled?", "Fondled or had your genitals fondled?", "?", "Had an orgasm due to someone else's manipulation?", "Sent a sexually explicit text or instant message?", "Sent or received sexually explicit photographs?", "Engaged in sexually explicit activity over video chat?", "Cheated on a significant other during a relationship?", "Purchased contraceptives?", "Engaged in fellatio?", "Engaged in cunnilingus?", "Ingested someone else's genital secretion?", "Used a sex toy with a partner?", "Spent the night with a MPS?", "Been walked in on while engaging in a sexual act?", "Kicked a roommate out to commit a sexual act?", "Ingested alcohol in a non-religious context?", "Played a drinking game?", "Been drunk?", "Faked sobriety to parents or teachers?", "Had severe memory loss due to alcohol?", "Used tobacco?", "Used marijuana?", "Used a drug stronger than marijuana?", "Used methamphetamine, crack cocaine, PCP, horse tranquilizers or heroin?", "Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?", "Been put on disciplinary probation or suspended?", "Urinated in public?", "Gone skinny-dipping?", "Gone streaking?", "Seen a stripper?", "Had the police called on you?", "Run from the police?", "Had the police question you?", "Had the police handcuff you?", "Been arrested?", "Been convicted of a crime?", "Been convicted of a felony?", "Committed an act of vandalism?", "Had sexual intercourse?", "Had sexual intercourse three or more times in one night?", "?", "Had sexual intercourse 10 or more times?", "Had sexual intercourse in four or more positions?", "Had sexual intercourse with a stranger or person you met within 24 hours?", "Had sexual intercourse in a motor vehicle?", "Had sexual intercourse outdoors?", "Had sexual intercourse in public?", "Had sexual intercourse in a swimming pool or hot tub?", "Had sexual intercourse in a bed not belonging to you or your partner?", "Had sexual intercourse while you or your partner's parents were in the same home?", "Had sexual intercourse with non-participating third party in the same room?", "Joined the mile high club?", " with a partner whom you were not in a relationship with?", "Traveled 100 or more miles for the primary purpose of sexual intercourse?", "Had sexual intercourse with a partner with a 3 or more year age difference?", "Had sexual intercourse with a virgin?", "Had sexual intercourse without a condom?", "Had a STI test due to reasonable suspicion?", "Had a STI?", "Had a threesome?", "Attended an orgy?", "Had two or more distinct acts of sexual intercourse with two or more people within 24 hours?", "Had sexual intercourse with five or more partners?", "Been photographed or filmed during sexual intercourse by yourself or others?", "Had period sex?", "Had anal sex?", "Had a pregnancy scare?", "Impregnated someone or been impregnated?", "Paid or been paid for a sexual act?", "Committed an act of voyeurism?", "Committed an act of incest?", "Engaged in bestiality?"];
let weights = [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.7, 1, 0.8, 1, 1, 2, 3, 2, 2, 3, 1, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5.5, 4.5, 2, 3, 4, 4.5, 6, 2.5, 3, 4, 20, 0.8, 1.5, 2, 3, 8, 8, 6, 10, 7, 15, 20, 24, 28, 20, 8, 16, 14, 20, 10, 15, 15, 15, 20, 15, 15, 23, 25, 25, 27, 35, 35, 15, 20, 35, 40, 25, 35, 35, 35, 40, 40, 30, 40, 40, 50, 30, 100, 100];

// testing values
// questions = ['q1?', 'q2?', 'q3?'],
// 	weights = [1, 1.5, 3];

// rice = unweighted
// ricePoints = total purity points earned
let ricePoints = 0,
	// total weighted purity points earned
	weightedPoints = 0,
	// maximum possible points for weighted score (counted up as questions are answered)
	weightedMax = 0,
	// i = number of current question
	// = -1 for info screen, so starting increases it to 0
	i = -1;

// calculate letter grade (including +/-) from percentage
function letter(score) {
	let result = 'letter failed';
	if (score >= 60) {
		result = ['D', 'C', 'B', 'A'][Math.floor(score / 10) - 6];
		if (score % 10 >= 7) {
			result += '+';
		} else if (score % 10 < 3) {
			result += '-';
		}
	} else {
		result = 'F';
	}
	return result;
}

// called to show next question of test
function nextQuestion() {
	i++;
	if (i < questions.length) {
		weightedMax += weights[i]
		document.getElementById('counter').innerHTML = (i + 1) + '/100';
		document.getElementById('question').innerHTML = questions[i];
	} else {
		end();
	}
}
// called when 'yes' button selected
function yes() {
	nextQuestion()
}
// called when 'no' button selected
function no() {
	weightedPoints += weights[i];
	ricePoints++;
	nextQuestion()
}

// called on 'begin' button click to start questions
function start() {
	document.getElementById('info').remove();
	document.getElementById('main').innerHTML =
		'<div id="prompt"><p id="counter">69/420</p><p id="question">r u a ' +
		'hoe?</p><div class="buttons"><button onclick="yes()" class="yes">Yes</button><' +
		'button onclick="no()" class="no">No</button></div></div>';
	nextQuestion();
}

// called after answering all questions to generate endscreenxxxxxxxxxxxxxxxxx
function end() {
	document.getElementById('prompt').remove();
	let weightedScore = Math.floor(weightedPoints / weightedMax * 100);
	document.getElementById('main').innerHTML =
		'<div id="end"><h1>Congratulations!</h1><p>Rice Purity Score: <stro' +
		'ng>' + ricePoints + '/100</strong> (' + letter(ricePoints) + ') </' +
		'p><p>Weighted Purity Score: <strong>' + weightedScore + '/100</str' +
		'ong> (' + letter(weightedScore) + ') </p></div>'
}
