var sound = new Howl({
  src: ["https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/beach.wav"],
  volume: .2,
});

export default function Ambience() {
  const playAmbience = () => sound.play();
  window.addEventListener("introductionClicked", e => playAmbience());
}
