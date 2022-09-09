let productName=document.querySelector("#productName");
let ProductPrice=document.querySelector("#ProductPrice");
let ProductCatogry=document.querySelector("#ProductCatogry");
let ProductDescription=document.querySelector("#ProductDescription");
let Productsquantity=document.querySelector('#Productsquantity')
let updateBtn=document.querySelector('#updateBtn')
let mood='add product'
let productList;
let tmp;
let addProduct=document.querySelector("#addProduct")
let btn=document.querySelector('.btn')
addProduct.addEventListener('click',function () {
    pushProduct()
})
let searchItem=document.querySelector('#searchItem')
searchItem.addEventListener('input',function () {
    searchProduct(this.value)
})

if (localStorage.getItem('productList') !=null) {
    productList=JSON.parse(localStorage.getItem('productList'));
    displayProduct(productList)
} else {
    productList=[];
}
//-------------------------
//add function
function pushProduct(){
    let product={
        name:productName.value,
        price:ProductPrice.value,
        catogery:ProductCatogry.value,
        description:ProductDescription.value,
        Productsquantity:Productsquantity.value,

    }
    if (mood==='add product') {
        productList.push(product)
        localStorage.setItem('productList',JSON.stringify(productList))
    } else {
        productList[tmp]=product
        localStorage.setItem('productList',JSON.stringify(productList))
        mood='add product'
        addProduct.innerHTML='add product'
    }

    displayProduct(productList)
    clear()
    }
    //-------------------------
    //display function
function displayProduct(list) {
    
    let cartona=" ";
    for (let i = 0; i < list.length; i++) {
        
        cartona+=`<tr >
        <td>${i+1}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price} <span class=" text-primary fs-6 fw-bold">LE</span> </td>
        <td>${list[i].catogery}</td>
        <td>${list[i].description}</td>
        <td>${list[i].Productsquantity}<span class=" text-primary fs-6 fw-bold "> Items</span> </td>
        <td>
            <button onclick="update(${i})" class="btn btn-update-style ">update</button>
        </td>
        <td>
            <button onclick="deleteItem(${i})"  class="btn btn-delete-style">delete</button>
        </td>
    </tr>`
    }
    document.getElementById("data").innerHTML=cartona;
    
}
//------------------------
//clear function
function clear() {
    productName.value="";
    ProductPrice.value="";
    ProductCatogry.value="";
    ProductDescription.value="";
    Productsquantity.value="";
}
//-------------------------
//update function
function update(index){
    productName.value=productList[index].name;
    ProductPrice.value=productList[index].price;
    ProductCatogry.value=productList[index].catogery;
    ProductDescription.value=productList[index].description;
    addProduct.innerHTML='update'
    mood='update'
    tmp=index;
    

}
//-------------------------------
//delete function
function deleteItem(index){
    productList.splice(index,1)
    localStorage.setItem('productList',JSON.stringify(productList))
    displayProduct(productList)
    }
//--------------------------------------
    //search function
function searchProduct(searchTerm) {
    let searchResult=[];
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true){
            searchResult.push(productList[i])
        }
    }
    displayProduct(searchResult)
}




