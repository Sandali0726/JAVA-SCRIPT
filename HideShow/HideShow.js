const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

//---------visibility -> used to show space for hidden element-------

 myButton.addEventListener("click", event => {
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";

    }
    
});
// myImg.style.display = "none";});

// --------Not allocate space for hidden element -----------
myButton.addEventListener("click", event => {
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "Show";

    }
    
});