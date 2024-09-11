const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
const svg = document.querySelector("#svg");
// stroke-dasharray is svg property that specifies the number of given px high border and then gap repeatedly.
circle.setAttribute("stroke-dasharray", perimeter);
let duration;
const options = {
  onStart(totalDuration) {
    duration = totalDuration;
    svg.classList.add("showShadow");
  },
  onTick(timeRemaining) {
    // stroke-dashoffset is svg property that specifies the extra px of spaces on previous space that we get from stroke-dasharray
    circle.setAttribute(
      "stroke-dashoffset",
      perimeter * (timeRemaining / duration) - perimeter
    );

    //FORMULA FOR GETTING OFFSET VERY PRECISELY
    /*
     START:== dashArray = perimeter.
     dashOffset = 0;
     END:==== dashArray = perimeter
     dashOffset = -perimeter.
      PERIMETER OF CIRCLE = 100;
      AND SUPPOSE THERE ARE 50 TICK EVENTS
      EACH TICK NEED TO ADJUST THE OFFSET BY -1 * 100/50.
      FINAL FORMULA:
      OFFSET = PERIMETER * (TIME_REMAINING / TOTAL_DURATION)  - PERIMETER. 
    */
  },
  onComplete() {
    svg.classList.remove("showShadow");
  },
};
//To get the class Timer make sure to visit file (Timer.js).
const timer = new Timer(durationInput, startButton, pauseButton, options);

/*8888888888*************************888888888*/
//Testing purpose. for the (this);
// const color = {
//   printColor() {
//     console.log(this);
//     const print = () => {
//       console.log(this);
//     };
//     print();
//   },
// };
// color.printColor();

//use case of bind,every and call methods
//Whenever we use the call the first argument will override the value of this; but int the case of arrow function.
//Whenever we use the apply the first argument will override the value of this; but int the case of arrow function.
//Whenever we use the bind the first argument will override the value of this; but int the case of arrow function.
// const printThis = () => {
//   console.log(this);
// };
// function printThis() {
//   console.log(this);
// }
// printThis();
// printThis.call({ color: "red" });
// printThis.apply({ color: "red" });
