module.exports = ({env}) => {
  return [
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    {
      name: 'strapi::cors',
      config: {
        enabled: true,
        headers: '*',
        origin: ['http://apifoodie.local','https://foodieapi.bangdigital.xyz','http://foodieapi.bangdigital.xyz',
        'http://localhost:1337','http://localhost:3000','http://localhost:3084',
        'https://foodie.bangdigital.xyz','http://foodie.bangdigital.xyz',
        env.array("DOMAIN_FRONTEND"),env.array("DOMAIN_BACKEND")]
      }
    },
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
}
