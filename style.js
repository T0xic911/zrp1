// Get the zombie element
var zombie = document.getElementById('zombie');

// Set a timer to show the zombie every 30 seconds
setInterval(function() {
	// Set a random message for the zombie to say
	var messages = [
		"Brains!",
		"Join us!",
		"Survive with us!"
	];
	var message = messages[Math.floor(Math.random() * messages.length)];

	// Set the zombie message text
	zombie.textContent = message;

	// Show the zombie
	zombie.style.display = 'block';

	// Set a timer to hide the zombie after 5 seconds
	setTimeout(function() {
		zombie.style.display = 'none';
	}, 5000);
}, 30000);
