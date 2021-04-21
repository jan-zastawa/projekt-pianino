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
            console.log(document.querySelector("div[note=C]").classList.add("white-active"));
            break;
        case "w":
            document.getElementById("Cs").play();
            break;
        case "s":
            document.getElementById("D").play();
            break;
        case "e":
            document.getElementById("Ds").play();
            break;
        case "d":
            document.getElementById("E").play();
                break;
        case "f":
            document.getElementById("F").play();
            break;
        case "t":
            document.getElementById("Fs").play();
            break;
        case "g":
            document.getElementById("G").play();
            break;
        case "y":
            document.getElementById("Gs").play();
            break;
        case "h":
            document.getElementById("A").play();
            break;
        case "u":
            document.getElementById("As").play();
            break;
        case "j":
            document.getElementById("B").play();
            break;

    }
})

document.addEventListener('keyup', e => {
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
        case "e":
            document.getElementById("Ds").play();
            break;
        case "d":
            document.getElementById("E").play();
                break;
        case "f":
            document.getElementById("F").play();
            break;
        case "t":
            document.getElementById("Fs").play();
            break;
        case "g":
            document.getElementById("G").play();
            break;
        case "y":
            document.getElementById("Gs").play();
            break;
        case "h":
            document.getElementById("A").play();
            break;
        case "u":
            document.getElementById("As").play();
            break;
        case "j":
            document.getElementById("B").play();
            break;

    }
})