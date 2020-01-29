var sound = new Howl({
    src: ["../../public/sounds/hollow_punch.wav"]
  });
  
  export default function Punch() {
      
    const punchListener = () => {
      let coconut = document.getElementById("coconut");
      coconut.onmouseover = () => (coconut.style.cursor = "pointer");
      coconut.onclick = () => sound.play();
    };
  
    window.addEventListener("sunShowed", e => punchListener());
  }
  