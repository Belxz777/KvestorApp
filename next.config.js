const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* Настройка прокси для разработки */
      async rewrites() {
        return [
          {
            source: '/Quests/:lat/:lon',
            destination: 'https://4qf73x8p-4000.euw.devtunnels.ms/Quests/:lat/:lon',
          },
        ];
      },
    };
  }

  return {
    /* Другие конфигурации для других окружений */
  };
};