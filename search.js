var selEl = document.getElementById("select");
selEl.addEventListener("change", appObj.getValue);
var searchEl = document.getElementById("searchBtn");
searchEl.addEventListener("click", appObj.searchBooks);
var searchBack = document.getElementById("searchBack");
searchBack.addEventListener("click", function () {
    changePage.innerHTML = "";
    tab.innerHTML = "";
    table.classList.add("d-none");
});
