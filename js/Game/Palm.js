
var PalmClickedTwentyTimes = new Event("PalmClickedTwentyTimes")

export default function PalmBehavior(){

    let numberOfClicks = 0;

    const counterClick = () =>{
        return numberOfClicks + 1;
    }

    const palmClicked = () => {
        numberOfClicks = counterClick();

        if(numberOfClicks == 6) window.dispatchEvent(PalmClickedTwentyTimes)
    }

    window.addEventListener("palmClicked", e => palmClicked());
}