# ccat-parse

Takes CCAT morph codes and turns them into something meaningful. (cf. https://github.com/jcuenod/lxxproject). Now available as an npm package: <https://www.npmjs.com/package/ccat-parse>

## Usage

```javascript
const { ccatParse } = require('ccat-parse')
ccatParse("VAI AAI3P")

//output:
{ part_of_speech: 'verb',
  tense: 'aor',
  voice: 'act',
  mood: 'ind',
  person: '3',
  number: 'pl' }
```
