const images=["01.jpeg","02.jpeg","03.jpeg","04.jpeg","05.jpeg","06.jpeg","07.jpeg"];

const choseImg=images[Math.floor(Math.random()*images.length)];

const bgImg=document.createElement("img");

bgImg.src=`img/${choseImg}`;

document.body.appendChild(bgImg);