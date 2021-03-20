const initialState = 'active'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PAUSE_GAME': {
      return 'pause'
    }
    case 'START_GAME': {
      return 'active'
    }
    default:
      return state
  }
}
