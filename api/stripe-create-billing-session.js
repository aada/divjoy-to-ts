const express = require("express");
const requireAuth = require("./_require-auth.js");
const { getUser } = require("./_db.js");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: process.env.STRIPE_API_VERSION,
});
const router = express.Router();

router.post("/", requireAuth, async (req, res) => {
  const user = req.user;

  try {
    const { stripeCustomerId } = await getUser(user.uid);

    // Create a billing portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: `${process.env.STRIPE_DOMAIN}/settings/general`,
    });

    // Return success response
    res.send({ status: "success", data: session });
  } catch (error) {
    console.log("stripe-create-billing-session error", error);

    // Return error response
    res.send({ status: "error", code: error.code, message: error.message });
  }
});

module.exports = router;
