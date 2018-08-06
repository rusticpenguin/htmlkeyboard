const keyboardSize = 15;
const octave = 3;

(function createKeyboard(){
    const keyboard = document.querySelector("#keyboard");
    generateKeys();
    assignKeyNotes();
})()

function generateKeys(){
    for(i = 0; i < keyboardSize; i++){
        const key = document.createElement("div");
        key.classList.add("key");
        key.addEventListener("click", keyPressed, false);
        keyboard.appendChild(key);
    };

}

function assignKeyNotes(){
    const notes = {
        noteLetters: ["a", "aSharp", "b", "c", "cSharp", "d", "dSharp", "e", "f", "fSharp", "g", "gSharp"],
        noteColors: ["white", "black", "white", "white", "black", "white", "black", "white", "white", "black", "white", "black"],
        offset: 0
    };
    const keys = document.querySelectorAll(".key");
    for(i = 0; i < keyboardSize; i++){
        if (!(i === 0) && (i % 12 === 0)){
            notes.offset += 12;
        }
        keys[i].classList.add(notes.noteLetters[i - notes.offset] + (octave + (notes.offset/12)));
        keys[i].classList.add(notes.noteColors[i - notes.offset]);
    };
}

function keyPressed(target){
    notePressed = target.path[0].classList[1];
    getHertz(notePressed);
    console.log(hertz);
}

function getHertz(note){
    return hertz = hertzMath(note);
}

function hertzMath(note){
    return note;
}