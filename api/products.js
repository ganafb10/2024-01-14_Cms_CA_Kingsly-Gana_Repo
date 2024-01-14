
import { apiURL, wcURL } from "./constant.js";

const url = new URL(wcURL,apiURL);

const template = `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
<form class="card" action="productDetails.html" method="get">
<input type="hidden" name = "id"/>
<img src="" alt="" class="card-img">
<div class="card-body">Hello I am products</div>
<div class="list-group list-group-flush">
  <div class="list-group-item">price: 123</div>
</div>
<div class="card-footer">
  <button class="btn btn-success">Buy Now</button>
</div>
</form>
</div>`


export async function getProducts(options){
    const response = await fetch (url);
    if(response.ok){
        return await response.json();
    }
    throw new Error("Invalid request")
 }
 

 function getSrcFromProduct(productData){
    return productData.images[0].src
 }

 function getPriceForProduct(productData){
    return `${(productData.prices.price/100).toFixed(2)} NOK`;

 }

 function getAttributes(){
    const attributes = productData.attributes;
 }

 export function renderProducts(productData){
    const container = document.createElement("div");
    container.innerHTML=template;
    const img = container.querySelector("img");
    const title = container.querySelector(".card-body");
    const price = container.querySelector(".list-group-item:first-child");
    const input = container.querySelector("input");
    
    img.src = getSrcFromProduct(productData);
    title.textContent = productData.name;
    price.textContent = getPriceForProduct(productData);

    input.value = productData.id;

    return container.querySelector(".col-12");

 }
 