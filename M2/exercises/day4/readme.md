# Some Info About The Team Task

## Introduction

In this task I used a **OOP** (Object Oriented Programming) approach define in my JS script a class **APP** with methods to define it's behavior and actions.

The way I did is explained at this links:
<https://alligator.io/js/js-singletons/>

The task was done in 2 versions to show 2 different ways of doing it.

## The Functions

In order to lad on page our functionalities we make the functions available after the document is load:

`$(document).ready(function() {}`

link: <https://www.w3schools.com/jquery/event_ready.asp>

We load as follow:

- Buttons and it's functionalities
- We call in the bottom of the script our initializer of the **init()** method

With **APP.init()** we are initializing our object and calling on same time the function:

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer>
- <https://stackoverflow.com/questions/7884081/what-is-the-use-of-the-init-usage-in-javascript>

Inside the **init** we declare our main functionality for the app.

As we need **players name** we have an empty array [] declared in the beginning `members[]` where we will push our player names into it.

The **this** in this context is a global referral to the obj and is executing the current script associated to it.

- <https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c>

I used `var self = this`as a method to not lost the **this** in the obj context. As **this** is a JS keywords and refers to current context of the obj and to not that context get lost and give us problems we store that in a `var`.

- <https://medium.com/@vijay.j.shekhawat/javascript-why-var-self-this-bbbaf98ab9d9>

As further down we have our clear section, and the values selector for the input of the **player** and **team**.

Then we have a **remove** functionality for the button to remove the players from the team list. We using **off**
to make sure the handlers of the event on button are disable is a way to prevent issues or errors.

- <https://api.jquery.com/off/>

On the **click** remove we trigger the button to remove our team player which is sent back to main list.

We have a **addTeam** button which creates a team from input field where we can add from 1 to many teams as we want.
There is validation for empty input and to accept only numbers with a **regex**.
As we use numbers we can add for example 1 team but we can add later 2 extra teams so in total we 3 teams.

On the **addMember** also we have validation for empty input.

The **assign** in **V1** assign a team player to a selected team by clicking the button and we are doing that randomly.

In **V2** we are not selecting the team but randomly assign a player to a team.

That the main difference between `V1 vs V2`.

We use **modals** to show the alert messages for validation and we call **showAlert** whenever a validation error occur.

## What Missing

- A better design
- A better handle for the team generator maybe with validation about how many players we have in proportion of the number of the teams
- A V2 validation also for the random to the team based on how many players we have and how many teams
