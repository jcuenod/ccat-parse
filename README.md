# lxxparse
Takes CCAT morph codes and turns them into something meaningful. (cf. https://github.com/jcuenod/lxxproject)

## Usage

```javascript
const { ParseCodeToObject } = require('./lxxparse/ParseCodeToObject.js')
ParseCodeToObject("VAI AAI3P")

//output:
{ part_of_speech: 'verb',
  tense: 'aor',
  voice: 'act',
  mood: 'ind',
  person: '3',
  number: 'pl' }
```

## Try it out:

`testParse.js` has a bunch of sample CCAT morph codes. This project should handle everything CCAT has - this was a random sample I just grabbed to make sure I had my bases covered.

    node testParse.js
