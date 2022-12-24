const title_elem = document.querySelector(".article-title"),
description_elem = document.querySelector(".article-description");


var search = window.location.search.substr(1);



if(search){
    var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=" + search;

    fetch(api)
    .then(response => response.json())
    .then(response => {
        response = response.query.pages;
        var pageid = Object.keys(response)[0];
        var extract = response[pageid].extract;
        search = search.replaceAll("%20", " ");
        title_elem.innerHTML = search;
        description_elem.innerHTML = extract;
        if(description_elem.innerHTML == "undefined"){
            description_elem.innerHTML = "We are sorry, but we couldn't find any articles related to " + "'" + search + "'" + "." + " You can click the icon on top-left to go back."
        }
        if(title_elem.innerHTML == "Dsa"){
            description_elem.innerHTML = "We are sorry, but we couldn't find any articles related to " + "'" + search + "'" + "." + " You can click the icon on top-left to go back."
        }
        if(title_elem.innerHTML == "Das"){
            description_elem.innerHTML = "We are sorry, but we couldn't find any articles related to " + "'" + search + "'" + "." + " You can click the icon on top-left to go back."
        }
        if(title_elem.innerHTML == "Ide"){
            description_elem.innerHTML = "We are sorry, but we couldn't find any articles related to " + "'" + search + "'" + "." + " You can click the icon on top-left to go back."
        }
        if(title_elem.innerHTML == "Html"){
            description_elem.innerHTML = "We are sorry, but we couldn't find any articles related to " + "'" + search + "'" + "." + " You can click the icon on top-left to go back."
        }
    })

}


