# WEB API Challenge: Code Quiz

## WEB APIs Assignment Module 4
This challenge requires us to create a quiz based upon the acceptance criteria provided below <br />
![Alt text](/assets/images/image.png)<br />

We are not given a starter code for this assignment so we had to create the HTML,CSS, and JaVaScript from the start <br />
My first course of action was to create my questions since that would have been the easiest part <br />
![Alt text](/assets/images/quiz%20questions.PNG) <br />

Based on the Acceptance Criteria I then worked on the next functions; <br />
### Starting the Quiz
![Alt text](/assets/images/start%20quiz.PNG) <br />
When the start button is clicked it will run the function `nextQuestion()` and the timer countdown <br />
Also a function for an incorrect answer penalty is added that subtracts 5 seconds to the countdown <br />
### Showing the Questions
![Alt text](/assets/images/nextQuestion.PNG) <br />
Here i learned to take the questions created in the array and call it in the function and make sure it replaces the text inside the question element that is called in the HTML <br />
<br />
I also learned from youtube (which is refered below in the references) how to replace the answer elements by creating a button for each correct answer that is also defined 
in the array using booleans. <br />

### Answers
![Alt text](/assets/images/picking%20answer.PNG)<br />
Next thing that I learned is replacing each elements within the dataset. I learned and follow a quiz on youtube. I learned to create the if statement that if the selected answer is true then the score increments and if it is false the function above `incorrectAnswer();` will run and subtract 5 seconds. <br />
<br />
<br />

### Tally Score
![Alt text](/assets/images/tally%20score.PNG) <br />
Once the questions have all been answered, or the timer runs out then the score will tally in this function where `finalScore.textContent = score` will write out the final score in the span textContent. 

### User Name and Score 
![Alt text](/assets/images/local%20storage.PNG) <br />
Using lesson 26 in our class i was able to save the input of the user and the score in the local storage. <br />
Although i have a minor issue with this that the user input is saving but not the totaled score. I may be missing something there. Will run to office hours if anything.
<br />
<br />
<br />

## References 
Here are references i used to study that are mostly on youtube. <br />
https://www.youtube.com/watch?v=PBcqGxrr9g8 <br />
https://www.youtube.com/watch?v=riDzcEQbX6k <br />
Although their format is different, i was able to adjust mine acorrdingly <br />
i.e. <br />
I did not include a next button or a play again button since they are not part of the acceptance criteria. <br />
I also did not include any CSS if user got it correct or wrong which the videos did. I only created a notification at the bottom of the screen to let the user know if they were correct or wrong. 

### Future plan for this project 
I realized that there were alot of things that I wanted to include but since I am pressed for time, I had to just stick with the acceptance criteria. It would have been really nice to copy the mock up itself, but with my current skills and knowledge, it is still a bit too tough for me. Once, I've gathered more experience, i will come back and re-do this to fit the criterias that I personally want to see or add


## DEPLOYED SITE

