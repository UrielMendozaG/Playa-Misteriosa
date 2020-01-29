var sound = new Howl({
  src: ["../../public/sounds/score.wav"]
});

export default function ScoreSound() {
  const score = () => {
    sound.play();
  };

  window.addEventListener("coconutPickedUp", e => score());
}
