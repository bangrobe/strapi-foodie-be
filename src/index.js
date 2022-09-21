'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.user'],

      // your lifecycle hooks
      async afterCreate(event) {
        console.log('user created!')
        const { result } = event;
        try {
          await strapi.plugins['email'].services.email.send({
            to: result.email,
            from: 'noreply@foodigi.local',
            subject: 'Account registered successfully',
            text: `Thank you for registering!
              Please enjoy best moments with DigiFoodie.!
              `,
            html: `<p>Thank you for registering!</p>

              <p> Please enjoy best moments with DigiFoodie.!</p>`
          })
        } catch (error) {
          console.log(error)
        }
      },
    })
  },
};
