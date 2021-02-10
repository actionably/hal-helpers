const buildUri = require("./build-uri");

module.exports = (protocol, host, path, params, otherProps) => {
  return {
    href: buildUri(protocol, host, path, params),
    ...otherProps,
  };
};
