import anime from "../Lib/anime.min.js";

var introductionClicked = new Event("introductionClicked");

export default function controller() {
  let section = document.getElementById("introduction");

  //efecto de desaparicion
  window.onclick = () => {
    anime({
      targets: section,
      opacity: 0,
      easing: "easeInOutQuad",
      complete: () => {
          section.style.display = "none";
          window.dispatchEvent(introductionClicked)
      }
    });
  };
}
