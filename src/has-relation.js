const _ = require('lodash')

module.exports = (resource, relation)=> {
    return (
        _.has(resource, `_links.${relation}`) ||
        _.has(resource, `_embedded.${relation}`)
    );
}