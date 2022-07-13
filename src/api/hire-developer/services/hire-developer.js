'use strict';

/**
 * hire-developer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hire-developer.hire-developer');
