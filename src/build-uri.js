const querystring = require("querystring");

module.exports = (req, path, params) => {
  const host = req.host;
  path = path || req.path;
  const qs = params ? `?${querystring.stringify(params)}` : "";
  return `${req.protocol}://${host}${path}${qs}`;
};
