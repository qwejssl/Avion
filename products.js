const loadMoreBtn = document.querySelector(".allProd_btn");
const productBlock = document.querySelector(".all_products-block");
const productItem = document.querySelector(".all_products-menu");

loadMoreBtn.onclick = () => {
    productBlock.innerHTML = productItem;
}