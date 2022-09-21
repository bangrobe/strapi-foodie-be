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
        origin: ['http://localhost:1337','http://localhost:3000','http://localhost:3084', env("DOMAIN_FRONTEND")]
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
