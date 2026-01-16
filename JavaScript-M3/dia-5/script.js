let addListCards = document.querySelector(".list-cards");

let listCards = [
  {
    name: "Koenigsegg",
    img: "./img/img/Koenigsegg.png",
    category: "Sport",
    pricePerDay: 99,
    currency: "USD",
    fuel: "90L",
    transmission: "Manual",
    people: 2,
    favorite: true,
  },
  {
    name: "Nissan GT-R",
    img: "./img/img/Nissan GT-R.png",
    category: "Sport",
    pricePerDay: 80,
    currency: "USD",
    fuel: "80L",
    transmission: "Manual",
    people: 2,
    favorite: false,
  },
  {
    name: "Rolls-Royce",
    img: "./img/img/Rolls-Royce.png",
    category: "Sedan",
    pricePerDay: 96,
    currency: "USD",
    fuel: "70L",
    transmission: "Manual",
    people: 4,
    favorite: true,
  },
  {
    name: "Nissan GT-R",
    img: "./img/img/Nissan GT-R.png",
    category: "Sport",
    pricePerDay: 80,
    currency: "USD",
    fuel: "80L",
    transmission: "Manual",
    people: 2,
    favorite: false,
  },
  {
    name: "All New Rush",
    img: "./img/img/All New Rush.png",
    category: "SUV",
    pricePerDay: 72,
    currency: "USD",
    fuel: "70L",
    transmission: "Manual",
    people: 6,
    favorite: false,
  },
  {
    name: "CR-V",
    img: "./img/img/CR-V.png",
    category: "SUV",
    pricePerDay: 80,
    currency: "USD",
    fuel: "80L",
    transmission: "Manual",
    people: 6,
    favorite: true,
  },
  {
    name: "All New Terios",
    img: "./img/img/All New Terios.png",
    category: "SUV",
    pricePerDay: 74,
    currency: "USD",
    fuel: "90L",
    transmission: "Manual",
    people: 6,
    favorite: false,
  },
  {
    name: "CR-V-N",
    img: "./img/img/CR-V-N.png",
    category: "SUV",
    pricePerDay: 80,
    currency: "USD",
    fuel: "80L",
    transmission: "Manual",
    people: 6,
    favorite: true,
  },
  {
    name: "MGZX Exclusive",
    img: "./img/img/MGZX Exclusive.png",
    category: "Hatchback",
    pricePerDay: 76,
    currency: "USD",
    fuel: "70L",
    transmission: "Manual",
    people: 4,
    favorite: true,
  },
  {
    name: "New MGZS",
    img: "./img/img/New MGZS.png",
    category: "SUV",
    pricePerDay: 80,
    currency: "USD",
    fuel: "80L",
    transmission: "Manual",
    people: 6,
    favorite: false,
  },
  {
    name: "MGZX Excite",
    img: "./img/img/MGZX Excite.png",
    category: "Hatchback",
    pricePerDay: 74,
    currency: "USD",
    fuel: "90L",
    transmission: "Manual",
    people: 4,
    favorite: true,
  },
  {
    name: "New MGZS",
    img: "./img/img/New MGZS.png",
    category: "SUV",
    pricePerDay: 80,
    currency: "USD",
    fuel: "80L",
    transmission: "Manual",
    people: 6,
    favorite: false,
  },
];

function showListCard() {
  if (listCards.length > 0) {
    addListCards.innerHTML = "";
    listCards.forEach((card) => {
      addListCards.innerHTML += `
      <div class="col-md-3">
          <div class="card shadow-sm rounded-4 p-3">
          <!-- Header -->
          <div class="d-flex justify-content-between align-items-start">
              <div>
              <h5 class="mb-0 fw-bold">${card.name}</h5>
              <small class="text-muted">${card.category}</small>
              </div>
              <span class="text-danger fs-4">❤</span>
          </div>
          <!-- Imagen -->
          <div class="text-center my-3">
              <img src="${card.img}" class="img-fluid" alt="Car" />
          </div>

          <!-- Info -->
          <div class="d-flex justify-content-between text-muted small mb-3">
              <span>⛽ ${card.fuel}</span>
              <span>⚙ ${card.transmission}</span>
              <span>👥 ${card.people}</span>
          </div>
          <!-- Footer -->
          <div class="d-flex justify-content-between align-items-center">
              <div>
              <span class="fw-bold fs-5">$${card.pricePerDay}</span>
              <small class="text-muted">/day</small>
              </div>
              <a href="#" class="btn btn-primary rounded-3">Rent Now</a>
          </div>
          </div>
      </div>`;
    });
  }
}

showListCard();
