const { pronouns, numbers, tenses, voices, moods, cases, genders, degrees } = require('./constants.js')

const tenseVoiceMood = ({t,v,m}) => {
	return {
		"tense": tenses[t],
		"voice": voices[v],
		"mood": moods[m]
	}
}
const personNumber = ({p,n}) => {
	return {
		"person": p,
		"number": numbers[n]
	}
}

const caseNumberGender = ({c,n,g}) => {
	return {
		"case": cases[c],
		"number": numbers[n],
		"gender": genders[g]
	}
}

const cngObjectFromString = (cng_string) => {
	return {
		c: cng_string[0],
		n: cng_string[1],
		g: cng_string[2]
	}
}
const tvmObjectFromString = (tvmx_string) => {
	return {
		t: tvmx_string[0],
		v: tvmx_string[1],
		m: tvmx_string[2]
	}
}
const pnObjectFromString = (xxxpn_string) => {
	return {
		p: xxxpn_string[3],
		n: xxxpn_string[4]
	}
}


const ParseCodeToObject = (code_string) => {
	const part_of_speech = code_string.indexOf(" ") > -1 ? code_string.substr(0, code_string.indexOf(" ")) : code_string
	const parse_code = code_string.substr(code_string.indexOf(" ") + 1)

	const return_object = {}
	switch (part_of_speech[0]) {
		case "N": /* NOUN */
			return_object.part_of_speech = "noun"
			if (part_of_speech[1])
				return_object.declension = part_of_speech[1]
			else
				return_object.declension = "indeclinable proper"
			Object.assign(return_object, caseNumberGender(cngObjectFromString(parse_code)))
			break

		case "R": /* PRONOUN */
			return_object.part_of_speech = pronouns[part_of_speech[1]]
			Object.assign(return_object, caseNumberGender(cngObjectFromString(parse_code)))
			break

		case "A":
			return_object.part_of_speech= "adj"
			Object.assign(return_object, caseNumberGender(cngObjectFromString(parse_code)))
			if (parse_code[3]) {
				return_object.degree = degrees[parse_code[3]]
			}
			break

		case "C":
		case "X":
		case "I":
		case "M":
		case "P":
		case "D":
			const unmorphed_parts_of_speech = {
				"C": "conj",
				"X": "part",
				"I": "intj",
				"M": "indc", //indeclinable number
				"P": "prep",
				"D": "adv"
			}
			return_object.part_of_speech = unmorphed_parts_of_speech[part_of_speech]
			break

		case "V":
			return_object.part_of_speech = "verb"
			Object.assign(return_object, tenseVoiceMood(tvmObjectFromString(parse_code)))
			if (return_object.mood === 'ptcp') {
				Object.assign(return_object, caseNumberGender(cngObjectFromString(parse_code.substr(3))))
			}
			else {
				Object.assign(return_object, personNumber(pnObjectFromString(parse_code)))
			}
			break

		default:
			console.log("not ready:", code_string)
	}
	return return_object
}

module.exports.ParseCodeToObject = ParseCodeToObject
