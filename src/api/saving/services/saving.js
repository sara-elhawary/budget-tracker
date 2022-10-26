'use strict';

/**
 * saving service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saving.saving');
