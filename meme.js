const imageInput = document.querySelectorAll(".imageInput");
const topInput = document.querySelector('.topInput');
const bottomInput = document.querySelector('.bottomInput');
const canvas = document.querySelector('.memeCanvas');



// let image;

// imageInput.addEventListener('change', function(e){
//     const imageDataUrl = URL.createObjectURL(e.target.files[0]);

//     image = new image();
//     image.src = imageDataUrl;

//     image.addEventListener('load', function(){
//         updateMemeCanvas(canvas, image, topInput.value, bottomInput.value);
//     }, { once: true });
// });

// topInput.addEventListener('change', function(){
//     updateMemeCanvas(canvas, image, topInput.value, bottomInput.value);
// });

// bottomInput.addEventListener('change', function(){
//     updateMemeCanvas(canvas, image, topInput.value, bottomInput.value);
// });

// function updateMemeCanvas(canvas, image, topText, bottomText){
//     const ctx = canvas.getContext('2d');
//     const width = image.width;
//     const height = image.height;
//     const fontSize = Math.floor(width / 10);
//     const yOffset = height / 25;

//     //update canvas background
//     canvas.width = width;
//     canvas.height = height;
//     ctx.drawImage(image, 0, 0);

//     //prepare text
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = Math.floor(fontSize / 4);
//     ctx.fillStyle = 'white';
//     ctx.textAlign = 'center';
//     ctx.lineJoin = 'round';
//     ctx.font = `${fontSize}px sans-serif`;

//     //add top text
//     ctx.textBaseline = 'top';
//     ctx.strokeText(topText, width / 2, yOffset);
//     ctx.fillText(topText, width / 2, yOffset);

//     //bottom top text
//     ctx.textBaseline = 'bottom';
//     ctx.strokeText(bottomText, width / 2, height - yOffset);
//     ctx.fillText(bottomText, width / 2, height - yOffset);
// };