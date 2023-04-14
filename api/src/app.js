const stripe = require("stripe")(
  "sk_test_51MtdRJAxd88LZv2egEjZ27veNPYORmChJEvjyRUBjG7XsOiLcYaXp92Mz6FWq0EJrACFyj1Er28uoFLURDtF0kbP00E5dlFSKT"
);

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index.js");

require("./db.js");

const server = express();
server.use(express.static("public"));
server.name = "API";
server.use(express.json());

// const YOUR_DOMAIN = "http://localhost:8080";

// const imagen =
//   "https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png";

// const description = "fdsfsdfsdfsd";

// server.post("/createCheckoutSession", async (req, res) => {
//   const product = await stripe.products.create({
//     name: "T-shirt",
//     images: [imagen],
//     description: description,
//   });

//   const price = await stripe.prices.create({
//     product: product.id,
//     unit_amount: 2000,
//     currency: "usd",
//   });

//   const session = await stripe.checkout.sessions.create({
//     mode: "payment",
//     line_items: [{ price: price.id, quantity: 1 }],
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

server.post("/api/checkout", async (req, res) => {
  console.log(req.body);

  try {
    const { id, amount } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "",
      payment_method: id,
      confirm: true,
    });

    console.log(payment);

    res.send({ message: "Succesfull payment" });
  } catch (error) {
    console.log(error);

    res.json({ message: error.message });
  }
});

//

//

//

server.use(express.json());

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");

  // res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  next();
});

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
