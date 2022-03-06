// Pacmen Factory Exercise

var pos = 0;

// Array for Packmen Image files
const pacArray = [
    ['./images/PacMan1.png', './images/PacMan2.png'], // Facing Right Open & Closed
    ['./images/PacMan3.png', './images/PacMan4.png']  // Facing Left Open & Closed
];


var direction = 0;

//Array to hold the pacmen
const pacMen = [];


// function to make random numbers
// Will be used to set both the starting position and the starting velocity
function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}


// Factory to make a PacMan at a random position with random velocity
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // velocity will be between 0 and 10
    let position = setToRandom(200); // position will be between 0 and 200
    let size = setToRandom(300); // height and width will be between 0 and 300
    // Adds image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = 'Images/PacMan1.png';
    //newimg.width = 100;
    newimg.width = size.x;
    //newimg.height = size.x; //only using x value to make pacman symmetrical

    
    // Sets position of new image of pacman
    newimg.style.left = position.x;
    newimg.style.top = position.y;
    
    // Adds new Child image to game
    game.appendChild(newimg);
    
    // Returns details in an object
    return {
        position,
        velocity,
        newimg
    }
}

//Function to move the pacman images
function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;
        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}


// Function detects collision with all walls and makes pacman bounce
function checkCollisions(item) {
    if(item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
    if(item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}
// Function adds a new pacman to game
function makeOne() {
    pacMen.push(makePac());
};
