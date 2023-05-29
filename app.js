let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

//.split() turns a string of words into an array
let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

//console.log(storyWords);

//counts the number of words in the story
let count = 0;
storyWords.forEach((word) => {
  return count++;
});

//console.log(`The original word count is ${count}`);

//filters the story for the word "literally" and counts the words again
storyWords = story.split(" ").filter((word) => {
  return word !== unnecessaryWord;
});

/*let count2 = 0
storyWords.forEach(word => {
  return count2++;
});
console.log(`The new word count is ${count2}`)*/

//checks the story words for incorrect words
//NOTE checking with story uses original text with unnecessaryWord still included!
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});

//checks the story words for bad words, logs the position, then changes the word
let badWordIndex = storyWords.findIndex((word) => {
  if (word === badWord) {
    return word;
  }
});
//console.log(badWordIndex)
storyWords[badWordIndex] = "really";

//checks the story for words 10 chars or less. Returns true if function criteria is met
let lengthCheck = storyWords.every((word) => {
  return word <= 10;
});
//console.log(lengthCheck);

//checks the story for the word longer than 10 chars and replaces it
let longWord = storyWords.filter((word) => {
  return word.length > 10;
});
console.log(longWord);

//this was the stupidest part omg
let longWordIndex = storyWords.indexOf("breathtaking");
console.log(longWordIndex);
storyWords[longWordIndex] = "stunning";

console.log(storyWords.join(" "));