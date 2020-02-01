var sound = new Howl({
  src: ["https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/score.mp3"]
});

export default function ScoreSound() {
  const score = () => {
    sound.play();
  };

  window.addEventListener("coconutPickedUp", e => score());
}
