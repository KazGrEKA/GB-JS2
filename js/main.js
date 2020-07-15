/*esversion:6*/
//Как можно упростить или сократить запись функций? - не представляю

const products = [
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
    {
        id: 5,
        title: 'Notebook 2',
        price: 2000
    },
    {
        id: 6,
        title: 'Mouse 2',
        price: 20
    },
    {
        id: 7,
        title: 'Keyboard 2',
        price: 200
    },
    {
        id: 8,
        title: 'Gamepad 2',
        price: 50
    },
    {
        id: 9 //проверка умолчаний
    },
];

const renderProduct = (title = 'Название', price = 'Цена') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderPage(products);
