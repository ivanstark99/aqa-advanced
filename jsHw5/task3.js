function checkOrder(available, ordered){
    if (ordered === 0) {
        console.log('Your order is empty');
    } else if (ordered > available) {
        console.log ('Your order is too large, we don’t have enough goods.');
    } else if (available > ordered) {
        console.log ('Your order is accepted');
    }
}
checkOrder(200, 0)
checkOrder(200, 250)
checkOrder(200, 150)