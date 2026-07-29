const notepad = document.getElementById("notepad");

function recall() {
	// Recall note from local storage
	const note = localStorage.getItem("note");
	// If you found a note, put it in the notepad!
	if (note) {
		notepad.value = note;
	}
}

function writeDown() {
	// Take value from notepad and write it down in local storage
	localStorage.setItem("note", notepad.value);
}

// When the page loads, recall the note!
window.addEventListener("load", recall);
// When the notepad changes, write it down on local storage for next time!
notepad.addEventListener("change", writeDown);