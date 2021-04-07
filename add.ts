let addBtn=document.getElementById("addBtn") as HTMLButtonElement;
addBtn.addEventListener("click",appObj.getAddingDetails);

let addBack=document.getElementById("addBack") as HTMLButtonElement;
addBack.addEventListener("click",function(){
    changePage.innerHTML="";
});