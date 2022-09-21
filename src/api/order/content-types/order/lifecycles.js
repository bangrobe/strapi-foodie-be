module.exports = {
    async afterCreate(event) {
        const { params } = event;
        let email;
        if(params.data.user) {
            const res = await strapi.query("plugin::users-permissions.user").findOne({ where: {
                id: params.data.user
            }})
            email = res.email
        }
         try {
            await strapi.plugins['email'].services.email.send({
                to: email,
                from: 'noreply@foodigi.local',
                subject: 'Your new order at digifoodie.com',
                text: `Your order will send to your address ${params.data.address}. Please prepare $${params.amount + 5}`,
                html: `<p>Your order will send to your address ${params.data.address}.</p> 
                <p>Please prepare $${params.data.amount + 5}</p>`
            })
         } catch (error) {
            console.log(error)
         }
    }
}