class CartList {
    constructor(container = '.cart') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getCartProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
            });
    }
    _getCartProducts() {
    return fetch(`${API_URL}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        });
    }
    calcSum(){
        return this.allProducts.reduce((sum, item) => sum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    //добавление товара в корзину
    addCartItem(CartItem) {

    }

    //очистка корзины
    clearCart() {

    }

    //оплата товаров
    pay() {

    }
    
}

class CartItem {
    constructor(product, image = 'https://placehold.it/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.image = image;
    }
    render() {
        return `<div class="product-item">
                    <h3>${this.product_name}</h3>
                    <img src="${this.image}">
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`
    }

    //удаление товара из корзины
    deleteCartItem() {

    }

    //добавление еще одной единицы товара
    plusCartItem() {

    }

    //удаление одной единицы товара
    minusCartItem() {

    }
}

let listCart = new CartList();
