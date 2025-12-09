const CITY_DATA = {
  tokyo: {
    title: "Tokyo",
    overviewImage: "tokyo_overview.jpg",
    activities: [
      {
        id: "shibuya_crossing",
        label: "Shibuya Crossing",
        image: "crossing.jpg",
        description: "Shibuya Crossing – One of the world’s busiest pedestrian intersections. Experience the vibrant urban spectacle and neon energy that defines central Tokyo."
      },
      {
        id: "meiji_shrine",
        label: "Meiji Shrine",
        image: "shrine.jpg",
        description: "Meiji Shrine – A peaceful Shinto shrine set in a lush forest, offering a tranquil escape within the city's bustle."
      },
      {
        id: "tokyo_teamlab",
        label: "TeamLab Planets",
        image: "teamlab.jpg",
        description: "Teamlab Planets – Immersive digital art that messes with your brain in the best way."
      },
      {
        id: "akihabara",
        label: "Akihabara Electric Town",
        image: "akihabara.jpg",
        description: "Akihabara Electric Town– The tech, anime, and gaming district of your dreams."
      },
      {
        id: "tokyo_tower",
        label: "Tokyo Tower",
        image: "t-tower.jpg",
        description: "Iconic red tower with amazing skyline views and a glass-floor deck that looks straight down on Tokyo."
      },
    ],
    food: [
      {
        id: "sukiyabashi",
        label: "Sushi Saito",
        image: "sushi.jpg",
        description: "Sukiyabashi Jiro – World-renowned sushi with a meticulous omakase experience, celebrated for precision and the highest-grade fish."
      },
      {
        id: "ichiran",
        label: "Ichiran Ramen",
        image: "ramen.jpg",
        description: "Ichiran Ramen – Famous tonkotsu ramen with customizable spice and flavor levels in private dining booths for an immersive meal."
      },
      {
        id: "harajuku",
        label: "Harajuku Crepes",
        image: "crepes.jpg",
        description: "Harajuku Crepes – Colorful, sweet crepes that are as fun as they are good."
      },
      {
        id: "cutlet",
        label: "Gyūkatsu Motomura",
        image: "cutlet.jpg",
        description: "Gyūkatsu Motomura – Crispy beef cutlet cooked at your table on a hot stone."
      },
      {
        id: "yakitori",
        label: "Street Yakitori",
        image: "yakitori.jpg",
        description: "Street Yakitori – Smoky grilled skewers sold on almost every lively alleyway."
      },
    ]
  },

  paris: {
    title: "Paris",
    overviewImage: "eiffel_tower.jpg",
    activities: [
      {
        id: "eiffel",
        label: "Eiffel Tower",
        image: "eiffel_tower.jpg",
        description: "Eiffel Tower – The emblematic Parisian landmark offering breathtaking panoramic views from its observation decks."
      },
      {
        id: "louvre",
        label: "Louvre Museum",
        image: "louvre.jpg",
        description: "Louvre Museum – Home to countless masterpieces including the Mona Lisa, an essential stop for art lovers."
      },
      {
        id: "disneyland",
        label: "Disneyland Paris",
        image: "disneyland.jpg",
        description: "Disneyland Paris – a magical theme park in France where classic Disney characters, thrilling rides, and enchanting fairy-tale worlds come to life."
      },
      {
        id: "seine river",
        label: "Seine River Cruise",
        image: "river.jpg",
        description: "Seine River Cruise – Paris from the water. Ridiculously peaceful and beautiful at night."
      },
      {
        id: "Notre-Dame",
        label: "Notre-Dame",
        image: "notre-dame.jpg",
        description: "Notre-Dame – Stunning architecture + the prettiest surrounding streets." 
      },
    ],
    food: [
      {
        id: "bistrot",
        label: "Bistrot Paul Bert",
        image: "crossaints.jpg",
        description: "Bistrot Paul Bert – Classic Parisian bistro serving traditional French dishes in a warm, authentic atmosphere."
      },
      {
        id: "du_pain",
        label: "Du Pain et des Idees",
        image: "bakery.jpg",
        description: "Pierre Hermé – One of Paris’ most famous bakeries with unreal pastries."
      },
      {
        id: "le_relais_de_entrecote",
        label: "Le Relais de l’Entrecôte",
        image: "relais.jpg",
        description: "Du Pain et des Idees – The famous steak-frites spot that always hits."
      },
      {
        id: "angelina",
        label: "Angelina's Hot Chocolate",
        image: "hot_chocolate.jpg",
        description: "Angelina's Hot Chocolate – Home of the thickest, richest hot chocolate you’ll ever taste."
      },
      {
        id: "pierre_herme",
        label: "Pierre Herme",
        image: "macarons.jpg",
        description: "Pierre Herme – Macarons so pretty they look AI generated."
      },
    ]
  },

  newyork: {
    title: "New York City",
    overviewImage: "new_york_city.jpg",
    activities: [
      {
        id: "times square",
        label: "Times Square",
        image: "times_Square.jpg",
        description: "Times Square – Bright lights, big screens, pure NYC energy."
      },
      {
        id: "brooklyn_bridge",
        label: "Brooklyn Bridge",
        image: "brooklyn_bridge.jpg",
        description: "Brooklyn Bridge – The perfect sunset walk to see all of New York in its glory. Bring a camera."
      },
      {
        id: "central_park",
        label: "Central Park",
        image: "central_park.jpg",
        description: "Central Park – Expansive urban park with walks, boating, gardens, and iconic spots perfect for strolling and photos."
      },
      {
        id: "statue_liberty",
        label: "The Statue of Liberty",
        image: "liberty.jpg",
        description: "The Statue of Liberty – Classic NYC. The ferry ride alone is worth it."
      },
      {
        id: "met_museum",
        label: "The Metropolitan Museum of Art",
        image: "met.jpg",
        description: "The Metropolitan Museum of Art – 5,000 years of art. You could live in here and not finish."
      },
    ],
    food: [
      {
        id: "katz",
        label: "Katz's Delicatessen",
        image: "new_york_steak.jpg",
        description: "Katz's Delicatessen – Historic deli famed for its pastrami sandwiches and authentic New York deli experience."
      },
      {
        id: "le_bernardin",
        label: "Le Bernardin",
        image: "bernardin.jpg",
        description: "Le Bernardin – Michelin-starred seafood restaurant celebrated for refined technique and elegant dining."
      },
      {
        id: "prince",
        label: "Prince Street Pizza",
        image: "pizza.jpg",
        description: "Prince Street Pizza – Thick square slices with spicy little pepperoni cups."
      },
      {
        id: "russ",
        label: "Russ and Daughters",
        image: "bagels.jpg",
        description: "Russ and Daughters – Elite bagels + smoked fish. The real deal."
      },
      {
        id: "magnolia",
        label: "Magnolia Bakery",
        image: "magnolia.jpg",
        description: "Magnolia Bakery – A charming spot famous for its nostalgic, handcrafted cupcakes, cakes, and sweet treats that feel like a hug in every bite."
      },
    ]
  }
};

const views = {
  home: document.getElementById("home"),
  cityView: document.getElementById("city-view")
};
const heroImage = document.getElementById("heroImage");
const cityTitle = document.getElementById("cityTitle");
const activitiesList = document.getElementById("activitiesList");
const foodList = document.getElementById("foodList");
const locationDescription = document.getElementById("locationDescription");
const backBtn = document.getElementById("backBtn");
const navButtons = document.querySelectorAll(".nav-btn");
const cityCards = document.querySelectorAll(".city-card");

function showView(name){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  if(name === "home"){
    views.home.classList.add("active");
  } else {
    views.cityView.classList.add("active");
  }
}

function fadeSwapImage(newSrc){
  heroImage.style.opacity = 0;
  setTimeout(()=> {
    heroImage.src = newSrc;
    heroImage.style.opacity = 1;
  }, 220);
}

function openCity(cityKey){
  const city = CITY_DATA[cityKey];
  if(!city) return;
  cityTitle.textContent = city.title;
  heroImage.src = city.overviewImage || "";
  heroImage.alt = city.title;

  activitiesList.innerHTML = "";
  foodList.innerHTML = "";
  locationDescription.textContent = "Select an activity or food spot to learn more.";

  city.activities.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.label;
    li.tabIndex = 0;
    li.addEventListener("click", () => {
      fadeSwapImage(item.image);
      locationDescription.textContent = item.description;
    });
    li.addEventListener("keypress", (e) => { if(e.key === "Enter") li.click(); });
    activitiesList.appendChild(li);
  });

  city.food.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.label;
    li.tabIndex = 0;
    li.addEventListener("click", () => {
      fadeSwapImage(item.image);
      locationDescription.textContent = item.description;
    });
    li.addEventListener("keypress", (e) => { if(e.key === "Enter") li.click(); });
    foodList.appendChild(li);
  });

  showView("city");
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    if(target === "home"){
      showView("home");
    } else {
      openCity(target);
    }
  });
});

cityCards.forEach(card => {
  card.addEventListener("click", () => {
    const city = card.dataset.city;
    openCity(city);
  });
});

backBtn.addEventListener("click", ()=> {
  showView("home");
});

showView("home");


