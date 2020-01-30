var sound = new Howl({
    src: ["../../public/sounds/pop.wav"]
  });
  
  export default function textAudio() {
    const popText = () => {
      sound.play()
      window.removeEventListener("popText", popText)
    };
  
    window.addEventListener("popText", popText);
  }
  