// Story data
const storyData = {
  start: {
    text: "Welcome to the Realm of Legends! Choose your path wisely.",
    choices: ["Click here to Start the game"],
    consequences: ["start1"],
    image: "https://cdn.akamai.steamstatic.com/steam/apps/409590/header.jpg?t=1607442467"
  },
  start1: {
    text: "Welcome to the Realm of Legends! Choose your path wisely.",
    choices: ["Enter the Enchanted Forest", "Ascend the Mystic Tower", "Explore the Dark Cavern"],
    consequences: ["enchantedForest", "mysticTower", "darkCavern"],
    image: "https://cdn.vox-cdn.com/thumbor/oNWp2THfSdW5vNXP6EIXTpmwrpw=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/53125125/teambuilder_wallpaper.0.jpg"
  },
  enchantedForest: {
    text: "In the Enchanted Forest, you encounter mythical creatures and ancient spirits.",
    choices: [ "Retrieve the Lost Artifact", "Follow the Whispering Wind"],
    consequences: ["retrieveArtifact", "followWhisperingWind"],
    image: "https://jnpflores.files.wordpress.com/2017/10/enchanted-forest.png?w=1024"
  },
  mysticTower: {
    text: "Ascending the Mystic Tower, you face magical challenges and riddles.",
    choices: ["Solve the Riddles", "Confront the Guardian", "Access the Forbidden Library"],
    consequences: ["solveRiddles", "confrontGuardian", "forbiddenLibrary"],
    image: "https://www.nps.gov/isro/images/Decker-Nelson_Mount-Ojibway_Fire-Tower_HaveDeedofGift.jpeg?maxwidth=650&autorotate=false"
  },
  darkCavern: {
    text: "Exploring the Dark Cavern, you encounter ancient mysteries and dangerous creatures.",
    choices: ["Uncover the Mysteries", "Face the Guardian", "Discover the Hidden Portal"],
    consequences: ["uncoverMysteries", "faceGuardian", "hiddenPortal"],
    image: "https://images.fineartamerica.com/images-medium-large-5/sunlight-descends-into-a-dark-cavern-ethan-daniels.jpg"
  },
  retrieveArtifact: {
    text: "You successfully retrieve the lost artifact. A valuable treasure!",
    choices: ["Return to the Realm"],
    consequences: ["returnToRealm"],
    image: "https://static.srpcdigital.com/styles/1037xauto/public/2018/07/04/egypt_puts_on_display_artifacts_retrieved_from_italy._ap.jpg"
  },
  followWhisperingWind: {
    text: "Following the whispering wind, you discover a hidden sanctuary. A peaceful retreat!",
    choices: ["Stay in the Sanctuary"],
    consequences: ["stayInSanctuary"],
    image: "https://images.saatchiart.com/saatchi/862006/art/6815145/5884783-HSC00002-7.jpg"
  },
  solveRiddles: {
    text: "Solving the riddles, you unlock the mysteries of the Mystic Tower. A wise achievement!",
    choices: ["Continue Exploring"],
    consequences: ["continueExploring"],
    image: "https://i.vimeocdn.com/video/1494625317-48f77eb11288d13e57b9785f57a272183f1bb999de5d596fa0c0d03641ddb749-d_640x360.jpg"
  },
  confrontGuardian: {
    text: "Confronting the guardian, you prove your worth. A victorious confrontation!",
    choices: ["Proceed to Higher Levels"],
    consequences: ["proceedHigherLevels"],
    image: "data:image/jpeg;base64,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"
  },
  forbiddenLibrary: {
    text: "Accessing the forbidden library, you gain forbidden knowledge. A double-edged discovery!",
    choices: ["Embrace the Knowledge"],
    consequences: ["embraceKnowledge"],
    image: "https://i.ytimg.com/vi/3SFnZVfgfbE/sddefault.jpg"
  },
  uncoverMysteries: {
    text: "Uncovering the mysteries, you acquire ancient wisdom. A profound revelation!",
    choices: ["Apply the Wisdom"],
    consequences: ["applyWisdom"],
    image: "https://youaligned.com/wp-content/uploads/2022/03/Ancient-Wisdom-Feature.jpg"
  },
  faceGuardian: {
    text: "Facing the guardian, you overcome the challenge. A triumphant feat!",
    choices: ["Continue the Exploration"],
    consequences: ["continueExploration"],
    image: "triumphantExplorer.jpg"
  },
  hiddenPortal: {
    text: "Discovering the hidden portal, you find a passage to another realm. A portal to new adventures!",
    choices: ["Step Through the Portal"],
    consequences: ["stepThroughPortal"],
    image: "https://cdnb.artstation.com/p/assets/images/images/040/764/327/large/nitin-chandra-hidden-portal.jpg?1629819196"
  },
  // Add more outcomes for other choices

  returnToRealm: {
    text: "You return to the Realm with the retrieved artifact. Your accomplishment is celebrated!",
	image: "https://www.travelandleisure.com/thmb/v6yCSOTZcvAKTmZda4K7a379vXA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/animal-kingdom-tree-of-life-AKWDWGUIDE0219-351651510e6c444cb024555270c865f9.jpg"
  },
  stayInSanctuary: {
    text: "You decide to stay in the sanctuary, finding peace and tranquility. A serene existence!",
    image: "https://s3.amazonaws.com/assets.centralparknyc.org/media/images/_1200x630_crop_center-center_82_none/HallettNatureSanctuary_20210503_9018.jpg?mtime=1621345680"
  },
  continueExploring: {
    text: "With the mysteries solved, you continue exploring the Mystic Tower. Endless wonders await!",
    image: "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20200828060820_5f48866ac2bf74d8cce2781djpeg.jpeg"
  },
  proceedHigherLevels: {
    text: "Having confronted the guardian, you proceed to higher levels of the Mystic Tower. The journey intensifies!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3P0FYUX_DyQLvvlqZfBav2dBZ16-yLAC6-c4YWYKMVe7G3g7lOMWDMKjufBU6YbvAv4&usqp=CAU"
  },
  embraceKnowledge: {
    text: "Embracing the forbidden knowledge, you gain power and insight. A transformational experience!",
    image: "https://karimahashadu.com/wp-content/uploads/2020/05/Power-Man-Sodoko-Fighter-Stance-rgb.png"
  },
  applyWisdom: {
    text: "Applying the acquired wisdom, you navigate through challenges with ease. A wise and skilled adventurer!",
    image: "https://i.redd.it/gjtvfzn5tmz91.jpg"
  },
  continueExploration: {
    text: "With the guardian defeated, you continue the exploration of the Dark Cavern. More wonders await!",
    image: "https://img.freepik.com/premium-photo/exploring-depths-underground-mine-passage-dark-cavern-with-coal-copper-deposits_817921-1695.jpg"
  },
  stepThroughPortal: {
    text: "Stepping through the hidden portal, you enter a new realm. A portal to endless possibilities!",
    image: "https://hips.hearstapps.com/hmg-prod/images/the-last-kingdom-film-1647430950.jpg?resize=980:*"
  },
};

// Function to start the game
function startGame() {
    currentStage = "start";
    updatePage();
    document.getElementById("start-container").style.display = "none";
    document.getElementById("story-container").style.display = "block";
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
    const imageContainer = document.getElementById("image-container");
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
    const imageContainer = document.getElementById("image-container");
    const storyImage = document.getElementById("story-image");
    storyImage.src = storyData[currentStage].image;

    // Display a message or perform any other final actions
}

// Initialize the game
let currentStage = "";
startGame();
