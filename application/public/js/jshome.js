let mainDiv = document.getElementById("container1");
var photoArray = [];
if (mainDiv){
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

function createPhotoCard(data, containerDiv){
    var img = document.createElement("img");
    counter = counter +1;
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
            document.getElementById("items-count").innerText = "There are " + document.getElementById("container1").childElementCount +  " photo(s) being shown";

        }
          
    }, 25);
    
    
    


    }