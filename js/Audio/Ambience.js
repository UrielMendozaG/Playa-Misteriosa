let ambienceLoaded = new Event("ambienceLoaded");

async function getSound() {
  try {
    let response = await fetch(
      "https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/beach.mp3"
    );
    if (response.ok) {
      window.dispatchEvent(ambienceLoaded);
    }
  } catch (e) {
    console.log(e);
  }
}

getSound();

var sound = new Howl({
  src: [
    "https://urielmendozag.github.io/Playa-Misteriosa/public/sounds/beach.mp3"
  ],
  volume: 0.2
});

export default function Ambience() {
  const playAmbience = () => sound.play();
  window.addEventListener("introductionClicked", e => playAmbience());
}
