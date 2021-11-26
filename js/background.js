const images = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `../img/${chosenImage}`;

document.body.appendChild(bgImg);
bgImg.className = "bg-img";