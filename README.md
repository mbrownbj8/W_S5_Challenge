# Sprint 5 Challenge

## Introduction

Welcome to Sprint Challenge 5! Today, you'll practice using JavaScript to manipulate the DOM by 

fetching data from the network 
and 
building a section of a web page using "vanilla" JavaScript, without any frameworks.

Here's an overview of the tasks you need to complete:

1. **Obtain** JSON data from a web service.
1. **Combine** data obtained from different sources into a single data structure.
1. **Render** repeatable components to the DOM using the combined data.

To succeed in this challenge, you'll need the following technical skills:

1. **Promises** and the ability to deal with asynchronous code.
1. **Making HTTP requests** with Axios or fetch.
1. **Looping over data** to populate a new data structure.
1. **Manipulating DOM elements** to edit text, class names.
1. **Creating new elements** and attaching them to the DOM.

Additionally, the following soft skills will greatly impact your performance:

1. Attention to detail. Make sure there isn't a single character out of place!
1. Perseverance. Keep trying until you figure it out!
1. Patience. Make sure to read the entire README for important information.

## Instructions

On your first day as a junior web developer at a coding school, 
you have been assigned a ticket to complete. 
The task involves completing some code for the school's software platform.

Specifically, you need to fix a website that displays: 

a list of learners 

along with their basic information such as

ID, name, email, and a list of mentors.  

Users should be able to click on a learner to highlight it, 
and the list of mentors for each learner should be expandable and collapsible. 

You can refer to the 
[full mockup](https://w-s5-challenge.herokuapp.com/) for the design and behavior of the page.

Don't worry: most of the code is already done, 

you only need to **fix three areas of the code** which are incomplete, 
causing the website not to work correctly.

To help you complete the task, several members of your team will provide you with instructions and advice.

### 💾 DevOps Engineer

**Below, your DevOps expert will help you set up your local environment and launch the project.**

<details>
  <summary>Click to read</summary>

  ---

This is a **full-stack web application** that comprises both back-end and front-end components. If deployed to production, the back-end part would run in the cloud (think Amazon Web Services or Azure), while the front-end would execute inside the user's web browser (like Chrome for Android, or Firefox for desktop).

As a front-end engineer, your focus is mainly on: 

the files that load **on the user's device**. 

In this particular case, these files live inside the `frontend` folder. 

The `backend` folder contains a web server built in Node, 

but the project as a whole is managed as a Node application. 

As such, it contains a `package.json` file at the root, 
containing some meta-information like name and version, and a few useful scripts developers can use as they work on the app, like "npm test".

1. You will **clone this repository** to your computer, which will allow you to run the software locally for development and testing purposes.

1. You will navigate your terminal to the project folder **and execute `npm install`**. This will install the libraries declared inside `package.json`. Some of these packages are needed for the back-end to do its job of serving JSON data and front-end assets. Other libs help with things like testing and linting your code.

1. After successful installation you will run, in separate terminals, two of the scripts found inside `package.json`. To do this, **execute `npm start` in your first terminal, and `npm test` in your second**. On successful start, you will load the app in Chrome by **navigating the browser to `http://localhost:3003`**. The term "localhost" means "your machine", and the number is called a port, allowing multiple web servers to run on the same computer, with one server per port.

1. If you haven't already, install the [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode. It will highlight syntax errors and problems right inside your editor, which saves tons of time.

My job assisting you with local setup of the app is done! You will speak to our designer next.

  ---

</details>

### 🎨 Product Designer

**Below, you will find information on how to approach the task, from your Product Designer.**

<details>
  <summary>Click to read</summary>

  ---

Collaboration between a designer and a web developer can be very powerful. Designers excel at creating amazing user experiences and have a keen eye for beauty and usability, while developers are experts in the underlying technology of the product.

However, it's important to remember that **if a design for a feature exists, it's not a suggestion**. Your job as a web developer is to implement the design with as much fidelity as possible. While a developer might think they have a better way to arrange elements on the screen, the mocks and designs are the result of research and hard work. It's important to treat them with the respect they deserve.

It's crucial to use the readable texts designed for the user interface **verbatim**. If a design reads "Loading Doughnuts...", then "Loading _Your_ Doughnuts..." is incorrect. Attention to detail is critical!

There are other constraints and requirements that must be followed, such as sticking to certain class names or keeping the structure of the HTML a certain way **to avoid breaking the CSS**.

Fortunately, you have [a very detailed mock](https://w-s5-challenge.herokuapp.com/) that you can load in your browser and inspect in detail, which will make your job much easier. And don't worry, **you don't have to write any CSS** because it's already been taken care of!

  ---

</details>

### 🥷 Lead Developer

**Below, your Team Lead will discuss strategy and tactics for dealing with this ticket.**

<details>
  <summary>Click to read</summary>

  ---

Hey! Let's make sure you're up to speed with your **action items so far**. 

- [x] The app is installed on your machine, with both `start` and `test` scripts running in terminals.
- [x] You studied the [mock](https://w-s5-challenge.herokuapp.com/) in the Elements tab of Dev Tools. 
- [x] You saw how some text contents and some class names change as the user clicks around. <!-- 

Awesome! Our back-end engineer says that the JSON data needed to build the Learner Cards comes from two endpoints:

- Endpoint A [GET] <http://localhost:3003/api/learners> 
- Endpoint B [GET] <http://localhost:3003/api/mentors>

❗ You should stop now, and **try out both endpoints using Postman**, to see what they return. <!-- 

❗ Here's the tricky thing: each learner has a short list of mentors, but the response from Endpoint A only identifies the mentors by their ID numbers. This means you will need to match the mentor IDs from Endpoint A with the real names of the mentors, found in the response from Endpoint B.

❗ Only make changes to the [index.js](./frontend/index.js) file, and only in the areas marked TASK 1, TASK 2, TASK 3.

❗ Now open [index.js](./frontend/index.js) and find your tasks! Find a brief description of each task below.

Reach out if you get too stuck, and have fun!

**TASK 1:**

For fetching, just **await** the Axios request to Endpoint A, and then await the request to Endpoint B. (_Optionally_, you can use `Promise.all` to handle both requests. We do not need the data from request A in order to _start_ request B, so the requests can happen concurrently instead of back-to-back.)

**TASK 2:**

Once you have the data from Endpoints A and B stored inside variables called `learners` and `mentors`, check that this data matches what you saw in Postman, and then **use your JavaScript skills** to combine the two lists into a single data structure** called `learners` that is comfortable to work with. This data structure **must** look like this:

```js
// the variable holding the combined data must be called `learners`
[
  // etc
  {
    id: 22,
    email:"mickey.mouse@example.com",
    fullName: "Mickey Mouse",
    mentors: ['James Gosling', 'Mary Shaw'] // ❗ actual names instead of IDs!
  },
  // etc
]
```

**TASK 3:**

Once you have the data in the right shape, scroll down to TASK 3 and find the `card`, `heading`, `email`, `mentorsHeading`, `mentorsList` elements nice and ready to receive their initial text content and class names. Use **your DOM manipulation skills** to flesh out these DOM elements so that they match exactly what you see in the DOM of the mock site. Use the Elements tab of the browser to check the initial class names of the elements in the mock.

You will also need to loop over the mentor names, and create an `li` element for each of the mentors, and append it to its parent, the `ul` element. Once this is done correctly, your site should match the mock site exactly!

  ---

</details>

## FAQ

<details>
  <summary>How do I submit this task?</summary>

You submit via Codegrade. Check the assignment page on your learning platform.

</details>

<details>
  <summary>I am getting errors when I run npm install or npm start. What is going on?</summary>

This project requires Node correctly installed on your computer in order to work. Your learning materials should have covered installation of Node. Sometimes Node can be installed but mis-configured. You can try executing `npm run fixit` (check `package.json` to see what this does), but if Node errors are recurrent, it indicates something wrong with your machine or configuration, in which case you should request assistance from Staff.

</details>

<details>
  <summary>Do I need to install libraries or add scripts to the HTML?</summary>

No. Everything you need should be installed already, including Axios.

</details>

<details>
  <summary>Why am I not allowed to edit the CSS file?</summary>

The CSS is the domain of a different team, and in this particular project we're not supposed to touch it. Do not use inline styles to get around this limitation! It will only make the CSS team angry. And believe us, you want CSS specialists happy because they can write CSS twenty times faster than you.

</details>

<details>
  <summary>Why am I not allowed to edit the HTML file?</summary>

This particular part of the product is a Single Page Application, so the HTML is mostly empty and the page is generated automatically using JavaScript. We would not want to manually edit HTML files in a website that changed all the time! It would be untenable.

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Save your changes, and reload the site in Chrome. If you have a syntax problem in your code, the app will print error messages in the Console. Focus on the first message. Place console logs right before the crash site (errors usually inform of the line number where the problem is originating) and see if your variables contain the data you think they do. If there are no errors but the page is not doing what it's supposed to, the debugging technique is similar: put console logs to ensure that the code you are working on is actually executing, and to check that all variables in the area hold the correct data.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

Execute `npm test` in your terminal. These are the same tests that execute inside Codegrade. Although this never crossed your mind, tampering with the test file won't change your score, because Codegrade uses a pristine copy of the original test file, `mvp.test.js`. If a particular test is giving you grief, don't jump straight to the code to try and fix it. Go to Chrome first, and make sure you can replicate the problem there. A problem we can reliably replicate is a problem mostly fixed.

</details>

<details>
  <summary>I believe my code is correct and the test is wrong. What do I do?</summary>

On occasion the test runner will get stuck. Use CTRL-C to kill the tests, and then `npm test` to launch them again. Try to reproduce the problem the test is complaining about by interacting with the site in Chrome, and do not code "to make the test happy". Code so that **your app does exactly what the mock does**. The tests are there for confirmation. Although it's possible that a particular test be flawed, statistically it's more likely that the bug is in your own code. If the problem persists, please request assistance from Staff.

</details>

<details>
  <summary>The output of the test script is just too overwhelming! What can I do?</summary>

If you need to disable all tests except the one you are focusing on, edit the `mvp.test.js` file and, as an example, change `test('👉 focus on this', () => { etc })` to be `test.only('👉 focus on this', () => { etc })`. (Note the "only".) This won't affect Codegrade, because Codegrade runs its own version of the tests.

</details>

<details>
  <summary>Why can't endpoints provide the data in the correct shape from the get-go?</summary>

As web developers, we often don't have control over our sources of data, and it's common to have to combine JSON from various sources into a data structure that works for the front-end. Even if the endpoints were under our control, and the back-end team were willing to build a new endpoint or improve existing ones, bug fixes and features sometimes can't wait that long.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

**Do NOT delete your repository from GitHub!** Instead, commit _frequently_ as you work. Make a commit whenever you achieve _anything_ and the app isn't crashing in Chrome. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use `git reset --hard` to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well, but it is advised that you request assistance from Staff.

</details>

<details>
  <summary>Why are there so many files in this project?</summary>

Although a small, "old-fashioned" website might be made of just HTML, CSS and JS files, these days we mostly manage projects with Node and its package manager, NPM. Node apps typically have a `package.json` file and several other configuration files placed at the root of the project. This project also includes automated tests and a web server, which adds a little bit of extra complexity and files.

</details>

<details>
  <summary>Is this how web projects are normally organized?</summary>

Web projects can be organized in a million ways, there aren't many standards. Some developers like it like this, while others prefer to use opinionated frameworks, which do a lot of magic but prescribe that folders and files be structured and named just so.

</details>

<details>
  <summary>Why is my code inside index.js wrapped in an async function called "sprintChallenge5"?</summary>

This way we can easily import your code as a single function in the `mvp.test.js` test suite. The export syntax is at the bottom of `index.js`. The function declaration is prefixed by the `async` keyword to allow you to use `await` inside it.

</details>

<details>
  <summary>What are the package.json and package-lock.json files?</summary>

The `package.json` file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that are downloaded when you execute `npm install`. There can be some wiggle room to allow newer versions of the dependencies to be installed, so the `package-lock.json` file, when present, makes sure the exact same versions of everything are used every time the project is installed from scratch.

</details>

<details>
  <summary>What is the .eslintrc.js file?</summary>

This file works in combination with the Eslint extension for VSCode to highlight syntax errors and problems in your code. By editing this file you can customize your linting rules.

</details>

<details>
  <summary>What is Jest?</summary>

Jest is a framework that allows you to write tests and execute them, to alert you very quickly of problems with the code. Jest can do in seconds what an entire Quality Assurance team would take hours or even days. In the context of the Sprint Challenge, Jest is used to check your code against specification and give you a grade (% of tests passing).

</details>
