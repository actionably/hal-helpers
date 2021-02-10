const querystring = require("querystring");

module.exports = (protocol, host, path, params) => {
  const qs = params ? `?${querystring.stringify(params)}` : "";
  return `${protocol}://${host}${path}${qs}`;
};
