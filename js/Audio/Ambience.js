var sound = new Howl({
  src: ["../../public/sounds/beach.wav"]
});

export default function Ambience() {
  const playAmbience = () => sound.play();
  window.addEventListener("introductionClicked", e => playAmbience());
}
