// script.js
const storyData = {
  start: {
    text: "Welcome to the world of Artifact Crafting! Choose your path wisely.",
    choices: ["Visit the Enchanted Forge", "Explore the Mystic Workshop", "Venture into the Alchemical Garden"],
    consequences: ["enchantedForge", "mysticWorkshop", "alchemicalGarden"],
    image: "https://castmastereliteshop.com/cdn/shop/articles/CastMasterElite-78198-Set-Home-Forge-blogbanner1_1200x1200.jpg?v=1620412671"
  },
  enchantedForge: {
    text: "In the Enchanted Forge, magical materials await. What will you craft?",
    choices: ["Forge a Sword of Flames", "Craft a Crystal Amulet"],
    consequences: ["swordOfFlames", "crystalAmulet"],
    image: "https://castmastereliteshop.com/cdn/shop/articles/CastMasterElite-78198-Set-Home-Forge-blogbanner1_1200x1200.jpg?v=1620412671"
  },
  mysticWorkshop: {
    text: "Exploring the Mystic Workshop, ancient blueprints and mysterious tools surround you.",
    choices: ["Construct a Clockwork Companion", "Build a Potion of Invisibility", "Visit the Art Gallery"],
    consequences: ["clockworkCompanion", "potionOfInvisibility", "artGallery"],
    image: "https://i.pinimg.com/736x/6f/42/cf/6f42cf3649a4ecb87270cd7d91b8b5fc--mystic-garden-tents.jpg"
  },
  
  alchemicalGarden: {
    text: "Venturing into the Alchemical Garden, rare herbs and blossoms beckon. What will you brew?",
    choices: ["Brew a Healing Elixir", "Create a Poisoned Dart", "Explore a Mysterious Plant"],
    consequences: ["healingElixir", "poisonedDart", "mysteriousPlant"],
    image: "https://alchemicalgarden.files.wordpress.com/2022/06/img_5429.jpeg?w=600&h=600&crop=1"
  },
  
  swordOfFlames: {
    text: "Forging a Sword of Flames, you harness the power of fire. A weapon of mythical strength!",
    choices: ["Sword of Flames"],
    image: "https://t3.ftcdn.net/jpg/01/04/34/24/360_F_104342490_l1NaULovx5gTsnfD2Y8f83nlj6G2r3LS.jpg"
  },
  crystalAmulet: {
    text: "Crafting a Crystal Amulet, you capture the essence of magic. A protective charm!",
    choices: ["Crystal Amulet"],
    image: "https://propsandbeyond.com/wp-content/uploads/2023/01/Dark-Crystal-Amulet.jpg"
  },
  clockworkCompanion: {
    text: "Constructing a Clockwork Companion, you gain a loyal ally. A mechanical marvel!",
    choices: ["Clockwork Companion"],
    image: "https://live.staticflickr.com/8490/8251527836_a3f901d546_b.jpg"
  },
  potionOfInvisibility: {
    text: "Building a Potion of Invisibility, you master the art of concealment. A potion of unseen journeys!",
    choices: ["Potion of Invisibility"],
    image: "https://media.sketchfab.com/models/c3f0cffe690a4acd8a0b63a14f996bae/thumbnails/5dfda7f8f44f4fc8858a2c3668638d58/d89ad6a03701409db0e231a6ebb3e3b9.jpeg"
  },
  healingElixir: {
    text: "Brewing a Healing Elixir, you discover the secrets of restoration. A potion of vitality!",
    choices: ["Healing Elixir"],
    image: "https://static.wikia.nocookie.net/skylanders/images/f/f7/Healingelixirart.jpg/revision/latest?cb=20120212220042"
  },
  poisonedDart: {
    text: "Creating a Poisoned Dart, you delve into the world of deception. A weapon of stealth!",
    choices: ["Poisoned Dart"],
    image: "https://i.natgeofe.com/k/f42a3feb-10e9-43f8-8203-2fea1cf283d2/poison-dart-frog-yellow.jpg?w=1084.125&h=609"
  },
  artGallery: {
    text: "You enter the Art Gallery. What will you do?",
    choices: ["Admire the Paintings", "Search for Hidden Artifacts"],
    consequences: ["admirePaintings", "searchHiddenArtifacts"],
    image: "https://www.gla.ac.uk/media/Media_935721_smxx.jpg"
  },
  mysteriousPlant: {
    text: "You encountered a mysterious plant and unfortunately faced dire consequences.",
    choices: ["Accept Your Fate"],
    image: "https://religionmediacentre.org.uk/wp-content/uploads/2018/03/Funeral.jpg"
  },
  // Add more outcomes and consequences as needed
};

// Function to start the game
function startGame() {
  currentStage = "start";
  updatePage();
}

// Function to update the page based on user choices
function updatePage() {
  const currentData = storyData[currentStage];
  document.getElementById("story-text").textContent = currentData.text;

  // Clear previous choices
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  // Display current choices
  currentData.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => makeChoice(currentData.consequences[index]);
    choicesContainer.appendChild(button);
  });

  // Display current image
  const storyImage = document.getElementById("story-image");
  storyImage.src = currentData.image;
}

// Function to handle user choices and navigate to the next stage
function makeChoice(choice) {
  currentStage = choice;
  updatePage();

  // Check if it's an ending stage
  if (!storyData[choice].choices) {
    endGame();
  }
}

// Function to end the game and display the final image
function endGame() {
  // You can add final actions or messages here
}

// Initialize the game
let currentStage;
startGame();
