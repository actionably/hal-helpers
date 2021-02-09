const buildUri = require("./build-uri");

module.exports = (req, path, params, otherProps) => {
  return {
    href: buildUri(req, path, params),
    ...otherProps,
  };
};
