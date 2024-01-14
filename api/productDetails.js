

const url = new URL(location.href);

const id = url.searchParams.get("id");


/*async function fetchSingleProduct(id) {
    
      const response = await fetch(url);
      
        const data = await response.json();
        return data;
  }*/
  
 /* async function renderSingleProduct() {
    const id = params.get("id");
    if (!id) {
      console.error("No 'id' parameter found in the url.");
      return;
    }
    const singleData = await fetchSingleProduct(id);
    const productWrapper = document.getElementById("product-wrapper");
    productWrapper.innerHTML = JSON.stringify(singleData);
   
  }
  
  renderSingleProduct();*/