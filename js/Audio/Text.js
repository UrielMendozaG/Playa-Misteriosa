var sound = new Howl({
    src: ["https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/pop.mp3"]
  });
  
  export default function textAudio() {
    const popText = () => {
      sound.play()
      window.removeEventListener("popText", popText)
    };
  
    window.addEventListener("popText", popText);
  }
  