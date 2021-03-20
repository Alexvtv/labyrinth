const initialState = Math.floor(Math.random() * 9)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_START_POSITION': {
      const { data } = action.payload
      return data
    }
    default:
      return state
  }
}
