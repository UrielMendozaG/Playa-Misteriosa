var sound = new Howl({
  src: ["https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/beach.mp3"],
  volume: .2,
});

export default function Ambience() {
  const playAmbience = () => sound.play();
  window.addEventListener("introductionClicked", e => playAmbience());
}
