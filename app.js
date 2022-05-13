// Fetch data from json file
fetch("./listen_history.json")
  // handle success
  .then((response) => {
    return response.json(); // convert to JSON
  })
  .then((jsonData) => {
    // appendData(jsonData); // appendData will be a function to render data
    sortCounts(jsonData)
    console.log(jsonData); // print data to the console
  });

// // Function to render data
// function appendData(jsonData) {
//   // loop through data and find titles
//   for (let i = 0; i < jsonData.length; i++) {
//     let title = jsonData[i].title;
//     console.log(title);
//     // append data
//     const mainContainer = document.getElementById("data");
//     const li = document.createElement("li");
//     li.innerHTML = `TITLE: ${title}`;
//     mainContainer.append(li);
//   }
// }

// Function to count occurances
function countOccurrences(data) {
    let counts = {};
    for (let i = 0; i < data.length; i++) {
        let title = data[i].title;
        if (counts[title]) {
            counts[title] += 1;
        } else {
            counts[title] = 1;
        }
    }
    return counts;
}

// Function to sort the occurances
function sortCounts(jsonData) {
    let counts = countOccurrences(jsonData);
    // sort counts
    let sortedCounts = Object.keys(counts).sort(function (a, b) {
        return counts[b] - counts[a];
    })
    // find top 10 using slice
    let top10 = sortedCounts.slice(0, 10);
    console.log(top10)
    // render top 10
    for (let i = 0; i < top10.length; i++) {
        const title = top10[i].replace('Watched', 'TITLE:')
        const mainContainer = document.getElementById("data");
        const li = document.createElement("li");
        li.innerHTML = `${title}`;
        mainContainer.append(li);
    }
}



// Render the top 10 to the DOM
