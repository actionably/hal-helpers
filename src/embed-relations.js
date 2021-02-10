const embedRelation = require("./embed-relation");
const _ = require("lodash");

module.exports = (
  resource,
  relation,
  embeddedResources,
  { name, title } = {}
) => {
  if (!embeddedResources) {
    return resource;
  }

  if (embeddedResources.length > 1) {
    _.each(embeddedResources, (embeddedResource) => {
      embedRelation(resource, relation, embeddedResource, { name, title });
    });
  } else {
    embedRelation(resource, relation, embeddedResources[0], { name, title });
  }

  return resource;
};
