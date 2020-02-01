var sound = new Howl({
  src: ["https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/hollow_punch.wav"]
});

var coconutClicked = new Event("coconutClicked")

export default function Punch() {
  const punchListener = () => {
    let coconut = document.getElementById("coconut");
    coconut.onmouseover = () => (coconut.style.cursor = "pointer");
    coconut.onclick = () => {
      sound.play();
      window.dispatchEvent(coconutClicked)
    }
  };

  window.addEventListener("sunShowed", e => punchListener());
}
