import anime from "../Lib/anime.min.js";

export default function GithubBehaviour() {
  let github = document.getElementById("github");

  const show = () => {
    github.style.visibility = "visible";

    anime({
      targets: github,
      opacity: 1,
      easing: "easeInOutQuad",
      complete: () => {
        github.style.cursor = "pointer";
        github.onclick = () => window.open("https://github.com/urielmendozag");
      }
    });
  };

  window.addEventListener("showGithub", show);
}
