// =============================================================================
// SEARCH RESULTS PAGE                                       YOU EDIT THIS FILE
// =============================================================================
//
// This file builds the nodes of the search results page. Each node is one
// item the screen reader user can move to. A node has up to four fields:
//
//   id           A name for the node. Must be unique across all nodes.
//   description  What the screen reader should read when the user reaches
//                the node.
//   children     (optional) A list of the ids of the nodes grouped within this 
//                node, in order. The arrow keys work like this: Down goes to
//                the first child, Up goes back to the parent, and Left and
//                Right go to the previous and next node in the same list.
//   navigation   (optional) Extra keys. For example, { p: 'some-id' } means
//                "pressing p jumps to the node whose id is some-id".
//
// =============================================================================

import { search, products } from '../data.js';

export function resultsNodes() {
  const nodes = [];

  // ===========================================================================
  // EDIT BELOW THIS LINE
  // ===========================================================================

  // The root node is the Steam header, with the header links inside it.
  nodes.push({
    id: 'results',
    description: 'Steam',
    children: ['user', 'library', 'community', 'store'],
  });


  nodes.push({ id: 'user', description: 'User link' });
  nodes.push({ id: 'library', description: 'Library link' });
  nodes.push({ id: 'community', description: 'Community link' });
  nodes.push({ id: 'store', description: 'Store link', children: [ 'filters', 'cart', 'search' ] });

  //  search results
  const searchResults = {
    id: 'search',
    description: `Search results for "${search.query}"`,
    children: [],
  };
  nodes.push(searchResults);
  nodes.push({ id: 'cart', description: 'Your cart link' });

  const filterGroups = [
    { name: 'Number of players', choices: ['Single player', 'Multiplayer', 'Co-op'] },
    { name: 'Operating system', choices: ['Windows', 'macOS', 'Linux'] },
    { name: 'Price', choices: ['Under $5', 'Under $10', 'Under $15'] },
  ];

  const filters = { id: 'filters', description: 'Filters', children: [] };
  nodes.push(filters);

  let groupCount = 1;
  for (const group of filterGroups) {
    const groupId = `filters-${groupCount}`;
    filters.children.push(groupId);

    const groupNode = { id: groupId, description: group.name, children: [] };
    nodes.push(groupNode);

    let choiceCount = 1;
    for (const choice of group.choices) {
      const choiceId = `${groupId}-${choiceCount}`;
      groupNode.children.push(choiceId);
      nodes.push({ id: choiceId, description: `${choice} button` });
      choiceCount = choiceCount + 1;
    }
    groupCount = groupCount + 1;
  }

  for (const p of products) {
    searchResults.children.push(p.id);

    nodes.push({
      id: p.id,
      description: `${p.title}, $${p.price}, ${p.reviewSummary}`,
      children: [`${p.id}-cart`],
      navigation: {
        Enter: `${p.id}-page`,
      },
    });

    nodes.push({ id: `${p.id}-cart`, description: 'Add to cart' });
  }

  // ===========================================================================
  // EDIT ABOVE THIS LINE
  // ===========================================================================

  return nodes;
}
