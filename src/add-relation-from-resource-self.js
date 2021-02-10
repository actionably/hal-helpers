const addRelation = require("./add-relation");
const _ = require("lodash");

module.exports = (
  resource,
  relation,
  resourceWithSelf,
  { name, title } = {}
) => {
  if (_.has(resourceWithSelf, "_links.self")) {
    const relationLink = _.cloneDeep(_.get(resourceWithSelf, "_links.self"));

    if (title && _.has(resourceWithSelf, title)) {
      relationLink.title = resourceWithSelf[title];
    }
    if (name && _.has(resourceWithSelf, name)) {
      relationLink.name = resourceWithSelf[name];
    }

    addRelation(resource, relation, relationLink);
  }
};
