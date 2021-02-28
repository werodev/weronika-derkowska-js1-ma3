
// Question 2
// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultContainer = document.querySelector(".results")

async function getResults() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const games = await results.results;
        resultContainer.innerHTML = "";
        // Loop through the results and display the following properties in HTML, but only for the first eight results:
        // name
        // rating
        // number of tags (not the tag details, just the amount of tags)
        for (let i = 0; i < games.length; i++) {
            if (i === 8) {
                break;
            }
            resultContainer.innerHTML += `<div class="result">
                <p>Name: ${games[i].name}</p>
                <p>Rating: ${games[i].rating}</p>
                <p>Number of tags: ${games[i].tags.length}</p></div>`;
        }
    }
    catch (error) {
        console.log("An error occurred when calling the API:", error);
        resultContainer.innerHTML = "";
        resultContainer.innerHTML = alert("An error occurred when calling the API");
    }
}
getResults();

// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.
// You can use either regular promise or async/await syntax to make the call.
// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.


// Submission
// Create a repository in your GitHub account called your-name-js1-ma3, for example mary-smith-js1-ma3, and make sure it's public.
// Add your answer for question 1 in a file called question-1.js
// Add your answer for question 2 in a file called question-2.js
// Add, commit and push your files - both .js files and any .html and .css files you may create - to this repo.
// Submit the repo link.