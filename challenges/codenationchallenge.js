let orderCount = 0;
const takeOrder = (topping1 , topping2 , topping3 , topping4 , topping5) => {
    console.log(`Sandwich sub with ${topping1}, ${topping2}, ${topping3}, ${topping4} and ${topping5}`);
    orderCount++;
    console.log(orderCount)
}
takeOrder("cheese", "tomato", "bacon", "lettuce", "brown bread");
