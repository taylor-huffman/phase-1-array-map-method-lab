const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
    const wordsArrays = tutorials.map(word => word.split(' '))
    const titleCasedArrays = []
      for (const element of wordsArrays) {
        const word = (element.map (word => word.replace(word[0], word[0].toUpperCase())).join(" "))
        titleCasedArrays.push(word)
      }
      return titleCasedArrays;
    }