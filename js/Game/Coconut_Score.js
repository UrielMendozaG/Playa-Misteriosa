var coconutScoreClicked20Times = new Event("coconutScoreClicked20Times");

export default function CoconutBehavior() {
  let numberOfClicks = 0;
  let isCoconutGrabed = false;

  const counterClick = () => {
    return numberOfClicks + 1;
  };

  const coconutClicked = () => {
    numberOfClicks = counterClick();
    if (numberOfClicks == 6 && isCoconutGrabed) {
      window.dispatchEvent(coconutScoreClicked20Times);
    }
  };

  const coconutGrabed = () => {
    isCoconutGrabed = true;
    numberOfClicks = 0;
  };

  window.addEventListener("coconutClicked", e => coconutClicked());
  window.addEventListener("coconutPickedUp", e => coconutGrabed());
}
