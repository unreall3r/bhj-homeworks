document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        const target = event.target;
        
        if (target.classList.contains("product__quantity-control")) {
            const quantityValue = target.parentElement.querySelector(".product__quantity-value");
            let quantity = parseInt(quantityValue.textContent);
            
            if (target.classList.contains("product__quantity-control_inc")) {
                quantity++;
            } else if (target.classList.contains("product__quantity-control_dec")) {
                quantity = Math.max(1, quantity - 1);
            }
            
            quantityValue.textContent = quantity;
        }
        
        if (target.classList.contains("product__add")) {
            const product = target.closest(".product");
            const productId = product.dataset.id;
            const productImage = product.querySelector(".product__image");
            const quantity = parseInt(product.querySelector(".product__quantity-value").textContent);
            const cart = document.querySelector(".cart__products");
            
            let cartProduct = cart.querySelector(`.cart__product[data-id='${productId}']`);
            
            if (cartProduct) {
                let cartProductCount = cartProduct.querySelector(".cart__product-count");
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + quantity;
            } else {
                cartProduct = document.createElement("div");
                cartProduct.className = "cart__product";
                cartProduct.dataset.id = productId;
                cartProduct.innerHTML = `
                    <img class="cart__product-image" src="${productImage.src}">
                    <div class="cart__product-count">${quantity}</div>
                `;
                cart.appendChild(cartProduct);
            }
            
            const productRect = productImage.getBoundingClientRect();
            const cartRect = cartProduct.querySelector(".cart__product-image").getBoundingClientRect();
            
            const clone = productImage.cloneNode(true);
            document.body.appendChild(clone);
            
            clone.style.position = "absolute";
            clone.style.left = `${productRect.left}px`;
            clone.style.top = `${productRect.top}px`;
            clone.style.width = `${productRect.width}px`;
            clone.style.height = `${productRect.height}px`;
            clone.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
            
            requestAnimationFrame(() => {
                clone.style.transform = `translate(${cartRect.left - productRect.left}px, ${cartRect.top - productRect.top}px) scale(0.5)`;
                clone.style.opacity = "0";
            });
            
            setTimeout(() => {
                clone.remove();
            }, 500);
        }
    });
});
