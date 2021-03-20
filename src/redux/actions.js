export const addStep = data => ({
  type: 'ADD_STEP',
  payload: {
    data
  }
})
export const deleteSteps = () => ({
  type: 'DELETE_STEPS'
})
export const saveStartPosition = data => ({
  type: 'SAVE_START_POSITION',
  payload: {
    data
  }
})
export const pauseGame = () => ({
  type: 'PAUSE_GAME'
})
export const startGame = () => ({
  type: 'START_GAME'
})


