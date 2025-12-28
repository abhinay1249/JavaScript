import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {

    try {

        // throw 'error-1';

        await loadProductsFetch();

        await new Promise((resolve,reject) => {
            // throw 'error-2';
            loadCart(() => {
                // reject('error-3');
                resolve('promise-2');
            });
        });
    } catch(error) {
        console.log("Unexpected error, Please try again later.");
        console.log(error);
    }

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();

}

loadPage();

// --------------- Promise ----------------------

// Promise.all([
//     loadProductsFetch(),

//     new Promise((resolve) =>{
//         loadCart(()=>{
//             resolve('promise-2');
//         });
//     })
// ]).then((values)=>{
//     console.log(values);
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// ------------ Call Back ----------------

// loadProducts(()=>{

//     loadCart(()=>{
//         renderCheckoutHeader();
//         renderOrderSummary();
//         renderPaymentSummary();
//     });

// });


