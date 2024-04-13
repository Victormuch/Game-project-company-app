// Define the base URL for fetching game data from the JSON server to make it easier
const base =
  "https://my-json-server.typicode.com/Victormuch/Game-project-company-app/games";
// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
  // Call the fetchGames function to fetch and render the games
  fetchGames();
});

// This function is responsible for getting the game data from the server.
function fetchGames() {
  //  We make a request to the server to get the game data.
  fetch(`${base}`, {
    // We are asking for data using the GET method.
    method: "GET",
    headers: {
      // We're specifying that we want data in JSON format.
      "Content-Type": "application/json",
    },
  })
    // We convert the response to a format we can use (JSON).
    .then((res) => res.json())
    .then((games) => {
      // Once we get the game data, we go through each game and display it.
      games.forEach((game) => renderGames(game));
    })
    .catch((error) => {
      // If something goes wrong (like the server being down), we show an error message.
      console.error("Error fetching games:", error);
    });
}

// This function handles what happens when someone clicks the purchase button.
function handlePurchase() {
  // It shows a message saying the purchase is complete.
  alert("Purchased! Enjoy");
}

// This function creates and displays each game on the webpage.
function renderGames(game) {
  // We find the area on the webpage where the games will be shown.
  const gamesContainer = document.getElementById("games-container");
  // We create a card for the game and gives it a specific style.
  const gameCard = document.createElement("div");
  gameCard.classList.add("card");
  // We create an image element to display the game poster.
  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = game.poster;
  image.alt = game.title;
  // We create a section for the game details like title, description, and price.
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  //Add the game title to the card.
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = game.title;
  // We add the game description to the card.
  const description = document.createElement("p");
  description.classList.add("card-text");
  description.textContent = game.description;
  // We add the game price to the card.
  const price = document.createElement("p");
  price.classList.add("card-text");
  price.textContent = `Price: $${game.game_price}`;

  // We add a purchase button to the card and defines what happens when it's clicked.
  const purchaseButton = document.createElement("button");
  purchaseButton.classList.add("btn", "btn-primary");
  purchaseButton.textContent = "PURCHASE";

  purchaseButton.addEventListener("click", handlePurchase);

  //Put all the elements together to form a complete game card.
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(price);
  cardBody.appendChild(purchaseButton);

  gameCard.appendChild(image);
  gameCard.appendChild(cardBody);

  //Add the game card to the section of the webpage meant for displaying games.
  gamesContainer.appendChild(gameCard);
}
