const buildUri = require("./build-uri");

module.exports = (protocol, host, path, params) => {
  return {
    self: {
      href: buildUri(protocol, host, path, params),
    },
  };
};
