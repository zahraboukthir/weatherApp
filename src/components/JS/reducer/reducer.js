const initialState = {
    searchVal:"Gafsa"

}

export const  reducers (state = initialState, { type, payload }) => {
  switch (type) {

  case LOADING:
    return { ...state, ...payload }
    case READY:
        return { ...state, ...payload }
        case SEARCHVAL:
            return { ...state, ...payload }
  default:
    return state
  }
}
