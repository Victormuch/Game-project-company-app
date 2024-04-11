const base =
  "https://my-json-server.typicode.com/Victormuch/Game-project-company-app/games";

document.addEventListener("DOMContentLoaded", () => {
  fetchGames();
});

function fetchGames() {
  fetch(`${base}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((games) => {
      games.forEach((game) => renderGames(game)); 
    })
    .catch((error) => {
      console.error("Error fetching games:", error);
    });
}
function handlePurchase() {
  alert("Purchased!");
}

function renderGames(game) {
  const gamesContainer = document.getElementById("games-container");
  const gameCard = document.createElement("div");
  gameCard.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = game.poster;
  image.alt = game.title;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = game.title;

  const description = document.createElement("p");
  description.classList.add("card-text");
  description.textContent = game.description;

  const price = document.createElement("p");
  price.classList.add("card-text");
  price.textContent = `Price: $${game.game_price}`;

  const purchaseButton = document.createElement("button");
  purchaseButton.classList.add("btn", "btn-primary");
  purchaseButton.textContent = "PURCHASE";

  purchaseButton.addEventListener("click", handlePurchase);

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(price);
  cardBody.appendChild(purchaseButton);

  gameCard.appendChild(image);
  gameCard.appendChild(cardBody);

  gamesContainer.appendChild(gameCard);
}
 