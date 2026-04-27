export const marketStats = [
  {
    label: 'U.S. tequila market',
    value: '$20.43B',
    text: 'Estimated 2025 tequila revenue across at-home and out-of-home channels.',
    source: 'Statista Market Forecast',
    basis: 'Category revenue estimate',
  },
  {
    label: 'North America',
    value: '$31.00B',
    text: 'Estimated 2025 tequila revenue across at-home and out-of-home channels.',
    source: 'Statista Market Forecast',
    basis: 'Regional revenue estimate',
  },
  {
    label: 'Mexico market',
    value: '$10.29B',
    text: 'Estimated 2025 tequila revenue in the origin market.',
    source: 'Statista Market Forecast',
    basis: 'Country revenue estimate',
  },
  {
    label: 'Premium segment',
    value: '$3.12B → $5.18B',
    text: 'Estimated global premium tequila segment growth from 2024 to 2030.',
    source: 'Grand View Research',
    basis: 'Premium grade market size',
  },
];

export const marketRegions = [
  {
    id: 'us',
    label: 'United States',
    short: 'U.S.',
    x: '24%',
    y: '43%',
    headline: 'Primary demand center',
    metric: '$20.43B',
    description: 'The main commercial market for premium tequila demand, retail velocity, restaurant programs, collectors, and private releases.',
    bullets: ['Largest modeled demand pool', 'Primary commercial exit relevance', 'Strong premium tequila consumption logic'],
  },
  {
    id: 'mx',
    label: 'Mexico',
    short: 'MX',
    x: '21%',
    y: '57%',
    headline: 'Origin and custody base',
    metric: '$10.29B',
    description: 'The protected origin and operating base for production, regulated sourcing, distillery relationships, and aging infrastructure.',
    bullets: ['Protected origin', 'Production and aging base', 'Custody infrastructure'],
  },
  {
    id: 'na',
    label: 'North America',
    short: 'NA',
    x: '30%',
    y: '35%',
    headline: 'Regional economic concentration',
    metric: '$31.00B',
    description: 'North America concentrates the commercial economics of the tequila category relative to other global regions.',
    bullets: ['Largest regional demand base', 'Cross-border commercial logic', 'Relevant for investor exits'],
  },
  {
    id: 'premium',
    label: 'Premium Segment',
    short: 'PR',
    x: '63%',
    y: '45%',
    headline: 'Premiumization engine',
    metric: '$3.12B → $5.18B',
    description: 'Premium tequila growth is the upside layer: age, scarcity, bottle presence, and story can support higher-value release paths.',
    bullets: ['Higher-margin positioning', 'Aged expressions support scarcity', 'Relevant to restaurants, retailers, and collectors'],
  },
  {
    id: 'global',
    label: 'Global Market',
    short: 'GL',
    x: '74%',
    y: '32%',
    headline: 'Global category expansion',
    metric: '$11.5B → $19.8B',
    description: 'The category is globalizing, but economics concentrate where tequila has premium demand, hospitality use, and credible exit channels.',
    bullets: ['Global growth trajectory', 'Premium education opportunity', 'Demand pools are selective'],
  },
];

export const marketGrowth = [
  { year: '2024', value: 11.49 },
  { year: '2030E', value: 19.76 },
];

export const premiumGrowth = [
  { year: '2024', value: 3.12 },
  { year: '2030E', value: 5.18 },
];

export const channelSplit = [
  { channel: 'At-home', value: 14.01 },
  { channel: 'Out-of-home', value: 6.42 },
];

export const sourceNote =
  'Market figures use third-party category estimates. Sources define revenue pools differently; numbers should be treated as directional market indicators, not directly additive across providers.';
