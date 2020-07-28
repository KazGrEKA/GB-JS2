class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [
            {
                id: 1,
                title: 'Notebook',
                price: 2000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50
            },
        ];
    }
    
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

class ProductItem {
    constructor(product, image = 'https://placehold.it/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.image = image;
    }
    render() {
        return `<div class="product-item">
                    <h3>${this.title}</h3>
                    <img src="${this.image}">
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`
    }
}

let list = new ProductsList();