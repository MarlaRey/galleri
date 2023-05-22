

/* kicks off app when the DOM is loaded */
window.addEventListener("load", generateGrid);



// globale variabler

const myImages = ['assets/img/Brachypelma_smithi.jpg', 'assets/img/elephant.jpg', 'assets/img/great-white.jpg', 'assets/img/koala.jpg', 'assets/img/standard_tiger.jpg']; // til array opgaven, byg dit array af billed urlér her.
const myApp = document.getElementById("app");

//Kalder funktionen Clear app 
//Loop gennem array'et myImages og send url til buildCard 
function generateGrid() {
    clearApp();

    myImages.map((imageUrl) => {
        buildCard(imageUrl);
    });
}

//Kræver en url 
//Opretter article tag 
//I article tag skal der oprettes et img tag med src fra tilsendt url 
//Add article til app dom element 
//Tilføj eventlistener tilknyttet img'en, der kan det som beskrevet i clickSmall 
function buildCard(myUrl) {
    let myArticleTag = document.createElement('article');

    let myImageTag = document.createElement('img');
    myImageTag.src = myUrl;
    myImageTag.addEventListener('click', clickSmall);

    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);
}

//Kræver et event eller skal være eventlistener 
//finder den url i myImages der er klikket på og send url til BuildBig 
function clickSmall(myEvent) {
    let myUrl = myEvent.target.src;
    BuildBig(myUrl);
}

//kræver url
//Kald clearApp 
//Byg article element med img elemenet med scr fra url 
//Tilføj eventlistener til billede med click der kalder generateGrid 
function BuildBig(myUrl) {
clearApp();
let myArticleTag = document.createElement('article');

let myImageTag = document.createElement('img');
myImageTag.src = myUrl;
myImageTag.addEventListener('click', generateGrid);

myArticleTag.appendChild(myImageTag);

myApp.appendChild(myArticleTag);
}

//slet alt html i app element 
function clearApp() {
    myApp.innerHTML = ""
}

