const myImage = document.querySelector("img");

myImage.onclick = function () {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/leksand-lake.webp") {
    myImage.setAttribute("src", "images/trieste-stairs-garden.webp");
  } else {
    myImage.setAttribute("src", "images/leksand-lake.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

