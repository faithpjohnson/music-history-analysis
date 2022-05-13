// Fetch data from json file
fetch("./listen_history.json")
  // handle success
  .then((response) => {
    return response.json(); // convert to JSON
  })
  .then((jsonData) => {
    // appendData(jsonData); // appendData will be a function to render data
    sortTitleCounts(jsonData);
    sortArtistCounts(jsonData);
    console.log(jsonData); // print data to the console
  });

function getArtistFromOccurrence(occurrence) {
  let artist = "Unknown";
  if (occurrence.subtitles) {
    artist = occurrence.subtitles[0].name;
  }
  return artist;
}

// Function to count occurances
function countTitleOccurrences(data) {
  let titleCounts = {};

  for (let i = 0; i < data.length; i++) {
    let title = data[i].title;

    if (titleCounts[title]) {
      titleCounts[title] += 1;
    } else {
      titleCounts[title] = 1;
    }
  }
  console.log(titleCounts);
  return titleCounts;
}

function countArtistOccurrences(data) {
  let artistCounts = {};

  for (let i = 0; i < data.length; i++) {
    let artist = getArtistFromOccurrence(data[i]);

    if (artistCounts[artist]) {
      artistCounts[artist] += 1;
    } else {
      artistCounts[artist] = 1;
    }
  }
  console.log(artistCounts);
  return artistCounts;
}

// Function to sort the occurances
function sortTitleCounts(jsonData) {
  let counts = countTitleOccurrences(jsonData);
  // sort counts
  let sortedCounts = Object.keys(counts).sort(function (a, b) {
    return counts[b] - counts[a];
  });
  // find top 10 using slice
  let top10 = sortedCounts.slice(0, 10);
  console.log(top10);
  // render top 10
  for (let i = 0; i < top10.length; i++) {
    const title = top10[i].replace("Watched", "TITLE:");
    const mainContainer = document.getElementById("data");
    const li = document.createElement("li");
    li.innerHTML = `${title}`;
    mainContainer.append(li);
  }
}

// Function to sort the occurances
function sortArtistCounts(jsonData) {
  let counts = countArtistOccurrences(jsonData);
  // sort counts
  let sortedCounts = Object.keys(counts).sort(function (a, b) {
    return counts[b] - counts[a];
  });
  // find top 10 using slice
  let top10 = sortedCounts.slice(0, 10);
  console.log(top10);
  // render top 10
  for (let i = 0; i < top10.length; i++) {
    const artist = top10[i].replace("- Topic", "");
    const mainContainer = document.getElementById("artist-data");
    const li = document.createElement("li");
    li.innerHTML = `ARTIST: ${artist}`;
    mainContainer.append(li);
  }
}
