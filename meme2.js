// const imageInput = document.querySelectorAll(".imageInput");
// const topInput = document.querySelector('.topInput');
// const bottomInput = document.querySelector('.bottomInput');
// const canvas = document.querySelector('.memeCanvas');
// const submit = document.querySelector('.submit');

// submit.addEventListener('submit', function(e){
//     let topText = topInput.innerText;
//     let bottomText = bottomInput.innerText;
//     let image = imageInput.innerText;
//     let ctx = canvas.getContext('2d');
//     ctx.font = '30px Arial';
//     e.preventDefault();
//     canvas.append(topText);
//     console.log(topText);
// })
const form = document.querySelector('.form-submit');
const canvas = document.querySelector('.memeCanvas');

form.addEventListener('submit', function(e){
    e.preventDefault();
    createMemeDiv();
    form.reset();
});

canvas.addEventListener('click', function(e){
    if (e.target.tagName === 'CANVAS'){
        e.target.parentElement.remove();
    }
});

const createMemeDiv = () => {
    const meme = document.createElement('div');
    const deleteX = document.createElement('span');
    deleteX.innerText = 'X';
    deleteX.className = 'delete';
    meme.appendChild(deleteX);
    canvas.appendChild(meme);
    meme.className = 'meme';

    // Add image src and set as background

    const urlInput = document.querySelector('.imageInput');
    const memeImg = document.createElement('img');
    memeImg.className = 'img';
    memeImg.setAttribute('src', urlInput);

    // Add top text and classname

    const topInput = document.querySelector('.topInput');
    const topText = document.createElement('h2');
    topText.className = 'top';
    topText.innerText = topInput;

    // Add bottom text and classname

    const bottomText = document.createElement('h2');
    const bottomInput = document.querySelector('.bottomInput');
    bottomText.className = 'bottom';
    bottomText.innerText = bottomInput;

    //append to meme div
    meme.appendChild(memeImg);
    meme.appendChild(topText);
    meme.appendChild(bottomText);
};
//reference
// const form = document.querySelector('.form')
// const displayMeme = document.querySelector('.display')

// form.addEventListener('submit', (e) => {
// 	e.preventDefault()
// 	createMemeDiv()
// 	form.reset()
// })

// displayMeme.addEventListener('click', (e) => {
// 	if (e.target.tagName === 'SPAN') {
// 		e.target.parentElement.remove()
// 	}
// })

// const createMemeDiv = () => {
// 	const meme = document.createElement('div')
// 	const deleteX = document.createElement('span')
// 	deleteX.innerText = 'X'
// 	deleteX.className = 'delete'
// 	meme.appendChild(deleteX)
// 	displayMeme.appendChild(meme)
// 	meme.className = 'meme'

// 	// Add image src and set it as background
// 	const urlInput = document.querySelector('input[name=meme-url]').value
// 	const memeImg = document.createElement('img')
// 	memeImg.className = 'img'
// 	memeImg.setAttribute('src', urlInput)

// 	// Add top text and add classname
// 	const topInput = document.querySelector('input[name=top-text]').value
// 	const topText = document.createElement('h2')
// 	topText.className = 'top'
// 	topText.innerText = topInput

// 	// Add bottom text and add classname
// 	const bottomText = document.createElement('h2')
// 	const bottomInput = document.querySelector('input[name=bottom-text]').value
// 	bottomText.className = 'bottom'
// 	bottomText.innerText = bottomInput

// 	// Append to the meme div
// 	meme.appendChild(memeImg)
// 	meme.appendChild(topText)
// 	meme.appendChild(bottomText)