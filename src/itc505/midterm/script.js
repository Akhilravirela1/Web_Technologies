let currentState = "start";

let gameData = {
  start: {
    text: "Do you want to start",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://i1.sndcdn.com/artworks-Hwy9ayv4vBwz75P9-fKmaAw-t500x500.jpg",
  },
  start1: {
    text: "You wake up in a world of twisted timelines. Choose your path.",
    choices: ["Enter the Time Portal", "Explore the Abandoned Lab"],
    consequences: ["enterPortal", "exploreLab"],
    image: "https://www.theoracleinstitute.org/images/ValleyofLight/5Paths.jpg",
  },
  enterPortal: {
    text: "You enter the time portal. Where do you want to go?",
    choices: ["Medieval Kingdom", "Futuristic City"],
    consequences: ["medievalKingdom", "futuristicCity"],
    image: "https://cdna.artstation.com/p/assets/images/images/018/840/922/large/jeremy-williams-portail-temporel-final.jpg?1560937027",
  },
  exploreLab: {
    text: "You explore the abandoned lab. What do you find?",
    choices: ["Time Travel Device", "Mysterious Documents"],
    consequences: ["timeTravelDevice", "mysteriousDocuments"],
    image: "https://cdn.openart.ai/stable_diffusion/58638102e5b59ebe446044ed491c461821b5d71d_2000x2000.webp",
  },
  medievalKingdom: {
    text: "You arrive in a medieval kingdom. What's your next move?",
    choices: ["Join the Knights", "Visit the Wizard"],
    consequences: ["joinKnights", "visitWizard"],
    image: "https://cdn1.epicgames.com/ue/product/Screenshot/Map41-1920x1080-4af2342dda9afa533c31b926611da88e.jpg?resize=1&w=1920",
  },
  futuristicCity: {
    text: "You arrive in a futuristic city. What's your next move?",
    choices: ["Join the Tech Corporation", "Explore Cybernetic Enhancements"],
    consequences: ["joinTechCorp", "cyberneticEnhancements"],
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/04/11162204/Futuristic-City-1.jpg",
  },
  timeTravelDevice: {
    text: "You find a functional time travel device. What will you do?",
    choices: ["Go to the Jurassic Era", "Return to the Present"],
    consequences: ["jurassicEra", "returnPresent"],
    image: "https://imgix.bustle.com/uploads/image/2022/5/9/73ded827-7098-4d57-a25e-d3d3b8996bbd-time-travel-scene-terminator.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
  },
  mysteriousDocuments: {
    text: "You discover mysterious documents. What do they reveal?",
    choices: ["Conspiracy Plot", "Ancient Prophecy"],
    consequences: ["conspiracyPlot", "ancientProphecy"],
    image: "https://www.messynessychic.com/wp-content/uploads/2014/10/delaney.jpg",
  },
  joinKnights: {
    text: "You join the knights and become a hero in the medieval kingdom. Congratulations!",
	choices: [""],
    image: "https://knightstemplar.co/wp-content/uploads/2023/06/galileus_the_leader_of_knights_with_a_group_of_knights_photo_re_b55b61ac-de46-4276-b860-d91ec247d203-1024x512.jpg",
  },
  visitWizard: {
    text: "The wizard grants you magical powers. You become a legendary sorcerer. Congratulations!",
	choices: [""],
    image: "https://t3.ftcdn.net/jpg/05/62/55/36/360_F_562553694_4rNoRAQbYve4b7FKp2vDJJtP5gdj0rtZ.jpg",
  },
  joinTechCorp: {
    text: "You join the tech corporation and shape the future. Congratulations!",
	choices: [""],
    image: "https://variety.com/wp-content/uploads/2023/02/featured_trend_tracker_SR_v1.jpg?w=910&h=511&crop=1",
  },
  cyberneticEnhancements: {
    text: "You undergo cybernetic enhancements, becoming a cyborg. Congratulations!",
	choices: [""],
    image: "https://i.redd.it/34z07obvwb7a1.png",
  },
  jurassicEra: {
    text: "You travel to the Jurassic era and encounter dinosaurs. A thrilling adventure!",
	choices: [""],
    image: "https://www.snexplores.org/wp-content/uploads/2020/04/1030_SS_Jurassic.png",
  },
  returnPresent: {
    text: "You return to the present with newfound knowledge. What will you do with it?",
    choices: ["Share Discoveries", "Keep Secrets"],
    consequences: ["shareDiscoveries", "keepSecrets"],
    image: "https://cdn.britannica.com/48/179448-138-40EABF32/Overview-New-York-City.jpg",
  },
  conspiracyPlot: {
    text: "You unravel a conspiracy plot that changes the course of history. Congratulations!",
	choices: [""],
    image: "https://img.freepik.com/free-photo/dark-silhouette-standing-fog-walking-alone-outdoors-generated-by-ai_188544-10373.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais",
  },
  ancientProphecy: {
    text: "The ancient prophecy foretells your destiny. You fulfill it and become a legend. Congratulations!",
	choices: [""],choices: [""],
    image: "https://deseret.brightspotcdn.com/dims4/default/ae2e611/2147483647/strip/false/crop/1200x675+0+62/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F_M4XOfCXb86_XyP0-JM-vjMge00%3D%2F0x0%3A1200x798%2F1200x798%2Ffilters%3Afocal%28600x399%3A601x400%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F17699612%2F1289393.jpg",
  },
  shareDiscoveries: {
    text: "You share your discoveries, contributing to scientific progress. Congratulations!",
	choices: [""],
    image: "https://mind-foundation.org/wp-content/uploads/2022/01/blog-treated_creativity-4.jpg.webp",
  },
  keepSecrets: {
    text: "You keep your discoveries a secret, gaining immense power. Congratulations!",
	choices: [""],
    image: "https://www.spy-games.com/wp-content/uploads/2017/10/bigstock-Young-Censored-Man-Mouth-Seale-78514409.jpg",
  },
};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

// Additional initialization
startGame();
