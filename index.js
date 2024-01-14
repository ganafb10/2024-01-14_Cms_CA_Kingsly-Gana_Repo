
//import { getPosts } from "./api/posts.js";
import { getProducts} from "./api/products.js";
import { renderProducts } from "./api/products.js";

getProducts(null,false).then(console.log)

//getPosts().then(console.log)

async function productsPage(){
    const products = await getProducts();
    const render = products.map(renderProducts)
    const row = document.querySelector(".row");
    
    row.append(...render)
}
productsPage()