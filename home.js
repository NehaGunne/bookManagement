var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var changePage = document.getElementById("changePage");
var body = document.getElementsByTagName("body");
var table = document.getElementById("table1");
function getSearchPage() {
    return __awaiter(this, void 0, void 0, function () {
        var page, res, script;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./search.html")];
                case 1:
                    page = _a.sent();
                    return [4 /*yield*/, page.text()];
                case 2:
                    res = _a.sent();
                    changePage.innerHTML = res;
                    table.classList.add("d-none");
                    script = document.createElement("script");
                    script.src = "./search.js";
                    document.body.appendChild(script);
                    return [2 /*return*/];
            }
        });
    });
}
function getAddPage() {
    return __awaiter(this, void 0, void 0, function () {
        var page, res, script;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./add.html")];
                case 1:
                    page = _a.sent();
                    return [4 /*yield*/, page.text()];
                case 2:
                    res = _a.sent();
                    changePage.innerHTML = res;
                    table.classList.add("d-none");
                    script = document.createElement("script");
                    script.src = "./add.js";
                    document.body.appendChild(script);
                    return [2 /*return*/];
            }
        });
    });
}
var BookManager = /** @class */ (function () {
    function BookManager() {
    }
    BookManager.prototype.searchByTitle = function (res, inpVal, books) {
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var i = books_1[_i];
            if (i.title === inpVal) {
                res.push(i);
            }
        }
        return res;
    };
    BookManager.prototype.searchByAuthor = function (res, inpVal, books) {
        for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
            var i = books_2[_i];
            if (i.author === inpVal) {
                res.push(i);
            }
        }
        return res;
    };
    BookManager.prototype.searchByRating = function (res, inpVal, books) {
        for (var _i = 0, books_3 = books; _i < books_3.length; _i++) {
            var i = books_3[_i];
            if (i.rating >= parseFloat(inpVal)) {
                res.push(i);
            }
        }
        return res;
    };
    BookManager.prototype.searchByPrice = function (res, min, max, books) {
        for (var _i = 0, books_4 = books; _i < books_4.length; _i++) {
            var i = books_4[_i];
            if (i.price >= min && i.price <= max) {
                res.push(i);
            }
        }
        return res;
    };
    return BookManager;
}());
var result = [];
var tab = document.getElementById("tbody");
var originalTable = document.getElementById("table2");
var count = 0;
var BookApp = /** @class */ (function () {
    function BookApp() {
    }
    BookApp.prototype.addBook = function (each) {
        var title = each.title, author = each.author, rating = each.rating, price = each.price, id = each.id;
        var row = "<tr id=" + id + ">\n                <td>" + title + "</td>\n                <td>" + author + "</td>\n                <td>" + rating + "</td>\n                <td>" + price + "</td>\n                <td>\n                <button class=\"delete\">\n                <i class=\"fas fa-trash-alt\"></i>\n                </button>\n                </td>\n            </tr>";
        tab.innerHTML += row;
    };
    BookApp.prototype.getBooksList = function (booksList) {
        table.classList.remove("d-none");
        for (var _i = 0, booksList_1 = booksList; _i < booksList_1.length; _i++) {
            var i = booksList_1[_i];
            appObj.addBook(i);
        }
        count++;
    };
    BookApp.prototype.searchBooks = function () {
        var inp = document.getElementById("searchInput");
        result = [];
        tab.innerHTML = "";
        var inpVal = inp.value;
        console.log(inpVal);
        var selEl = document.getElementById("select");
        var selValue = selEl.value;
        if (selValue === "name") {
            result = manager.searchByTitle(result, inpVal, books);
        }
        else if (selValue === "author") {
            result = manager.searchByAuthor(result, inpVal, books);
        }
        else if (selValue === "rating") {
            result = manager.searchByRating(result, inpVal, books);
        }
        else if (selValue === "price") {
            var minPrice = document.getElementById("priceMin");
            var maxPrice = document.getElementById("priceMax");
            var min = parseInt(minPrice.value);
            var max = parseInt(maxPrice.value);
            result = manager.searchByPrice(result, min, max, books);
        }
        console.log(result);
        table.classList.remove("d-none");
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var i = result_1[_i];
            appObj.addBook(i);
        }
    };
    BookApp.prototype.getValue = function () {
        var selEl = document.getElementById("select");
        var selValue = "";
        var priceCont = document.getElementById("price");
        var othersCont = document.getElementById("otherThanPrice");
        var inp = document.getElementById("searchInput");
        inp.placeholder = "enter " + selEl.value;
        selValue = selEl.value;
        priceCont.classList.add("d-none");
        othersCont.classList.remove("d-none");
        if (selValue === "price") {
            priceCont.classList.remove("d-none");
            othersCont.classList.add("d-none");
        }
    };
    BookApp.prototype.getAddingDetails = function () {
        var addNameInp = document.getElementById("bookName");
        var addAuthorInp = document.getElementById("bookAuthor");
        var addRatingInp = document.getElementById("bookRating");
        var addPriceInp = document.getElementById("bookPrice");
        var name = addNameInp.value;
        var author = addAuthorInp.value;
        var rating = parseFloat(addRatingInp.value);
        var price = parseInt(addPriceInp.value);
        var msg = document.getElementById("msg");
        if (name == "" || author == "" || rating == NaN || price == NaN) {
            alert("enter all the details");
        }
        else if ((!(name == "" || author == "" || rating == NaN || price == NaN))) {
            msg.classList.remove("d-none");
            addToServer(name, author, rating, price);
        }
    };
    BookApp.prototype.onDeleteRow = function (e) {
        e.preventDefault();
        if (!e.target.classList.contains("delete")) {
            return;
        }
        var btn = e.target;
        btn.closest("tr").remove();
        var delEl = e.target.parentElement.parentElement.id;
        console.log(delEl);
        for (var _i = 0, books_5 = books; _i < books_5.length; _i++) {
            var i = books_5[_i];
            if (i.id == delEl) {
                var index = books.indexOf(i);
                books.splice(index, 1);
                deleteFromServer(i.id);
            }
        }
    };
    return BookApp;
}());
function addToServer(name, author, rating, price) {
    return __awaiter(this, void 0, void 0, function () {
        var rec, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("i am called");
                    rec = {
                        title: name,
                        author: author,
                        rating: rating,
                        price: price
                    };
                    options = {
                        method: "POST",
                        body: JSON.stringify(rec),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    };
                    console.log(options);
                    return [4 /*yield*/, fetch("http://localhost:3000/books", options)];
                case 1:
                    _a.sent();
                    getBooks();
                    return [2 /*return*/];
            }
        });
    });
}
function deleteFromServer(id) {
    return __awaiter(this, void 0, void 0, function () {
        var url, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(id);
                    url = "http://localhost:3000/books/" + id;
                    options = {
                        method: "DELETE"
                    };
                    return [4 /*yield*/, fetch(url, options)];
                case 1:
                    _a.sent();
                    getBooks();
                    return [2 /*return*/];
            }
        });
    });
}
var manager = new BookManager;
var appObj = new BookApp();
var books = null;
function getBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var url, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:3000/books";
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    books = _a.sent();
                    console.log(books);
                    return [2 /*return*/];
            }
        });
    });
}
getBooks();
var bookList = document.getElementById("bookList");
bookList.addEventListener("click", function () {
    appObj.getBooksList(books);
});
tab.addEventListener("click", appObj.onDeleteRow);
