const ftp = require('promise-ftp');

/**
 * @param {string} host
 * @param {string | number} port
 * @param {string} user
 * @param {string} password
 */
const configParser = ({
  host = '',
  port = '',
  user = '',
  password = '',
  secure = false,
  secureOptions,
  connTimeout = 10000,
  pasvTimeout = 10000,
  keepalive = 10000,
  autoReconnect = false,
  preserveCwd = false,
  baseUrl,
  basePath,
  cacheFolder,
}) => {
  return {
    host,
    port,
    user,
    password,
    secure,
    secureOptions,
    connTimeout,
    pasvTimeout,
    keepalive,
    autoReconnect,
    preserveCwd,
    baseUrl,
    basePath,
    cacheFolder,
  };
};

const fileNameComposer = file => {
  return `${file.hash}${file.ext}`;
};

module.exports = {
  upload: async (inputConfig, file) => {
    const client = new ftp();
    const config = configParser(inputConfig);
    const remoteFileName = fileNameComposer(file);

    await client.connect(config);
    await client.cwd(config.basePath);
    await client.put(file.buffer, remoteFileName);
    //await client.put(file.tmpPath, remoteFileName);

    file.public_id = remoteFileName;
    file.url = `${config.baseUrl}${remoteFileName}`;

    return client.end();
  },

  delete: async (inputConfig, file) => {
    const client = new ftp();
    const config = configParser(inputConfig);
    const remoteFileName = fileNameComposer(file);

    await client.connect(config);
    await client.cwd(config.basePath);
    await client.delete(remoteFileName);

    return client.end();
  },

  fileNameComposer,
};
