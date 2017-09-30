const pronouns = {
	"A": "Article",
	"D": "Demonstrative Pronoun",
	"I": "Interrogative/Indefinite Pronoun",
	"P": "Personal/Possessive Pronoun",
	"R": "Relative Pronoun",
	"X": "ὅστις"
}

// Used by both noun and verb-like words
const numbers = {
	"S": "sg", "D": "dual", "P": "pl"
}

// All verbs
const tenses = {
	"P": "pres",
	"I": "impf",
	"F": "fut",
	"A": "aor",
	"X": "perf",
	"Y": "plupf"
}
const voices = {
	"A": "act",
	"M": "mid",
	"P": "pass"
}
const moods = {
	"I": "ind",
	"D": "impv",
	"S": "subj",
	"O": "opt",
	"N": "infn",
	"P": "ptcp"
}


// All noun-ish words
const cases = {
	"N": "nom", "G": "gen", "D": "dat", "A": "acc", "V": "voc"
}
const genders = {
	"M": "masc", "F": "fem", "N": "neut"
}

// For irregular adjectives
const degrees = {
	"C": "comp",
	"S": "super"
}

module.exports = {
	pronouns,
	numbers,
	tenses,
	voices,
	moods,
	cases,
	genders,
	degrees
}