# Word ID Generator

[summary]::
Generates an ID as a combination of two words.

## Usage
```js
const generate = require('word-id')

generate()
  .then((id) => {
    console.log(id)
  })
  .catch(console.warn)

generate('seed data') // Fed into Buffer.from([String])
  .then((id) => {
    console.log(id)
  })
  .catch(console.warn)
```

## Words
The seed words have been picked from the set found at https://github.com/dwyl/english-words.
