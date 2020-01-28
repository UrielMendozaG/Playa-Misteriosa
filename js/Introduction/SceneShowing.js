import anime from "../Lib/anime.min.js";

var EsceneLoaded = new Event("EsceneLoaded");

export default function scene() {
  const sceneShowing = () => {
    let score = document.getElementById("score");
    let scene = document.getElementById("scene");
    
    score.style.display = "flex"
    scene.style.display = "grid"

     anime({
       targets: [score,scene],
       opacity: 1,
       easing: "easeInOutQuad",
       complete: () => window.removeEventListener("introductionClicked", sceneShowing()),
       complete: () => window.dispatchEvent(EsceneLoaded)
     });

  };

  window.addEventListener("introductionClicked", (e) => sceneShowing());
}
