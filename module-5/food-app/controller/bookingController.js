const sk = 'sk_test_51NBJC5SCGP20L8TEcKDWjMdHwmkIeXzRWig3U00U6EFaw67DlO2SuYB6uxcDTwp68V9TZDzQGTD0OtiYlTdtsPOR00ZOhXJYiD';
// This is your test secret API key.
const stripe = require('stripe')(sk);
const userModel = require('../models/userModel');
const planModel = require('../models/planModel');

module.exports.createSession = async function createSession(req, res){
    try{
        let userId = req.id;
        let planId = req.params.id;

        let user = await userModel.findById(userId);
        let plan = await planModel.findById(planId);

        const session = await stripe.checkout.sessions.create({
            payment_method_types :['card'],
            customer_email:user.email,
            client_reference_id:plan.id,
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                name:plan.name,
                description:plan.description,
                amount:plan.price*100,
                currency:'inr',
                quantity:1,
              },
            ],
            // mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}/profile`,
            cancel_url: `${req.protocol}://${req.get('host')}/profile`,         
            })
            res.status(200).json({
                status:'success',
                session
            });

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
    // res.redirect(303, session.url);
  }
