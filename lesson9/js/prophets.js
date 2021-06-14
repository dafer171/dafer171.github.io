const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let image = document.createElement("img");

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      card.appendChild(h2);

      h3.textContent =
        "Date of birth: " +
        prophets[i].birthdate +
        " Place of birth: " +
        prophets[i].birthplace;
      card.appendChild(h3);

      image.setAttribute("src", prophets[i].imageurl);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    }
    console.table(prophets);
  });
