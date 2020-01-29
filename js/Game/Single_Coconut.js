
var coconutPickedUp = new Event("coconutPickedUp")

export default function CoconutBehavior(){

    let coconut = document.getElementById("singleCoconut")

    const showCoconut = () => { 
        coconut.style.visibility = "visible"
        coconut.style.cursor = "pointer"
        coconut.onclick = clickCoconut 
    }

    const clickCoconut = () => {
        // mostrar sonido
        coconut.style.visibility = "hidden";
        window.dispatchEvent(coconutPickedUp);
    }

    window.addEventListener("PalmClickedTwentyTimes", e => showCoconut());
}