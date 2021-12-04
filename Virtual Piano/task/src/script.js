let whiteKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
let blackKeys = ['w', 'e', 't', 'y', 'u'];
document.addEventListener("keydown", function (event) {
    if (whiteKeys.includes(event.key)) {
        console.log(`The '${event.key.toUpperCase()}' key is pressed.`);
        let audioToPlay = new Audio(`white_keys/${event.key.toUpperCase()}.mp3`);
        audioToPlay.play();
    } else if (blackKeys.includes(event.key)) {
        console.log(`The '${event.key.toUpperCase()}' key is pressed.`);
        let audioToPlay = new Audio(`black_keys/${event.key.toUpperCase()}.mp3`);
        audioToPlay.play();
    } else {
        console.log(new Error("Piano doesn't have this key."));
    }
});