# Grammar Checker: Higher Order Functions

![Screenshot of project](https://raw.githubusercontent.com/Zacharyjpeter/cc-grammarcheck/main/grammarCheckPhoto.png)

## Description
A story that helped me practice iterators and higher order functions.

## Challenges
Biggest challenge was lines 56-67. I needed to find the word longer than 10 characters and replace it. At first my return statement was wrong. I used "<" instead of ">". Then I had trouble replacing the word. I tried replacing it directly based on the string match. It didn't work and I later realized I could use .indexOf to get the index. Apparently you can only replace a word if you know the index not the word itself. It was an incredibly frustrating process, and then I find such a simple solution.

## Takeaways
Sometimes the solution is simple. How you find it is what matters. And so far I've never found the solution the same way twice. It requires persistent discovery.

Based on [Codecademy's JavaScript course](https://www.codecademy.com/learn/introduction-to-javascript).
