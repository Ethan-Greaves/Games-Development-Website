var steamIcon = document.getElementById("steam-icon-link");
var androidIcon = document.querySelector("#android-icon-link");

steamIcon.addEventListener("mouseover", function (){EnlargeIcon(steamIcon)});
androidIcon.addEventListener("mouseover", function (){EnlargeIcon(androidIcon)});

steamIcon.addEventListener("mouseout", function (){ShrinkIcon(steamIcon)});
androidIcon.addEventListener("mouseout", function (){ShrinkIcon(androidIcon)});

function EnlargeIcon(icon){
    icon.classList.add("enlarge-icon"); 
}

function ShrinkIcon(icon){
    icon.classList.remove("enlarge-icon"); 
}