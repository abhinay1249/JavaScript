import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import{renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

Promise.all([
    new Promise((resolve) =>{
        loadProducts(() =>{
            resolve('promise-1');
        });
    }),

    new Promise((resolve) =>{
        loadCart(()=>{
            resolve('promise-2');
        });
    })
]).then((values)=>{
    console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});


// ------------ Call Back ----------------

// loadProducts(()=>{

//     loadCart(()=>{
//         renderCheckoutHeader();
//         renderOrderSummary();
//         renderPaymentSummary();
//     });

// });


                       