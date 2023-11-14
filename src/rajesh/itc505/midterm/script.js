// Story data
const storyData = {
    start: {
        text: "Welcome to the Enchanted Forest!",
        choices: ["Go Left", "Go Right"],
        consequences: ["left", "right"],
        image: "https://news.harvard.edu/wp-content/uploads/2022/11/081022_Harvard_Forest_54-1200x800.jpg"
    },
    left: {
        text: "You discover a hidden waterfall with magical healing properties.",
        choices: ["Trust the Talking Tree", "Ignore the Talking Tree"],
        consequences: ["trust", "ignore"],
        image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/03/waterfalls-1679730507.jpg"
    },
    right: {
        text: "You encounter a mischievous fairy who guides you to a hidden cave.",
        choices: ["Drink Poison","Drink water"],
        consequences: ["poison", "water"],
        image: "https://static.wikia.nocookie.net/queen-of-seducers-and-destruction/images/a/a4/Fairies.jpg/revision/latest/thumbnail/width/360/height/360?cb=20190514205346"
    },
	poison: {
        text: "The Talking Tree provides a magical amulet that protects you.",
        choices: ["You died"],
        consequences: ["Died"],
        image: "https://images.theconversation.com/files/515276/original/file-20230314-2595-90gnm9.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C2121%2C1412&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
    },
	water: {
        text: "The Talking Tree provides a magical amulet that protects you.",
        choices: ["You successfully win the tressure"],
        consequences: ["Tressure"],
        image: "https://t3.ftcdn.net/jpg/05/83/15/86/360_F_583158671_1ZrO61VQ7gHObbzCGIZ3KiZ1W4oBMYS5.jpg"
    },
    trust: {
        text: "The Talking Tree provides a magical amulet that protects you.",
        choices: ["Follow the Whispering Shadows", "Avoid the Whispering Shadows"],
        consequences: ["follow", "avoid"],
        image: "https://static.wikia.nocookie.net/queen-of-seducers-and-destruction/images/a/a4/Fairies.jpg/revision/latest/thumbnail/width/360/height/360?cb=20190514205346"
    },
    ignore: {
        text: "The path becomes treacherous, but you find a hidden grove with rare flowers.",
        choices: ["Follow the Whispering Shadows", "Avoid the Whispering Shadows"],
        consequences: ["follow", "avoid"],
        image: "https://www.southernliving.com/thmb/3HIU2DX1_n00scVgEwrT4HGI9rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-576569408-2000-2cff0407dd4947caad4387c1c518f8f4.jpg"
    },
    follow: {
        text: "The shadows lead you to a mystical portal.",
        choices: ["Solve the Guardian's Riddle", "Ignore the Guardian's Riddle"],
        consequences: ["solve", "ignore"],
        image: "https://i.pinimg.com/736x/e6/11/09/e611091ae64ede04db80e62508ee7dbf.jpg"
    },
    avoid: {
        text: "You discover a hidden clearing with a magical creature.",
        choices: ["Solve the Guardian's Riddle", "Ignore the Guardian's Riddle"],
        consequences: ["solve", "ignore"],
        image: "https://static.wikia.nocookie.net/harrypotter/images/d/d7/Thunderbird_concept_art.jpg/revision/latest/scale-to-width-down/1200?cb=20180813231220"
    },
    solve: {
        text: "The guardian grants you the ability to communicate with animals.",
        image: "https://3.bp.blogspot.com/-O_qWyUBRyyM/U3nzq9HsMEI/AAAAAAAACv8/2Sdge1XdcdM/s1600/Guardians+of+Legend.jpg"
    },
    ignore: {
        text: "You face a series of trials but find a hidden treasure.",
        image: "https://content.fortune.com/wp-content/uploads/2016/07/gettyimages-545040141.jpg"
    }
};


function startGame() {
    // Set initial state
    currentStage = "start";

    // Refresh page display
    updatePage();

    // Hide start container and show story container
    document.getElementById("start-container").style.display = "none";
    document.getElementById("story-container").style.display = "block";
}

// Function to update the page based on user choices
function updatePage() {
    const currentData = storyData[currentStage];
    document.getElementById("story-text").textContent = currentData.text;

    // Clear previous choices
    const choicesContainer = document.getElementById("choices-container");
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
