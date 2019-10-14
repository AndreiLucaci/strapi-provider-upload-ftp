'use strict';

const ftpClient = require('./ftp-client');

/**
 * Module dependencies
 */

/* eslint-disable prefer-template */
// Public node modules.
/* eslint-disable no-unused-vars */
module.exports = {
  provider: 'ftp-upload',
  name: 'FtpUpload',
  auth: {
    host: {
      label: 'Host',
      type: 'text',
    },
    port: {
      label: 'Port',
      type: 'text',
    },
    user: {
      label: 'User',
      type: 'text',
    },
    password: {
      label: 'Password',
      type: 'password',
    },
    basePath: {
      label: 'Base PATH',
      type: 'text',
    },
    baseUrl: {
      label: 'Base URL',
      type: 'text',
    },
  },
  init: config => {
    return {
      upload: file => {
        return new Promise((resolve, reject) => {
          ftpClient
            .upload(config, file)
            .then(resolve)
            .catch(reject);
        });
      },

      delete: file => {
        return new Promise((resolve, reject) => {
          ftpClient
            .delete(config, file)
            .then(resolve)
            .catch(reject);
        });
      },
    };
  },
};
