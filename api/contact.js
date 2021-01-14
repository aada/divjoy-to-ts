const express = require("express");
const aws = require("aws-sdk");
const router = express.Router();

aws.config.update({
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
  region: "us-west-2",
});

// Load AWS SES
const ses = new aws.SES({ apiVersion: "2010-12-01" });

router.post("/", (req, res) => {
  const body = req.body;

  const params = {
    Source: process.env.AMAZON_SES_CONTACT_EMAIL,
    Destination: { ToAddresses: [process.env.AMAZON_SES_CONTACT_EMAIL] },
    Message: {
      Subject: {
        Data: `Contact form submission`,
      },
      Body: {
        Text: {
          Data: `
                    Name: ${body.name}\n
                    Email: ${body.email}\n
                    Message: ${body.message}\n
                  `,
        },
      },
    },
  };

  return ses
    .sendEmail(params)
    .promise()
    .then((data) => {
      res.send({ status: "success" });
    })
    .catch((error) => {
      console.log("contact error", error);

      res.send({ status: "error" });
    });
});

module.exports = router;
