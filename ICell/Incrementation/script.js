document.addEventListener("DOMContentLoaded", ()=>{
    const card = document.querySelectorAll(".card");
    let listItems = ["TEAMS", "COLLEGES","DEVELOPERS","VISITORS"];
    let l=0;
    card.forEach((e) => {
        e.innerHTML += `<div class="numCategory" id="${listItems[l].toLowerCase()}" ></div>`; 
        e.innerHTML += `<div class="inspect" >${listItems[l]}</div>`; 
        l++;
    });
})