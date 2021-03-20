const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_STEP': {
      const { data } = action.payload
      return [...state, data]
    }
    case 'DELETE_STEPS': {
      return []
    }
    default:
      return state
  }
}
