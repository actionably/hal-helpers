const _ = require('lodash')

module.exports = (resource, relation, link)=> {
    if (!link) {
        return resource;
    }

    if (!resource) {
        return resource;
    }

    if (!_.has(resource, "_links")) {
        resource._links = {};
    }

    if (_.has(resource, `_links.${relation}`)) {
        if (_.isArray(_.get(resource, `_links.${relation}`))) {
            resource._links[relation].push(link);
        } else {
            const currentValue = resource._links[relation];
            resource._links[relation] = [currentValue, link];
        }
    } else {
        resource._links[relation] = link;
    }

    return resource;
}