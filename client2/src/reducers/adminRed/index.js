export const userSingle = (state=[], action) => {
  switch(action.type){
    case "SINGLE_USER":
      return action.payload
      default : return state
  }
}

export const addNews = (state={}, action) => {
  switch(action.type){
    case "ADD_NEWS":
      return action.payload
    default : return state
  }
}