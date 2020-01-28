import anime from "../Lib/anime.min.js";

export default function scene() {
  const sceneShowing = () => {
    let score = document.getElementById("score");
    let scene = document.getElementById("scene");
    
    score.style.display = "flex"
    scene.style.display = "grid"

     anime({
       targets: [score,scene],
       opacity: 1,
       display: "flex",
       easing: "easeInOutQuad",
       complete: () => window.removeEventListener("introductionClicked")
     });

  };

  window.addEventListener("introductionClicked", (e) => sceneShowing());
}
