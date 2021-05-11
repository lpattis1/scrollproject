const topBox = document.querySelector(".top-box");
const middleBox = document.querySelector(".middle-box");
const middleBox2 = document.querySelector(".middle-box-2");
const bottomBox = document.querySelector(".bottom-box");
const submitBtn = document.querySelector(".submit");
const input = document.querySelector(".name-input");

function changeBg() {
  const colorArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  let colors = "#";
  for (let i = 0; i < colorArray.length; i++) {
    colors += colorArray[Math.floor(Math.random() * 16)];
    document.body.style.background = colors;
  }
}

function showBoxes() {
  setTimeout(() => {
    topBox.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
    topBox.classList.add("show");
  }, 2000);

  window.addEventListener("scroll", function (e) {
    e.preventDefault();
    console.log(scrollY);
    if (this.scrollY > 51) {
      topBox.classList.add("hide");
    } else {
      topBox.classList.remove("hide");
      topBox.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 1000,
        fill: "forwards",
      });
    }

    if (this.scrollY >= 500 && this.scrollY <= 700) {
      middleBox.classList.remove("hide");
      changeBg();
      middleBox.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 1000,
        fill: "forwards",
      });
    } else if (this.scrollY < 300 || this.scrollY >= 700) {
      document.body.style.background = "white";
      middleBox.classList.add("hide");
    }

    if (this.scrollY >= 1300 && this.scrollY <= 1500) {
      middleBox2.classList.remove("hide");
      changeBg();
      middleBox2.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 1000,
        fill: "forwards",
      });
    } else if (this.scrollY < 705 || this.scrollY >= 1700) {
      middleBox2.classList.add("hide");
    }

    if (this.scrollY >= 2300) {
      bottomBox.classList.remove("hide");
      changeBg();
      bottomBox.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 1000,
        fill: "forwards",
      });
    } else {
      bottomBox.classList.add("hide");
    }
  });
}

showBoxes();
