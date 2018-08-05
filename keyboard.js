const keyboardSize = 12;
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
        noteLetters: ["a", "b", "c", "d", "e", "f", "g"],
        offset: 0
    };
    const keys = document.querySelectorAll(".key");
    for(i = 0; i < keyboardSize; i++){
        if (!(i === 0) && (i % 7 === 0)){
            notes.offset += 7;
        }
        keys[i].classList.add(notes.noteLetters[i - notes.offset] + (octave + (notes.offset/7)));
    };
}

function keyPressed(target){
    console.log("hi" + target);
}