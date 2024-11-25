const cart = [
    { item: "노트북", price: 1200000, quantity: 1 }, 
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 } 
   ];
   
   let totalPrice = 0;
   for (let i=0; i<cart.length; i++)
   {
    totalPrice+= cart[i].price*cart[i].quantity;
   }
   console.log(`Total Price: ${totalPrice}`);
   
   totalPrice = 0;
   cart.forEach(good=>totalPrice+=good.price+good.quantity);
   console.log(`Total Price: ${totalPrice}`);
   
   
   totalPrice = cart.reduce((a,goods)=>(a+goods.price*goods.quantity),0);
   console.log(`Total Price: ${totalPrice}`);
 
   const itemTotal = cart.map(goods =>({
    item: goods.item,
    total: goods.price*goods.quantity
   }));

   console.log('제품별 금액:' ,itemTotal);

 