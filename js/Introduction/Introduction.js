import anime from "../Lib/anime.min.js";

var introductionClicked = new Event("introductionClicked");

export default function controller() {
  let section = document.getElementById("introduction");
  let body = document.getElementById("body");

  let clickToStart = document.getElementById("clickToStart");
  let loading = document.getElementById("loading");


  const loaded  = () => {
    clickToStart.style.display = "block"
    clickToStart.style.textAlign = "center"

    loading.style.display = "none"
    
    //efecto de desaparicion
    window.onclick = () => {
      anime({
        targets: section,
        opacity: 0,
        easing: "easeInOutQuad",
        complete: () => {
          section.style.display = "none";
          window.dispatchEvent(introductionClicked);
        }
      });
    };
  };

  window.addEventListener("ambienceLoaded", loaded)
}
