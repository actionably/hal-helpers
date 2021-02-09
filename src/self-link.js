const buildUri = require("./build-uri");

module.exports = (req, path, params) => {
  return {
    self: {
      href: buildUri(req, path, params),
    },
  };
};
