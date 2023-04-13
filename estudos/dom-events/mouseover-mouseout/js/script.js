// evento mouseover
var title = document.querySelector('#title')

title.addEventListener("mouseover", function() {

    this.style.backgroundColor = "yellow"

})



// evento mouseout
title.addEventListener("mouseout", function() {

    this.style.backgroundColor = "white"

})



//afetar outro elemento com mouseover
var subtitle = document.querySelector('.subtitle')

subtitle.addEventListener("mouseover", function() {

    let legenda = document.querySelector("#legenda")

    legenda.classList.remove("hide");
})


subtitle.addEventListener("mouseout", function() {

    let legenda = document.querySelector("#legenda")

    legenda.classList.add("hide")
})
