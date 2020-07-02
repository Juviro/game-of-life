export const evolveBoard = () => ({
  type: 'EVOLVE_BOARD',
});

export const toggleAutoPlay = () => ({
  type: 'TOGGLE_AUTOPLAY',
});

export const setAutoPlaySpeed = (autoplaySpeedMs) => ({
  type: 'SET_AUTOPLAY_SPEED',
  autoplaySpeedMs,
});
