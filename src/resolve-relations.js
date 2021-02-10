const _ = require("lodash");

module.exports = (resource, relation) => {
  const relatedResources = _.get(resource, `_embedded.${relation}`);

  if (!relatedResources) {
    return undefined;
  }

  if (_.isArray(relatedResources)) {
    return relatedResources;
  }
  return [relatedResources];
};
