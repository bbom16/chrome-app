const images = ["sky00.jpeg", "sky01.jpeg", "sky02.jpeg", "sky03.jpeg", "sky04.jpeg"];
const choseImg = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${choseImg})`;

// const bgImg = document.createElement("img");

// bgImg.src = `img/${choseImg}`;
// bgImg.classList = "bg-img";
// document.body.appendChild(bgImg);