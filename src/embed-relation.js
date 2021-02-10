const _ = require("lodash");
const addRelationFromResourceSelf = require("./add-relation-from-resource-self");

module.exports = (
  resource,
  relation,
  embededResource,
  { name, title } = {}
) => {
  if (!embededResource) {
    return resource;
  }

  if (!_.has(resource, "_embedded")) {
    resource._embedded = {};
  }
  if (_.has(resource, `_embedded.${relation}`)) {
    if (_.isArray(_.get(resource, `_embedded.${relation}`))) {
      resource._embedded[relation].push(embededResource);
    } else {
      const currentValue = resource._embedded[relation];
      resource._embedded[relation] = [currentValue, embededResource];
    }
  } else {
    resource._embedded[relation] = embededResource;
  }
  addRelationFromResourceSelf(resource, relation, embededResource, {
    name,
    title,
  });

  return resource;
};
