// =============================================================================
// PRODUCT DATA                                              YOU EDIT THIS FILE
// =============================================================================
//
// This file holds the information about each product. The page files in
// src/pages/ read it to build the screen reader interface.
//
// Replace the two sample products below with example search results from the
// shopping site your team chose. Copy as many results as you need to get the
// point of your design across.
//
// You can add new fields or delete fields. The only required field is "id".
//
// =============================================================================
// EDIT BELOW THIS LINE
// =============================================================================


export const search = {
  query: 'space',
};

export const products = [
  {
    // Each product needs an id that is different from every other product's
    // id. Use lowercase letters, numbers, and dashes, with no spaces or "/".
    id: 'space-engineers',
    title: 'Space Engineers',
    price: 19.99,
    reviewSummary: 'Very Positive',
    reviewPercent: 89,
    reviewCount: 67865,
    shortDescription:
      'Space Engineers is a sandbox engineering game where you design and build ships, stations, and planetary bases in a fully destructible environment. Explore planets and space, mine resources, survive hazards, and engage in combat alone or with friends in Creative or Survival modes.',
    tags: ['Sandbox', 'Building', 'Space', 'Survival', 'Simulation', 'Physics'],
s
    similar: ['Space Engineers 2', 'Kerbal Space Program'],
    // Accessibility features
    accessibility: [],
    longDescription: [
      'Space Engineers is an open world sandbox game about designing, building and testing your own space machines.',
      'Construct ships, stations and planetary bases in a fully destructible environment, then explore planets and space, mine resources, survive hazards and engage in combat alone or with friends in Creative or Survival modes.',
      'Play solo or in multiplayer, from small co-op outposts to huge community servers.',
    ],
    reviews: [
      { author: 'nebulanoodle', recommended: true, hours: 412.5, date: 'Oct 12, 2026', text: 'I have built a hundred ships and crashed ninety of them. Still the best building game I own.' },
      { author: 'quietcomet', recommended: true, hours: 88.1, date: 'Sep 30, 2026', text: 'Survival mode with friends is great. Learning the controls takes a while.' },
      { author: 'PixelBarnacle', recommended: false, hours: 6.4, date: 'Oct 20, 2026', text: 'Too much to learn at once. The tutorial did not help me much.' },
    ],
  },
  {
    id: 'kerbal-space-program',
    title: 'Kerbal Space Program',
    price: 39.99,
    reviewSummary: 'Overwhelmingly Positive',
    reviewPercent: 96,
    reviewCount: 84983,
    shortDescription:
      'In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn’t) based on realistic aerodynamic and orbital physics.',
    tags: ['Space', 'Simulation', 'Sandbox', 'Physics', 'Science', 'Space Sim'],
    similar: ['SpaceEngine', 'Space Engineers'],
    accessibility: [],
    longDescription: [
      'In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals.',
      'Launch your Kerbal crew into orbit and beyond (while keeping them alive) to explore moons and planets in the Kerbol solar system, constructing bases and space stations to expand the reach of your expedition.',
    ],
    reviews: [
      { author: 'orbitalpancake', recommended: true, hours: 260.0, date: 'Aug 14, 2026', text: 'I learned more about orbits from this game than from school. Jeb is my hero.' },
      { author: 'Ferris', recommended: true, hours: 45.2, date: 'Sep 3, 2026', text: 'Hard at first, but landing on the Mun for the first time felt amazing.' },
    ],
  },
  {
    id: 'space-engineers-2',
    title: 'Space Engineers 2',
    price: 29.99,
    reviewSummary: 'Mostly Positive',
    reviewPercent: 74,
    reviewCount: 3694,
    shortDescription:
      'Space Engineers 2 is a playable Early Access Alpha sandbox focused on engineering, exploration, and colonization in a fully destructible universe. Design and build ships, stations, and planetary bases while uncovering the story of Miro and Ivan Sokol. Help shape the future of the Almagest system.',
    tags: ['Sandbox', 'Building', 'Space', 'Survival', 'Sci-fi', 'Simulation'],
    similar: ['Space Engineers', 'Kerbal Space Program'],
    accessibility: [],
    longDescription: [
      'Space Engineers 2 is currently a Playable Alpha In Active Development and already lets you begin building, surviving, and colonizing the Almagest System.',
      'You arrive in the distant Almagest System on humanity’s first large-scale colonization mission.',
      'Your ship is damaged on entry, your tools are basic, and the planets below are beautiful but unforgiving.',
    ],
    reviews: [
      { author: 'gearhead_99', recommended: true, hours: 61.7, date: 'Jul 22, 2026', text: 'Building feels much smoother than the first game. Excited to see where it goes.' },
      { author: 'MoonMoth', recommended: false, hours: 4.9, date: 'Aug 2, 2026', text: 'Not enough to do yet. I would wait for more updates before buying.' },
      { author: 'tinfoilhat', recommended: false, hours: 12.3, date: 'Aug 19, 2026', text: 'Looks beautiful, but it runs badly on my laptop.' },
    ],
  },
  {
    id: 'jump-space',
    title: 'Jump Space',
    price: 19.99,
    reviewSummary: 'Very Positive',
    reviewPercent: 87,
    reviewCount: 8478,
    shortDescription:
      'Jump Space (formerly Jump Ship) is a mission based co-op PvE for 1-4 players, where you are the crew of a spaceship. Transition seamlessly from crewing the ship to on-foot exploration and space walks. Explore, upgrade, and survive intense encounters in deep space together.',
    tags: ['Co-op', 'PvE', 'Space', 'Sci-fi', 'FPS', 'Roguelite'],
    similar: ['ZeroSpace', 'Space Engineers'],
    accessibility: [],
    longDescription: [
      'Engage in intense battles both on the ground and in space, and always keep your ship upgraded and intact.',
      'Teamwork is key for survival and victory.',
      'We love co-op games, and we love space. Jump Space is our attempt to make both work together.',
    ],
    reviews: [
      { author: 'sporelord', recommended: true, hours: 22.1, date: 'Oct 5, 2026', text: 'So much fun with three friends. Someone always forgets to fix the engine.' },
      { author: 'Juniper', recommended: false, hours: 3.8, date: 'Oct 9, 2026', text: 'Playing alone is not much fun. You really need a group.' },
    ],
  },
  {
    id: 'spaceengine',
    title: 'SpaceEngine',
    price: 29.99,
    reviewSummary: 'Overwhelmingly Positive',
    reviewPercent: 96,
    reviewCount: 9823,
    shortDescription:
      'The world’s first science-based photorealistic interactive 3D planetarium that models the entire Universe, using procedural generation for uncharted areas.',
    tags: ['Early Access', 'Open World', 'Sci-fi', 'Casual', 'Sandbox', 'Space'],
    similar: ['Kerbal Space Program', 'The Message from Deep Space'],
    accessibility: [],
    longDescription: [
      'SpaceEngine is a 1:1 scale science-based Universe simulator, featuring billions upon billions of galaxies, nebulae, stars, and planets, all shown at their full real-world scale.',
      'Explore Earth and our neighboring worlds in the Solar System, orbit a black hole in a galaxy billions of light-years away, or visit anything in between seamlessly, with no transitions.',
    ],
    reviews: [
      { author: 'starlitsoup', recommended: true, hours: 140.4, date: 'Jun 18, 2026', text: 'Not really a game, but I lose hours just flying between stars.' },
      { author: 'Barkeep Bo', recommended: true, hours: 34.0, date: 'Jul 1, 2026', text: 'Great for learning about space. My kids love finding black holes.' },
    ],
  },
  {
    id: 'message-from-deep-space',
    title: 'The Message from Deep Space',
    price: 9.99,
    reviewSummary: 'Overwhelmingly Positive',
    reviewPercent: 96,
    reviewCount: 1720,
    shortDescription: 'Mission: Translate an interstellar message, using the universal languages of math & science.',
    tags: ['Science', 'Puzzle', 'Aliens', 'Sci-fi', 'Retro', 'Investigation'],
    similar: ['SpaceEngine', 'Kerbal Space Program'],
    accessibility: [
      'Camera Comfort',
      'Color Alternatives',
      'Custom Volume Controls',
      'Playable Without Timed Input',
      'Save Anytime',
      'Stereo Sound',
    ],
    longDescription: [
      'The Message from Deep Space is an odyssey of puzzles.',
      'Take the role of the mission’s Translator, working alongside a scrappy band of scientists, and venture headfirst into the world of deciphering an alien language, completely from the ground up.',
      'Set in 1973, Earth is the recipient of a meteorite that broadcasts radio waves.',
    ],
    reviews: [
      { author: 'zeroG', recommended: true, hours: 14.6, date: 'Sep 27, 2026', text: 'The moment the alien message finally made sense was incredible.' },
      { author: 'mathcat', recommended: true, hours: 9.2, date: 'Oct 2, 2026', text: 'You do not need to be good at math. The game teaches you as you go.' },
    ],
  },
  {
    id: 'zerospace',
    title: 'ZeroSpace',
    price: 39.99,
    reviewSummary: 'Mostly Positive',
    reviewPercent: 78,
    reviewCount: 1345,
    shortDescription:
      'ZeroSpace is a sci-fi real-time strategy game with an RPG campaign. Play the story as Commander Aster, securing humanity’s place in the galaxy, or team up with a friend in the co-op Galactic War and take on an endless variety of missions against the AI.',
    tags: ['Early Access', 'Action RTS', 'Wargame', 'RTS', 'Real Time Tactics', 'PvE'],
    similar: ['Jump Space', 'Space Engineers 2'],
    accessibility: [
      'Camera Comfort',
      'Custom Volume Controls',
      'Adjustable Difficulty',
      'Mouse Only Option',
      'Playable Without Timed Input',
      'Stereo Sound',
      'Subtitle Options',
      'Touch Only Option',
    ],
    longDescription: [
      'ZeroSpace is a sci-fi real-time strategy game set in the Orion sector, where humanity’s network of faster than light travel is failing due to a lack of flux, the resource that powers it.',
      'As the old powers fight over what flux is left, a hidden agenda sets two distant galaxies on a collision course.',
    ],
    reviews: [
      { author: 'RTSdad', recommended: true, hours: 38.5, date: 'Sep 12, 2026', text: 'Feels like the strategy games I grew up with. Co-op missions are a blast.' },
      { author: 'lowapm', recommended: false, hours: 5.1, date: 'Oct 15, 2026', text: 'Too fast for me even on easy. The campaign story is good though.' },
    ],
  },
];

// =============================================================================
// EDIT ABOVE THIS LINE
// =============================================================================
