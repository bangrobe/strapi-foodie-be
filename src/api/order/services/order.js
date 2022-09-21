'use strict';

/**
 * order service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order.order', ({strapi})=>({
    // confirmOrder: async(ctx, next) => {
    //     const { id } = ctx.request.params;
    //     console.log(id);
    //     await strapi.entityService.update("api:order.order", id {
    //         data: {
    //             data: {
    //                 confirmed: true,

    //             }
    //         }
    //     })
    // }
}));
