import { apiURL, wcURL } from "./constant.js";

const currentURL = window.location.href;

const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');

const singleProdPath = `${wcURL}/${id}`;

const url = new URL(singleProdPath, apiURL);


async function fetchSingleProduct() {
    
      const response = await fetch(url);
      
        const data = await response.json();

        renderSingleProduct(data);
  }

  
function renderSingleProduct(data) {
 const container = document.querySelector("#singleProd");
 const img = container.querySelector('.prod-main-img');
 const pricetag = container.querySelector('.prod-price-tag');
 const titleTag = container.querySelector(".card-body")

 titleTag.textContent = data.name;
 img.src = data.images[0].src;
 img.srcset = data.images[0].srcset;
 pricetag.innerHTML = `${(data.prices.price/100).toFixed(2)} NOK`
 
 
}

fetchSingleProduct();