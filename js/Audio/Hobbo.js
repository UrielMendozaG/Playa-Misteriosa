var sound = new Howl({
  src: ["../../public/sounds/score.wav"]
});

export default function hobboAudio() {
  const hobboShow = () => {
    sound.play()
  };

  window.addEventListener("hobboShow", hobboShow);
}
