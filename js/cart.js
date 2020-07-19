
class Cart {
    constructor() {

    }
    
    //добавление товара в корзину
    addCartItem(CartItem) {
        
    }
    
    //очистка корзины
    clearCart(){
        
    }
    
    //подсчет общей стоимости
    totalCartPrice(){
        let sum = 0;
        this.goods.forEach(good => {
            sum += Number(good.price);
        });
       return sum;
    }
    
    //оплата товаров
    pay(){

    }
}

class CartItem {
    constructor() {
        
    }
    
    //удаление товара из корзины
    deleteCartItem(){
        
    }
    
    //добавление еще одной единицы товара
    plusCartItem(){
        
    }
    
    //удаление одной единицы товара
    minusCartItem(){
        
    }
}