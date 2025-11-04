const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";
let cards = document.querySelector("div.cards");
let para = document.createElement("p");
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let business = jsObject.business;
    for (let i = 0; i < business.length; i++) {
      // console.log(business[i].name)
      // Need to include: Business name, Business image, Business locations, & business description.
      // Business name
      let card = document.createElement("section");
      card.className = "card";
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);
      // Business image
      let bi = document.createElement("img");
      bi.src = business[i].imageurl;
      bi.alt = business[i].name + "image";
      card.appendChild(bi);
      // Business locations
      let bl = document.createElement("p");
      bl.textContent = business[i].address;
      card.appendChild(bl);
      // Business description
      let bd = document.createElement("p");
      bd.textContent = business[i].description;
      card.appendChild(bd);
      // Adds Card to div tag. Do this last.
      document.querySelector("div.cards").appendChild(card);
    }
  });
