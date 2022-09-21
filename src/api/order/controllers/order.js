"use strict";

/**
 *  order controller
 */

//import stripe test key
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { amount, address, phone, dishes, token } = ctx.request.body;

    try {
      //Charge the customer
      await stripe.charges.create({
        amount: Math.round(amount * 100),
        currency: "usd",
        description: `Order ${new Date()} by ${ctx.state.user.id}`,
        //Trong app thật thì dùng source: token
        source: "tok_mastercard",
      });

      //Create the order

      const entity = await strapi.entityService.create("api::order.order", {
        data: {
          amount,
          address,
          phone,
          dishes,
          user: ctx.state.user.id,
          publishedAt: new Date(),
        },
      });
      const sanityEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanityEntity);
    } catch (error) {
      console.log(error);
      ctx.response.status = 500;
      return {
        error: {
          message: "There was a problem create the charge",
        },
      };
    }
  },
}));
