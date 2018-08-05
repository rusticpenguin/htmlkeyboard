const keyboardSize = 12;

(function createKeyboard(){
    const keyboard = document.querySelector("#keyboard");
    for(i = 0; i < keyboardSize; i++){
        const key = document.createElement("div");
        key.classList.add("key");
        keyboard.appendChild(key);
    };
    assignKeyNotes();
})()

function assignKeyNotes(){
    const notes = {
        noteLetters: ["a", "b", "c", "d", "e", "f", "g"],
        offset: 0
    };
    const keys = document.querySelectorAll(".key");
    for(i = 0; i < keyboardSize; i++){
        if (!(i === 0) && (i % 6 === 0)){
            notes.offset += 6;
        }
        keys[i].classList.add(notes.noteLetters[i - notes.offset]);
    }
}