interface Product {
    id: number;
    name: string;
    price: number;
    availability: string;
}

interface ElectronicProducts extends Product {
    warrantyMonths: number;
}

interface Footwear extends Product {
    size: number;
}

class Electronics implements ElectronicProducts {
    constructor(public id: number, public name: string, public price: number, 
        public availability: string, public warrantyMonths: number) { }
}

class Shoes implements Footwear {
    constructor(public id: number, public name: string, public price: number, 
        public availability: string, public size: number) { }
}

class CartItem {
    constructor(public product: Product, public quantity: number) {}

    getCost(): number { 
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    private items: CartItem[] = []

    addItem(item: CartItem): void {
        this.items.push(item)
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    clearCart(): void{
        this.items.splice(0, this.items.length);
    }

    getTotalCost(): number {
        return this.items.reduce((total, item) => total + item.getCost(), 0);
    } 

    checkoutCart(): void {
        console.log("Checkout Complete. Your Order Will be Delivered soon");

        // empty cart
        this.clearCart();
    }
}


const Phone = new Electronics(14, "Galaxy Fold 5", 899.99, "in stock", 6 );
// console.log(Phone)

const Sneakers = new Shoes(1914, "Chain Reaction", 149.99, "in stock", 10 );
// console.log(Sneakers)

const newPhone = new CartItem(Phone, 1);
const newShoes = new CartItem(Sneakers, 4);
// console.log("Cost of Shoes:", newShoes.getCost())

const cart1 = new ShoppingCart();
cart1.addItem(newPhone);
cart1.addItem(newShoes);

console.log(cart1);
console.log(cart1.getTotalCost());

// cart1.removeItem(1);
// console.log(cart1);

// cart1.checkoutCart();
// console.log(cart1)