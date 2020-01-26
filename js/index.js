const url = "https://api.punkapi.com/v2/beers/random";
let beerMas = [];
document.addEventListener("DOMContentLoaded", init());
function init() {
    fetch(url)  
    .then(  
        function(response) {  
        if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
            response.status);  
            return;  
        }
        response.json()
    .then(function(data) {  
            console.log(data);  
            beerMas.push([data[0].name,data[0].description,data[0].image_url]);
        });  
        }  
    )  
    .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
    });
}
function createCard(i) {
    window["beerName"+i] = beerMas[0][0];
    window["beerDescr"+i] = beerMas[0][1];
    window["beerImg"+i] = beerMas[0][2];
    window["card"+i] = document.createElement("div");
    window["card"+i].setAttribute("class", "beer-card");
    document.body.insertAfter(window["card"+i], document.querySelector('header'));
    beerMas[0].pop();
}

createCard(0);