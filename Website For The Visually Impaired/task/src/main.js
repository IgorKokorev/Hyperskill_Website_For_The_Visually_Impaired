const navContainer = document.getElementById('nav-container');
const accButton = document.getElementById('accessibility-button');
const html = document.querySelector('html');
const main = document.getElementById('main-container');

let accControls = false;
let showPictures = true;

let black = "#000";
let white = "#fff";
let yellow = "#f5d328";
let blue = "#002452";

function Image(id, tag, heading, description, imageSource, imageText) {
    this.id = id;
    this.tag = tag;
    this.heading = heading;
    this.description = description;
    this.imageSource = imageSource;
    this.imageText = imageText;
}

let images = [
    new Image(1, 'h1', 'Stupid Image 1', 'Quite stupid image', 'https://i.redd.it/dak6f07tersa1.jpg', 'Picture of a stupid cat'),
    new Image(2, 'h2', 'Stupid Image 2', 'Another stupid image', 'https://imgcdn.sigstick.com/RM2Eh7y3Nl8meOJSpJUV/cover-1.thumb256.png', 'Another picture of a stupid cat')
];

for (image of images) {
    const section = document.createElement('section');
    section.classList.add('item');
    const header = document.createElement(image.tag);
    header.textContent = image.heading;
    const paragraph = document.createElement('p');
    paragraph.textContent = image.description;
    const img = document.createElement('img');
    img.id = 'image-' + image.id;
    img.src = image.imageSource;
    img.alt = image.imageText;
    section.appendChild(img);
    section.appendChild(header);
    section.appendChild(paragraph);
    main.appendChild(section);
}

accButton.addEventListener('click', (e) => {
    if (accControls) {

        document.getElementById('font-size-group').remove();
        document.getElementById('color-group').remove();
        document.getElementById('hide-images-group').remove();

        accControls = false;
    } else {
        const fontSizeGroup = document.createElement('div');
        fontSizeGroup.id = 'font-size-group';
        fontSizeGroup.innerHTML = '<form action="[value]">\n' +
            '<span id="span-text">Change text size</span>\n' +
            '  <label><input type="radio" name="textSize" value="small" id="small-text">Small</label>\n' +
            '  <label><input type="radio" name="textSize" value="medium" id="medium-text">Medium</label>\n' +
            '  <label><input type="radio" name="textSize" value="large" id="large-text">Large</label>\n' +
            '  <label><input type="radio" name="textSize" value="larger" id="larger-text">Larger</label>\n' +
            '</form>';
        fontSizeGroup.addEventListener('click', (e) => {
            if (e.target.id === 'small-text') {
                html.style.fontSize = "16px";
            }
            if (e.target.id === 'medium-text') {
                html.style.fontSize = "24px";
            }
            if (e.target.id === 'large-text') {
                html.style.fontSize = "29px";
            }
            if (e.target.id === 'larger-text') {
                html.style.fontSize = "32px";
            }
        })
        navContainer.appendChild(fontSizeGroup);

        const colorGroup = document.createElement('div');
        colorGroup.id = 'color-group';
        colorGroup.innerHTML = '<form action="[value]">\n' +
            '<span id="span-color">Change colors</span>\n' +
            '  <label><input type="radio" name="color" value="white" id="white-theme">White theme</label>\n' +
            '  <label><input type="radio" name="color" value="yellow" id="yellow-theme">Yellow theme</label>\n' +
            '  <label><input type="radio" name="color" value="blue" id="blue-theme">Blue theme</label>\n' +
            '</form>';
        colorGroup.addEventListener('click', (e) => {
            if (e.target.id === 'white-theme') {
                html.style.color = black;
                html.style.backgroundColor = white;
            }
            if (e.target.id === 'yellow-theme') {
                html.style.color = black;
                html.style.backgroundColor = yellow;
            }
            if (e.target.id === 'blue-theme') {
                html.style.color = white;
                html.style.backgroundColor = blue;
            }
        })
        navContainer.appendChild(colorGroup);

        const hideImagesGroup = document.createElement('div');
        hideImagesGroup.id = 'hide-images-group';
        hideImagesGroup.innerHTML = '<button id="button-hide-images" onclick="hideImages()">Hide images</button>';
        navContainer.appendChild(hideImagesGroup);

        accControls = true;
    }
});

function hideImages() {
    if (showPictures) {
        for (image of images) {
            const img = document.getElementById('image-' + image.id);
            img.src = '#';
        }
    } else {
        for (image of images) {
            const img = document.getElementById('image-' + image.id);
            img.src = image.imageSource;
        }
    }
    showPictures = !showPictures;
}