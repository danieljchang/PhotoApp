
let mainDiv = document.getElementById("container1");
var photoArray = [];
if (mainDiv) {
    let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos"
    fetch(fetchURL)
        .then((data) => data.json())
        .then((photos) => {
            let innerHTML = "";
            photos.forEach((photo) => {
                createPhotoCard(photo, mainDiv);
                photoArray.push(photo)
            });
            document.getElementById("items-count").innerHTML = `There are ${photos.length} photo(s) being shown`;
        })
}



var counter = 50;

function createPhotoCard(data, containerDiv) {
    var img = document.createElement("img");
    counter = counter + 1;
    img.src = data.url;
    img.setAttribute("alt", "Supposed to be a picture");

    var div3 = document.createElement("div");
    var text = document.createTextNode(data.title);
    var textTag = document.createElement("h4")
    textTag.setAttribute("class", "title")
    div3.setAttribute("id", counter);
    div3.setAttribute("class", "fadeOut");
    textTag.appendChild(text);
    div3.addEventListener('click', fadeOut);
    containerDiv.appendChild(div3);
    document.getElementById(counter).appendChild(img);
    document.getElementById(counter).appendChild(textTag);
}


function fadeOut(event) {
    let clickDiv = event.currentTarget;
    var intervalID = setInterval(function () {

        if (!clickDiv.style.opacity) {
            clickDiv.style.opacity = 1;
        }


        if (clickDiv.style.opacity > 0) {
            clickDiv.style.opacity -= 0.1;
        }

        else {
            clearInterval(intervalID);
            clickDiv.remove();
            document.getElementById("items-count").innerText = "There are " + document.getElementById("container1").childElementCount + " photo(s) being shown";

        }

    }, 25);





}

function setFlashMessageFadeOut(flashMessageElement){
    setTimeout(() =>{
        let currentOpacacity = 1.0;
        let timer = setInterval(() =>{
            if (currentOpacacity < 0.05){
                clearInterval(timer);
                flashMessageElement.remove();
            }
            currentOpacacity = currentOpacacity - 0.05;
            flashMessageElement.style.opacity = currentOpacacity;
        }, 50);
    }, 4000);
}


function addFlashFromFrontEnd(message){
    let flashMessageDiv = documnet.createElement('div');
    let innerFlashDiv = document.createElement('div');
    let innerTextNode = document.createTextNode(message);
    innerFlashDiv.appendChild(innerTextNode);
    flashMessageDiv.appendChild(innerFlashDiv);
    flashMessageDiv.setAttribute('id', 'flash-message');
    innerFlashDiv.setAttribute('class', 'alert alert-info');
    document.getElementsByTagName('body')[0].appendChild(flashMessageDiv);
    setFlashMessageFadeOut(flashMessageDiv);
}

function createCard(postData){
    return `<div id="post-${postData.id}" class="card">
    <img class = "card-image" src="${postData.thumbnail}" alt="">
    <div class ="card-body">
        <p class="card-title">${postData.title}</p>
        <p class="card-desc">${postData.description}</p>
        <a href="/post/${postData.id}" class="anchor-buttons">Post Details</a>
    </div>
</div>`;
}

function executeSearch(){
    let searchTerm = document.getElementById('search').value;
    if(!searchTerm){
        location.replace('/homepage');
        return;
    }
    let mainContent =document.getElementById('main-content');
    let searchURL = `/posts/search?search=${searchTerm}`
    fetch(searchURL)
    .then((data) => {
        return data.json();
    })
    .then((data_json) =>{
        let newMainContentHTML = '';
        data_json.results.forEach((row) =>{
            newMainContentHTML += createCard(row);
        });
        mainContent.innerHTML = newMainContentHTML;
        if(data_json.message){
            addFlashFromFrontEnd(data_json.message);
        }
    })
    .catch((err) => console.log(err));
}

let flashElement = document.getElementById('flash-message');
if(flashElement){
    setFlashMessageFadeOut(flashElement);
}



let searchButton = document.getElementById('search-button');
if(searchButton){
    searchButton.onclick = executeSearch;
}
