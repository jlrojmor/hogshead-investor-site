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
    description: 'The primary commercial market for tequila demand, premiumization, retail volume, restaurants, and private releases.',
    bullets: ['Largest revenue pool in the model', 'Initial focus for Texas and California', 'Strongest exit relevance for aged inventory'],
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
    bullets: ['Protected origin', 'Distillery partner network', 'Custody and aging infrastructure'],
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
    bullets: ['Largest regional demand base', 'U.S. drives category economics', 'Relevant for investor exits'],
  },
  {
    id: 'premium',
    label: 'Premium Segment',
    short: 'PREMIUM',
    x: '63%',
    y: '45%',
    headline: 'Premiumization engine',
    metric: '$3.12B → $5.18B',
    description: 'Premium tequila is projected to expand meaningfully, supporting the logic for aged inventory and higher-end releases.',
    bullets: ['Higher-margin positioning', 'Aged expressions support scarcity', 'Relevant to restaurants, retailers, and collectors'],
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
