// const newNoteSection = document.getElementById("noteAdderSection");
// const newNoteButtons = document.getElementsByClassName("top-bar-note-adder-button");

// newNoteSection.addEventListener("mouseover", expandNoteAdderSection);
// newNoteSection.addEventListener("mouseleave", resetNewNoteSection);

/* Top-Bar */

// function resetNewNoteSection() {
//     for (let i = 0; i < newNoteButtons.length; i++) {
//         newNoteButtons[i].classList.remove("top-bar-note-adder-expanded");
//     }
// }

// function expandNoteAdderSection() {
//     for (let i = 0; i < newNoteButtons.length; i++) {
//         newNoteButtons[i].classList.add("top-bar-note-adder-expanded");
//     }
// }

const sidebar = document.getElementById("sidebar");
const openSidebarButton = document.getElementById("openSidebar");

const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");

let loadedNote = null;

/* Side-Bar */

function toggle_side_bar() {
    sidebar.classList.toggle("side-bar-closed");
}

document.onclick = function(e) {
    if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        sidebar.classList.add("side-bar-closed");
    }
}

/* Note */

function save_note() {
}

function new_note() {
    let note = new Note();
    loadNote(note);
}

function loadNote(note_) {
    loadedNote = note_;
    loadedNote.load();
}

class Note {

    constructor() {
        this.name = "";
        this.content = "";
    }

    load() {
        noteTitle.value = this.name;
        noteContent.value = this.content;
    }

}

loadNote(new Note());