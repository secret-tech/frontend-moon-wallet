const colorPairs = {
  1: { bg: '#0E5A8A', icon: '#106BA3' },
  2: { bg: '#0A6640', icon: '#0D8050' },
  3: { bg: '#A66321', icon: '#BF7326' },
  4: { bg: '#A82A2A', icon: '#C23030' },
  5: { bg: '#9E2B0E', icon: '#B83211' },
  6: { bg: '#5C255C', icon: '#752F75' },
  7: { bg: '#5642A6', icon: '#634DBF' },
  8: { bg: '#1F4B99', icon: '#2458B3' }
};

const walletIcons = {
  1: 'pt-icon-build',
  2: 'pt-icon-code',
  3: 'pt-icon-code',
  4: 'pt-icon-git-merge',
  5: 'pt-icon-pivot',
  6: 'pt-icon-numerical',
  7: 'pt-icon-take-action',
  8: 'pt-icon-heatmap'
};

export const getWalletColorPair = (number) =>
  (number !== undefined ? colorPairs[number] : colorPairs[0]);

export const getWalletIcon = (number) => walletIcons[number];
