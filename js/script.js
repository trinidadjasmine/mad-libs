// creating the arrays
var noun = [];
var verb = [];
var adj = [];

// defining the buttons
var submt = document.getElementById("submitGame");
var clear = document.getElementById("clearForm");
var rand = document.getElementById("randStory");

// finding the data in the HTML form and putting 
// their values into the appropriate arrays above
function gameData() {
		noun[0] = document.getElementById("noun1").value;
		noun[1] = document.getElementById("noun2").value;
		
		verb[0] = document.getElementById("verb1").value;
		verb[1] = document.getElementById("verb2").value;
		
		adj[0] = document.getElementById("adj1").value;
		adj[1] = document.getElementById("adj2").value;
};

// creating the playGame function that will grab 
// the data from the arrays above and concatenate 
// it into a randomly generated story and display it in the DOM
function playGame() {
	var story1 = "Strangely, I woke up by the " + noun[0] + " that was atop of the " + adj[0] + " mountain.";
	story1 += " I had to " + verb[0] + " through the snow in search of the town " + noun[1] + ".";
	story1 += " Once there, I saw a/an " + adj[1] + " squirrel with sharp teeth and massive claws.";
	story1 += " Frightened for my life, I " + verb[1] + " back up the mountain with the squirrel hot on my trail.";
	
	
	var story2 = "It was a dark and " + adj[1] + " night when all of a sudden...";
	story2 += " a cow " + verb[1] + " out of the " + noun[1] + " on the path ahead.";
	story2 += " Terrified, I picked up my " + noun[0] + " to use as a shield.";
	story2 += " The cow looked me dead in the eyes, its " + adj[0] + " irises cold like ice.";
	story2 += " It was too much for me so I decided to " + verb[0] + " away, vanishing into the moonlight.";
	
	
	var story3 = "It was April but the " + adj[0] + " snow was still falling from the skies.";
	story3 += " Afraid of the cold, I " + verb[1] + " back inside the " + noun[1] + " to warm myself up.";
	story3 += " Finally free of the " + adj[1] + " winter, I began to " + verb[0] + " in place; a signature coping mechanism of mine.";
	story3 += " With my " + noun[0] + " in hand, I decided to take a nap in which I dreamt of Chuck Norris.";
	
	var madlibs = [];
	
	madlibs[0] = story1;
	madlibs[1] = story2;
	madlibs[2] = story3;
	
	var madlib = madlibs[Math.floor(Math.random() * madlibs.length)];
	
	document.getElementById("madlibs-story").innerHTML = madlib;
};

// adding a button that when clicked will call a function 
// that will randomly generate the corresponding words to 
// fill out the form
rand.onclick = function() {
	event.preventDefault();
	randGame();
};

// random words function
function randGame() {
	var things = ["miniature pet pig", "car", "notebook", "lamp", "computer", "calculator", "rainbow", "guitar"];
	var places = ["house", "barn", "pool", "store", "tunnel", "refrigerator", "bathroom", "national park"];
	var verbs = ["jump", "swim", "laugh", "fly", "twist", "leap", "cartwheel", "text"];
	var pastverbs = ["shivered", "galloped", "jumped", "lunged", "slid", "ran", "teleported", "tumbled"];
	var adj1 = ["Hawaiian", "grumpy", "sparkly", "fuzzy", "large", "pointy", "circular", "colossal"]
	var adj2 = ["itchy", "squeamish", "silly", "graceful", "smooth", "squeaky", "snappy", "microscopic"];
	
	var t = things[Math.floor(Math.random() * things.length)];
	var p = places[Math.floor(Math.random() * places.length)];
	var v = verbs[Math.floor(Math.random() * verbs.length)];
	var pv = pastverbs[Math.floor(Math.random() * pastverbs.length)];
	var a = adj1[Math.floor(Math.random() * adj1.length)];
	var a2 = adj2[Math.floor(Math.random() * adj2.length)];
	
	document.getElementById("noun1").value = t;
	document.getElementById("noun2").value = p;
	document.getElementById("verb1").value = v;
	document.getElementById("verb2").value = pv;
	document.getElementById("adj1").value = a;
	document.getElementById("adj2").value = a2;
};

// checking the data when "Submit" is clicked
submt.onclick = function() {
	// if the user doesn't enter data, an alert message will appear
	if (document.getElementById("verb2").value.length == 0) {
		alert("Please fill out all of the fields.");
	} 
	
	// if the user correctly entered data, the program will run as intended and show the story
	else {
		event.preventDefault();
		gameData();
		playGame();
		document.getElementById("story").className = "show";
	}
};

// when "Clear" is clicked, it will clear the form and hide the story
clear.onclick = function() {document.getElementById("story").className = "hide"};