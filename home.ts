let changePage=document.getElementById("changePage");
let body=document.getElementsByTagName("body");
let table=document.getElementById("table1") as HTMLDivElement;

async function getSearchPage(){
    let page =await fetch("./search.html");
    let res=await page.text();
    changePage.innerHTML=res;
    table.classList.add("d-none");
    let script=document.createElement("script");
    script.src="./search.js";
    document.body.appendChild(script);
}
async function getAddPage(){
    let page =await fetch("./add.html");
    let res=await page.text();
    changePage.innerHTML=res;
    table.classList.add("d-none");
    let script=document.createElement("script");
    script.src="./add.js";
    document.body.appendChild(script);
    
}

class BookManager{
    searchByTitle(res,inpVal,books){
        for(let i of books){
            if(i.title===inpVal){
                res.push(i);
            }
        }
        return res;
    
    }
    searchByAuthor(res,inpVal,books){
        for(let i of books){
            if(i.author===inpVal){
                res.push(i);
            }
        }
        return res;
    
    }
    searchByRating(res,inpVal,books){
        for(let i of books){
            if(i.rating>=parseFloat(inpVal)){
                res.push(i);
            }
        }
        return res;
    
    }
    searchByPrice(res,min,max,books){
        for(let i of books){
            if(i.price>=min && i.price<=max){
                res.push(i);
            }
        }
        return res;
    
    }

    
    
}

let result=[];
let tab=document.getElementById("tbody") as HTMLTableElement;
let originalTable=document.getElementById("table2") as HTMLTableElement;

let count=0;
class BookApp{
     addBook(each){
        let {title,author,rating,price,id}=each;
        var row=`<tr id=${id}>
                <td>${title}</td>
                <td>${author}</td>
                <td>${rating}</td>
                <td>${price}</td>
                <td>
                <button class="delete">
                <i class="fas fa-trash-alt"></i>
                </button>
                </td>
            </tr>`;
        tab.innerHTML += row;
    }
     getBooksList(booksList){
        table.classList.remove("d-none");
            for(let i of booksList){
                appObj.addBook(i);
            }
            count++;
        
        }
        searchBooks(){
            let inp=document.getElementById("searchInput") as HTMLInputElement;
            result=[];
            tab.innerHTML="";
            let inpVal=inp.value;
            console.log(inpVal)
            let selEl=document.getElementById("select") as HTMLSelectElement;
            let selValue=selEl.value;
            if(selValue==="name"){
                result=manager.searchByTitle(result,inpVal,books);
            }
            else if(selValue==="author"){
                result=manager.searchByAuthor(result,inpVal,books);
            }
            else if(selValue==="rating"){
                result=manager.searchByRating(result,inpVal,books);
            }
            else if(selValue==="price"){
                let minPrice=document.getElementById("priceMin") as HTMLInputElement;
                let maxPrice=document.getElementById("priceMax") as HTMLInputElement;
                let min=parseInt(minPrice.value);
                let max=parseInt(maxPrice.value);
                result=manager.searchByPrice(result,min,max,books);
    
            }
            console.log(result)
            table.classList.remove("d-none");
            for(let i of result){
               appObj.addBook(i);
        
           } 
        }
         getValue(){
            let selEl=document.getElementById("select") as HTMLSelectElement;
            let selValue="";
            let priceCont=document.getElementById("price") as HTMLDivElement;
            let othersCont=document.getElementById("otherThanPrice") as HTMLDivElement;
            let inp=document.getElementById("searchInput") as HTMLInputElement;
            inp.placeholder="enter "+selEl.value;
            selValue=selEl.value;
            priceCont.classList.add("d-none");
            othersCont.classList.remove("d-none");
            if(selValue==="price"){
                priceCont.classList.remove("d-none");
                othersCont.classList.add("d-none");
            }
        }
    
     
    getAddingDetails(){
        let addNameInp=document.getElementById("bookName") as HTMLInputElement;
        let addAuthorInp=document.getElementById("bookAuthor") as HTMLInputElement;
        let addRatingInp=document.getElementById("bookRating") as HTMLInputElement;
        let addPriceInp=document.getElementById("bookPrice") as HTMLInputElement;
        let name=addNameInp.value;
        let author=addAuthorInp.value;
        let rating=parseFloat(addRatingInp.value);
        let price=parseInt(addPriceInp.value);
        let msg=document.getElementById("msg");
        if(name==""||author==""||rating==NaN||price==NaN){
            alert("enter all the details");
        }
        else if((!(name==""||author==""||rating==NaN||price==NaN))){
        msg.classList.remove("d-none");
        addToServer(name,author,rating,price);

    }
        
    }

 onDeleteRow(e){
     e.preventDefault();
    if(!e.target.classList.contains("delete")){
        return;
    }
    const btn=e.target;
    btn.closest("tr").remove();
    let delEl=e.target.parentElement.parentElement.id;
    console.log(delEl);
    for(let i of books){
        if(i.id==delEl){
            let index=books.indexOf(i);
            books.splice(index,1);
            deleteFromServer(i.id);
        }
    }
}
    

}
async function addToServer(name,author,rating,price){
    console.log("i am called");
    let rec={
        title:name,
        author:author,
        rating:rating,
        price:price
    }
    let options={
        method:"POST",
        body:JSON.stringify(rec),
        headers:{
            "Content-Type":"application/json"
        }
    };
    console.log(options)
    await fetch("http://localhost:3000/books",options);
    getBooks();
}
async function deleteFromServer(id){
    console.log(id);
    let url="http://localhost:3000/books/"+id;
    let options={
        method:"DELETE"

    }
     await fetch(url,options);
    getBooks();

}
const manager=new BookManager;
const appObj=new BookApp();
let books=null;
async function getBooks(){
    let url="http://localhost:3000/books"
    let res=await fetch(url);
    books=await res.json();
    console.log(books);

}
getBooks();

let bookList=document.getElementById("bookList");
bookList.addEventListener("click",function(){
    appObj.getBooksList(books);
});



tab.addEventListener("click",appObj.onDeleteRow);
