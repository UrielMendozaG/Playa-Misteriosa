var sound = new Howl({
  src: ["../../public/sounds/punch.wav"]
});

export default function Punch() {
    
  const punchListener = () => {
    let palm = document.getElementById("palm2");
    palm.onmouseover = () => (palm.style.cursor = "pointer");
    palm.onclick = () => sound.play();
  };

  window.addEventListener("sunShowed", e => punchListener());
}
