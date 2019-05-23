

let orderCount = 0;
const takeOrder = (topping , base) => {
    console.log(`Pizza with ${topping} and ${base}`);
    orderCount++;
    console.log(orderCount)
}

takeOrder("pineapple", "thin base");
takeOrder("pepperoni", "thick base");
