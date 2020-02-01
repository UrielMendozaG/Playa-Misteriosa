var sound = new Howl({
  src: ["https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/score.mp3"]
});

export default function hobboAudio() {
  const hobboShow = () => {
    sound.play()
  };

  window.addEventListener("hobboShow", hobboShow);
}
