require("dotenv").config();
const express = require("express");
const stripeCreateBillingSession = require("./stripe-create-billing-session.js");
const stripeWebhook = require("./stripe-webhook.js");
const stripeCreateCheckoutSession = require("./stripe-create-checkout-session.js");
const newsletter = require("./newsletter.js");
const contact = require("./contact.js");

const app = express();

// Get the raw body which is needed by Stripe webhook
const jsonOptions = {
  verify: (req, res, buf) => {
    if (buf && buf.length) {
      req.rawBody = buf.toString("utf8");
    }
  },
};

app.use(express.json(jsonOptions));
app.use(express.urlencoded({ extended: true }));

app.use("/api/stripe-create-billing-session", stripeCreateBillingSession);
app.use("/api/stripe-webhook", stripeWebhook);
app.use("/api/stripe-create-checkout-session", stripeCreateCheckoutSession);
app.use("/api/newsletter", newsletter);
app.use("/api/contact", contact);

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
