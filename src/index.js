console.log('%c HI', 'color: firebrick')

function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => {
        data.message.forEach((images) => addImage(images))
    })
};

function addImage(dogPic) {
    let container = document.querySelector('#dog-image-container');
    let image2 = document.createElement('img');
    image2.src = dogPic;
    container.append(image2);
}

function getBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        const breeds = Object.keys(data.message);
        //const ul = document.querySelector('#dog-breeds');
        updateBreeds(breeds);
        dropDown();
    })
}

function updateBreeds(breeds) {
    breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {
    const ul = document.querySelector('#dog-breeds');
    //console.log(ul);
    const li = document.createElement('li');
    li.innerText = breed;
    ul.append(li);
    li.addEventListener('click', updateColor);
}

function updateColor(e) {
    e.target.style.color = "palevioletred";
}
function selectBreeds(letter) {
    updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function dropDown() {
    let breedDrop = document.querySelector('#breed-dropdown');
    breedDrop.addEventListener('change', function(event) {
        selectBreeds(event.target.value);
    });
}


function dogs() {
    getImage();
    getBreed();
}

document.addEventListener("DOMContentLoaded", dogs());