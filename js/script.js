let keys = document.getElementsByClassName("key");
const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const blacks = ['w', 'e', 't', 'y', 'u'];
console.log(keys);

for (let key of keys) {
    key.addEventListener('click', e => playNote(key));

}

const playNote = (key) => {
    console.log(key);  
    const sound = document.getElementById(key.getAttribute("note"));
    console.log(key.getAttribute("note"));

//     soundC.currentTime = 0;
    sound.play();
}

document.addEventListener('keydown', e => {
    switch(e.code.substr(3,1).toLowerCase()){
        case "a":
            document.getElementById("C").play();
            break;
        case "w":
            document.getElementById("Cs").play();
            break;
        case "s":
            document.getElementById("D").play();
            break;

    }
})
