const requestURL =
  "https://dafer171.github.io/final-project/json/companydata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const company = jsonObject["company"];

    for (let i = 0; i < company.length; i = i + 2) {
      let container = document.createElement("div");
      container.setAttribute("class", "container");
      let card1 = document.createElement("section");
      card1.setAttribute("class", "text");
      let card2 = document.createElement("div");
      card2.setAttribute("class", "photos");
      let h2 = document.createElement("h2");
      let motto = document.createElement("p");
      let phoneNumber = document.createElement("h3");
      let web = document.createElement("h3");
      let photo = document.createElement("img");

      if (i == 4) {
        continue;
      }

      document.querySelector("div.cards").appendChild(container);

      h2.textContent = company[i].name;
      card1.appendChild(h2);

      motto.textContent = company[i].motto;
      card1.appendChild(motto);

      phoneNumber.textContent = "Phone number: " + company[i].phoneNumber;
      card1.appendChild(phoneNumber);

      web.textContent = "Web site: " + company[i].web;
      card1.appendChild(web);

      document.querySelector("div.cards").appendChild(card2);

      photo.setAttribute("src", company[i].photo);
      card2.appendChild(photo);

      photo.setAttribute("alt", company[i].name);
      card2.appendChild(photo);

      document.querySelector("div.cards").appendChild(card1);

      container.appendChild(card1);
      container.appendChild(card2);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const company = jsonObject["company"];
    const ferrerias = company[6];
    const events = ferrerias.events;
    //console.log(events);

    let container = document.createElement("div");
    container.setAttribute("class", "even_container");
    let card1 = document.createElement("section");
    card1.setAttribute("class", "text");
    let h2 = document.createElement("h2");
    h2.textContent = "Upcoming Events:";
    card1.appendChild(h2);

    for (let i = 0; i < events.length; i++) {
      let p1 = document.createElement("p");

      document.querySelector("div.events").appendChild(container);

      p1.textContent = ferrerias.events[i];
      card1.appendChild(p1);

      document.querySelector("div.events").appendChild(card1);

      container.appendChild(card1);
    }
  });
