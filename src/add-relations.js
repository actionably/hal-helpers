const _ = require('lodash')
const addRelation = require('./add-relation')

module.exports = (resource, relation, links)=> {
    if (!links) {
        return resource;
    }

    if (links.length > 1) {
        _.each(links, (link) => {
            addRelation(resource, relation, link);
        });
    } else {
        addRelation(resource, relation, links[0]);
    }

    return resource;
}