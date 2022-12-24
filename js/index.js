const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        var value = searchInput.value;
        value = value.toLowerCase();
        value = value[0].toUpperCase() + value.slice(1);
        
        if(value){
          window.location.href = "read.html?" + value;  
        }
    }
})

