<h1>Grammar Checker: Higher Order Functions</h1>
<h3>Description</h3>
A project that helped me practice various iterators.
<br>
//![Screenshot of project](cc-grammarcheck/grammarCheckPhoto.png)
<br>
<h3>Challenges</h3>
Biggest challenge was lines 56-67. I needed to find the word longer than 10 characters and replace it. At first my return statement was wrong. I used "<" instead of ">". Then I had trouble replacing the word. I tried replacing it directly based on the string match. It didn't work and I later realized I could use .indexOf to get the index. Apparently you can only replace a word if you know the index not the word itself. It was an incredibly frustrating process, and then I find such a simple solution.
<br>
<h3>Takeaways</h3>
Sometimes the solution is simple. How you find it is what matters. And so far I've never found the solution the same way twice. It requires persistent discovery.
<br>
<br>
Based on <a href="https://www.codecademy.com/learn/introduction-to-javascript">Codecademy's</a> beginner Javascript course.
