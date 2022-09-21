module.exports = ({ env }) => ({
    // email: {
    //     config: {
    //         provider: 'nodemailer',
    //         providerOptions: {
    //             service: 'mailtrap',
    //             host: "smtp.mailtrap.io",
    //             port: 2525,
    //             auth: {
    //                 user: "de35eec0aa89f0",
    //                 pass: "ec7f0585abad4b"
    //             }
    //             // ... any custom nodemailer options
    //         },
    //     },
    //     settings: {
    //         defaultFrom: 'admin@foodigi.local',
    //         defaultReplyTo: 'noreply@foodigi.local',
    //     },
    // },
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                service: 'sendinblue',
                host: "smtp-relay.sendinblue.com",
                port: 587,
                auth: {
                    user: env("EMAIL_USER"),
                    pass: env("EMAIL_PASS")
                }
                // ... any custom nodemailer options
            },
        },
        settings: {
            defaultFrom: 'admin@foodigi.local',
            defaultReplyTo: 'noreply@foodigi.local',
        },
    },
    // 'google-auth': {
    //     enabled: true,
    // },
//     email: {
//     config: {
//       provider: 'mailgun',
//       providerOptions: {
//         key: env('MAILGUN_API_KEY'), // Required
//         domain: env('MAILGUN_DOMAIN'), // Required
//         url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
//       },
//       settings: {
//         defaultFrom: 'myemail@protonmail.com',
//         defaultReplyTo: 'myemail@protonmail.com',
//       },
//     },
//   },
})