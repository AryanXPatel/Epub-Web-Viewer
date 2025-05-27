const textWalker = function* (doc, func) {
  const filter =
    NodeFilter.SHOW_ELEMENT |
    NodeFilter.SHOW_TEXT |
    NodeFilter.SHOW_CDATA_SECTION;
  const { FILTER_ACCEPT, FILTER_REJECT, FILTER_SKIP } = NodeFilter;
  const acceptNode = (node) => {
    const name = node.localName?.toLowerCase();
    if (name === "script" || name === "style") return FILTER_REJECT;
    if (node.nodeType === 1) return FILTER_SKIP;
    return FILTER_ACCEPT;
  };
  const walker = doc.createTreeWalker(doc.body, filter, { acceptNode });
  const nodes = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode())
    nodes.push(node);
  const strs = nodes.map((node) => node.nodeValue);
  const makeRange = (startIndex, startOffset, endIndex, endOffset) => {
    const range = doc.createRange();
    range.setStart(nodes[startIndex], startOffset);
    range.setEnd(nodes[endIndex], endOffset);
    return range;
  };
  for (const match of func(strs, makeRange)) yield match;
};

export const searchMatcher = (textWalker, options) => {
  return (doc, query) => {
    const results = [];
    const text = doc.body.textContent.toLowerCase();
    const queryLower = query.toLowerCase();
    let index = 0;

    while ((index = text.indexOf(queryLower, index)) !== -1) {
      const range = doc.createRange();
      // This is a simplified version - you might need more sophisticated text matching
      results.push({
        range,
        excerpt: text.slice(Math.max(0, index - 50), index + query.length + 50),
      });
      index += query.length;
    }

    return results;
  };
};
