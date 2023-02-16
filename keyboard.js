const keyboardSize = 25;
const noteLetters = [
  "a",
  "aSharp",
  "b",
  "c",
  "cSharp",
  "d",
  "dSharp",
  "e",
  "f",
  "fSharp",
  "g",
  "gSharp",
];
const noteColors = [
  "white",
  "black",
  "white",
  "white",
  "black",
  "white",
  "black",
  "white",
  "white",
  "black",
  "white",
  "black",
];

const octave = 3;

function generateKeys() {
  const keyboard = document.querySelector("#keyboard");

  for (let i = 0; i < keyboardSize; i++) {
    const key = document.createElement("div");

    key.classList.add("key");
    key.addEventListener("click", keyPressed, false);
    keyboard.appendChild(key);
  }
}

function assignKeyNotes() {
  let offset = 0;
  const keys = document.querySelectorAll(".key");
  for (let i = 0; i < keyboardSize; i++) {
    if (i !== 0 && i % 12 === 0) {
      offset += 12;
    }

    keys[i].classList.add(noteLetters[i - offset] + (octave + offset / 12));
    keys[i].classList.add(noteColors[i - offset]);
  }
}

function keyPressed(event) {
  notePressed = event.target.classList[1];
  console.log(getHertz(notePressed));
}

function getHertz(note) {
  return hertzMath(note);
}

function hertzMath(note) {
  return note;
}

(function createKeyboard() {
  generateKeys();
  assignKeyNotes();
})();
