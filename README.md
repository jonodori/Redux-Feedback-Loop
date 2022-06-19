# Project Name

Redux Feedback Loop


## Description

_Duration: 2 Day Sprint_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it? 

I created a Feedback Form, so people can submit input on how they feel, understand, and if they feel supported. They can add additional comments if needed.  

I created an admin page, so that the instructor/teacher can see the feedback and use that data to gauge where a student/class is at or if they need to change something in the lecture or things being taught.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal, it should run on localhost:3000/

## Usage
How does someone use this application? Tell a user story here.

1. Move the Range slider from 1 - 10 for 'How are you feeling today?' and select the number how you're feeling. Then click the Next button. 
2. Move the Range slider from 1 - 10 for 'How well are you understanding the content?' and select the number on your understanding of the topic/lecture. Then click the Next button. 
3. Move the Range slider from 1 - 10 for 'How are you feeling supported?' and select the number how well you're feeling supported. Then click the Next button. 
4. This will bring you to the 'Comments' page. If you want to leave a comment you can or just click the Next button.
5. You will then be brought to a 'Review' page to review your Feedback. If you are sure of your Feedback, click on the Submit button. Once the Submit button is clicked, that Feedback should be posted on the 'Admin' page. 
6. Once you click on Submit button, it will bring you to the 'Thank You' page and you can click the Leave New Feedback button to leave new feedback. 


## Built With

Express 
NodeJS
JSX
React 
React-Redux
MaterialUI
Axios 


## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Also want to thank my instructor Edan and fellow cohort-mates from the Gaiman Cohort! 

## Support
If you have suggestions or issues, please email me at [jonopalalay@gmail.com](www.google.com)