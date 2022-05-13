// Fetch data from json file
fetch("./listen_history.json")
  // handle success
  .then((response) => {
    return response.json(); // convert to JSON
  })
  .then((jsonData) => {
    appendData(jsonData); // appendData will be a function to render data
    console.log(jsonData); // print data to the console
  });

// Function to render data
function appendData(jsonData) {
  // loop through data and find titles
  for (let i = 0; i < jsonData.length; i++) {
    let title = jsonData[i].title;
    console.log(title);
    // append data
    const mainContainer = document.getElementById("data");
    const li = document.createElement("li");
    li.innerHTML = `TITLE: ${title}`;
    mainContainer.append(li);
  }
}

// Function to count occurances

// Function to sort the occurances

// Render the top 10 to the DOM
