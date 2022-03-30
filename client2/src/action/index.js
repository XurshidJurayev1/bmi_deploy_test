import api from '../Api';


export const viewSingleUser = user => dispatch => {
  dispatch({
    type: 'SINGLE_USER',
    payload: user
  })
}

export const register = user => async (dispatch) => {
  const res = await api.post('/auth/register', user )
  dispatch({
    type: "REGISTER",
    payload: res.data
  })
}

export const login = ({login, password}) => async (dispatch) => {
  const res = await api.post('/auth/login', {login, password} )
  dispatch({
    type: "LOGIN",
    payload: res.data
  })
}

export const addNews= news => async (dispatch) => {
  const res = await api.post('/news/create', news)
  dispatch({
    type: "ADD_NEWS",
    payload: res.data
  })
}