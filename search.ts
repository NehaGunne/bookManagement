let selEl=document.getElementById("select") as HTMLSelectElement;
selEl.addEventListener("change",appObj.getValue);


let searchEl=document.getElementById("searchBtn") as HTMLButtonElement;
searchEl.addEventListener("click",appObj.searchBooks);


let searchBack=document.getElementById("searchBack") as HTMLButtonElement;
searchBack.addEventListener("click",function(){
    changePage.innerHTML="";
    tab.innerHTML="";
    table.classList.add("d-none");
});