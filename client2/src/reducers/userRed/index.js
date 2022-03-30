

// -------- AUTH ------- //
export const register = (state=[], action) => {
  switch(action.type){
    case "REGISTER":
      return action.payload
      default : return state
  }
}

export const token = (state={}, action) => {
  switch(action.type){
    case "LOGIN":
      return action.payload.token
      default : return state
  }
}

export const user = (state={}, action) => {
  switch(action.type){
    case "LOGIN":
      return action.payload.user
      default : return state
  }
}

export const role = (state=[], action) => {
  switch(action.type){
    case "LOGIN":
      return action.payload.user.role
      // if(action.payload.user.role === 10 || action.payload.user.role[0] === "ADMIN"){
      //   return "ADMIN"
      // } else if(action.payload.user.role === 1 || action.payload.user.role[0] === "TEACHER"){
      //   return "TEACHER"
      // }else if(action.payload.user.role === 0 || action.payload.user.role[0] === "USER"){
      //   return "USER"
      // }else{
      //   return state
      // }
      default : return state
  }
}


