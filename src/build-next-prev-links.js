const buildUri = require("./build-uri");

module.exports = (
  protocol,
  host,
  path,
  baseParams,
  offset,
  moreData,
  maxTotal
) => {
  const basePath = buildUri(protocol, host, path, baseParams);
  const links = {
    self: {
      href: `${basePath}&offset=${offset}`,
    },
    first: {
      href: `${basePath}&offset=0`,
    },
  };
  const maxItems = baseParams.maxItems;
  if (moreData && offset + maxItems < maxTotal) {
    links.next = {
      href: `${basePath}&offset=${offset + maxItems}`,
    };
  }
  if (offset !== 0) {
    links.prev = {
      href: `${basePath}&offset=${Math.max(0, offset - maxItems)}`,
    };
  }
  return links;
};
