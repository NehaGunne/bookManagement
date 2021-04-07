var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", appObj.getAddingDetails);
var addBack = document.getElementById("addBack");
addBack.addEventListener("click", function () {
    changePage.innerHTML = "";
});
