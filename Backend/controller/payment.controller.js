const axios = require("axios");
const { config } = require("../config");

const cartRepository = require('../repositories/cart.repository');
class Payments {
  async createOrder(req, res) {

    let cart = await cartRepository.cart();

    try {
      const order = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: cart.subTotal
            },
          },
        ],
        application_context: {
          brand_name: "wildsurfapp.com",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          return_url: `${config.app.host}/payment/capture-order`, // Return from the Landing with message 'Success' or similar.
          cancel_url: `${config.app.host}/payment/cancel-payment`, // Return from the Landing with message 'Success' or similar.
        },
      };
  
  
      // format the body
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
  
      // Generate an access token
      const {
        data: { access_token },
      } = await axios.post(
        `${config.paypal.sandbox}/v1/oauth2/token`,
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: config.paypal.client,
            password: config.paypal.secret,
          },
        }
      );
  
      console.log(access_token);
  
      // make a request
      const response = await axios.post(
        `${config.paypal.sandbox}/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
  
      console.log(response.data);
  
      return res.json(response.data);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Something goes wrong");
    }
  }

  async captureOrder(req, res) {
    const { token } = req.query;

  try {
    const response = await axios.post(
      `${config.paypal.sandbox}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: config.paypal.client,
          password: config.paypal.secret,
        },
      }
    );

    console.log(response.data);

    // res.redirect("/payed.html");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
  }

  async cancelOrder(req, res) {
    res.redirect("/");
  }
}

module.exports = new Payments();
