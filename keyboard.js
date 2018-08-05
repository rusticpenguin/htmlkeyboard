const keyboardSize = 12;

(function createKeyboard(){
    const keyboard = document.querySelector("#keyboard");
    for(i = 0; i < keyboardSize; i++){
        const key = document.createElement("div");
        key.classList.add("key")
        keyboard.appendChild(key)
    }
})()