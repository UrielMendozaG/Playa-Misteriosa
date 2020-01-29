export default function ScoreBehavior(){

    let points = document.getElementById("points")

    const updateScore = () => { 
        points.innerHTML = 1;
    }

    window.addEventListener("coconutPickedUp", e => updateScore());
}