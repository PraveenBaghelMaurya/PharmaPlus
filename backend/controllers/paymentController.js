const catchAsyncError = require("../middleware/catchAsyncErrors");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")("sk_test_51P6c0ySAZqlbTJQWlOEgP6GH8W55lzxyadrqjouUYTxCvedm6a6a5hFi4yOb9zX9MElyllGaaVFFpQo8nXUq6Ewt002vCkNinP")

//Payment Processing 
exports.processPayment = catchAsyncError(async (req, res, next) => {
console.log(req.body)

    console.log()

    const myPayment = await stripe.paymentIntents.create({

        amount: req.body.amount,
        currency: "inr",
        payment_method: cardId,
         confirm: true,
         description: description,
         return_url: returnUrl
    });


    res
.status(200)
    .json({success: true, client_secret: myPayment.client_secret});

});


// Sending Stripe API_KEY
exports.sendStripeApiKey = catchAsyncError(async (req, res, next) => {
    console.log(`This is the stripeapikey:`,process.env.STRIPE_API_KEY);
    res.status(200).json({stripeApiKey: process.env.STRIPE_API_KEY})
})




