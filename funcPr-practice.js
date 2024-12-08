const cart = [
    { item: "laptop", price: 1200000, quantity: 1 },
    { item: "mouse", price: 35000, quantity: 2 },
    { item: "keyboard", price: 89000, quantity: 1 },
];
let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`Total price: ${totalPrice}`);

totalPrice = 0;

cart.forEach(goods => totalPrice += goods.price * goods.quantity);  
console.log(`Total price: ${totalPrice}`);


totalPrice = cart.reduce((res, goods) => (res + goods.price * goods.quantity), 0);
console.log(`Total price: ${totalPrice}`);


const itemTotals = cart.map(goods => ({
    item: goods.item,
    total: goods.price * goods.quantity
}
));
console.log('price total:',itemTotals);

const names=['alice','bob','charlie'];
const upperCaseNames=names.map(
    names=> names.toUpperCase()
);
console.log(upperCaseNames);

const capitalStartNames=names.map(
    
    names=>names.charAt(0).toUpperCase()+names.slice(1)
)
console.log(capitalStartNames);
