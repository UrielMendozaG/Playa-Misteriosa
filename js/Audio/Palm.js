var sound = new Howl({
  src: ["https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/punch.mp3"]
});

var palmClicked = new Event("palmClicked");

export default function Punch() {
    
  const punchListener = () => {
    let palm = document.getElementById("palm2");
    palm.onmouseover = () => (palm.style.cursor = "pointer");
    palm.onclick = () => {
        sound.play();
        window.dispatchEvent(palmClicked)
    }
  };

  window.addEventListener("sunShowed", e => punchListener());
}
