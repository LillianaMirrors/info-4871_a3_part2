// =============================================================================
// PRODUCT PAGE                                              YOU EDIT THIS FILE
// =============================================================================
//
// This file builds the nodes of one product page. The app runs it once for
// each product in data.js, so every product gets its own page. Inside the
// productNodes function, p is the product whose page is being built.
//
//
// IDS ON THIS PAGE: every id must be unique from every id on every other page,
// including the search results page. That is why every id below starts with
// the product's id and "-page", such as "aurora-anc-page-price".
//
// =============================================================================

export function productNodes(p) {
  const nodes = [];

  // ===========================================================================
  // EDIT BELOW THIS LINE
  // ===========================================================================

  // The root node is the game. Its children are the page's main locations as
  // one flat list: Down goes to the short description, and Left and Right
  // move along the list.
  const page = {
    id: `${p.id}-page`,
    description: p.title,
    children: [
      `${p.id}-page-short`,
      `${p.id}-page-reviews`,
      `${p.id}-page-cart`,
      `${p.id}-page-long`,
      `${p.id}-page-full-reviews`,
    ],
    navigation: {
      // Backspace jumps back to this product on the search results page.
      Backspace: p.id,
    },
  };
  nodes.push(page);

  // The short description, with the tags, "relevant to you", and the
  // accessibility details inside it.
  nodes.push({
    id: `${p.id}-page-short`,
    description: p.shortDescription,
    children: [`${p.id}-page-tags`, `${p.id}-page-relevant`, `${p.id}-page-accessibility`],
  });
  nodes.push({ id: `${p.id}-page-tags`, description: `Tags: ${p.tags.join(', ')}` });
  nodes.push({
    id: `${p.id}-page-relevant`,
    description: `Similar to the games you have played: ${p.similar.join(' and ')}`,
  });

  // "Accessibility details", with one node for each feature.
  const accessibility = { id: `${p.id}-page-accessibility`, description: 'Accessibility details', children: [] };
  if (p.accessibility.length === 0) accessibility.description = 'Accessibility details, none listed';
  nodes.push(accessibility);

  let featureCount = 1;
  for (const feature of p.accessibility) {
    const featureId = `${p.id}-page-accessibility-${featureCount}`;
    accessibility.children.push(featureId);
    nodes.push({ id: featureId, description: feature });
    featureCount = featureCount + 1;
  }

  // The review summary, with the review section inside it. Enter on the
  // review section jumps to the full reviews.
  nodes.push({
    id: `${p.id}-page-reviews`,
    description: `${p.reviewSummary}, ${p.reviewPercent}% of ${p.reviewCount} reviews are positive`,
    children: [`${p.id}-page-review-section`],
  });
  nodes.push({
    id: `${p.id}-page-review-section`,
    description: 'Review section',
    navigation: { Enter: `${p.id}-page-full-reviews` },
  });

  nodes.push({ id: `${p.id}-page-cart`, description: `$${p.price}, Add to cart button` });
  nodes.push({ id: `${p.id}-page-long`, description: p.longDescription.join(' ') });

  // "Full reviews", with one node for each review.
  const fullReviews = {
    id: `${p.id}-page-full-reviews`,
    description: `Full reviews, ${p.reviews.length} reviews`,
    children: [],
  };
  nodes.push(fullReviews);

  let reviewCount = 1;
  for (const r of p.reviews) {
    const reviewId = `${p.id}-page-review-${reviewCount}`;
    fullReviews.children.push(reviewId);

    const recommendation = r.recommended ? 'Recommended' : 'Not recommended';
    nodes.push({
      id: reviewId,
      description: `${recommendation}, by ${r.author}, ${r.hours} hours played, posted ${r.date}. ${r.text}`,
    });
    reviewCount = reviewCount + 1;
  }

  // ===========================================================================
  // EDIT ABOVE THIS LINE
  // ===========================================================================

  return nodes; // Do not edit.
}
