import anime from "../Lib/anime.min.js";

var sunShowed = new Event("sunShowed")

export default function sun() {
  const sunAnimation = () => {
    let elipse = document.getElementById("sun");

    //show elipse
    elipse.style.display = "inline";

    //-10.5em
    anime({
      targets: [elipse],
      opacity: 1,
      translateY: "-10.5em",
      duration: 3000,
      easing: "easeInOutQuad",
      complete: () => window.removeEventListener("EsceneLoaded", sunAnimation()),
      complete: () => window.dispatchEvent(sunShowed)
    });
  };
  window.addEventListener("EsceneLoaded", e => sunAnimation());
}
