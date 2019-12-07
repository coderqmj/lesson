/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.security = {csrf:{enable:false}};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575685359474_5127';
  config.sequelize = {
    dialect:'mysql',
    host:'192.168.31.129',
    port:3306,
    password:'1234567890',
    database:'zch_instagram'
  }
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
