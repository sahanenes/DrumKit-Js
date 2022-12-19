let numberOfButtons = document.querySelectorAll(".drum");
for (let i = 0; i < numberOfButtons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    if (this.innerHTML == "w") {
      new Audio("../sounds/tom-1.mp3").play();
    } else if (this.innerHTML == "a") {
      new Audio("../sounds/tom-2.mp3").play();
    } else if (this.innerHTML == "s") {
      new Audio("../sounds/tom-3.mp3").play();
    } else if (this.innerHTML == "d") {
      new Audio("../sounds/tom-4.mp3").play();
    } else if (this.innerHTML == "j") {
      new Audio("../sounds/snare.mp3").play();
    } else if (this.innerHTML == "k") {
      new Audio("../sounds/crash.mp3").play();
    } else if (this.innerHTML == "l") {
      new Audio("../sounds/kick-bass.mp3").play();
    }
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    new Audio("../sounds/tom-1.mp3").play();
  }
  if (e.key == "a") {
    new Audio("../sounds/tom-2.mp3").play();
  }
  if (e.key == "s") {
    new Audio("../sounds/tom-3.mp3").play();
  }
  if (e.key == "d") {
    new Audio("../sounds/tom-4.mp3").play();
  }
  if (e.key == "j") {
    new Audio("../sounds/snare.mp3").play();
  }
  if (e.key == "k") {
    new Audio("../sounds/crash.mp3").play();
  }
  if (e.key == "l") {
    new Audio("../sounds/kick-bass.mp3").play();
  }
});
