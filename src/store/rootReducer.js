
//reducer & action 
import { loginReducer } from './reducers'
import { loginStore } from './actions'


//root reducer
export const rootReducer = {
    reducer: {
        login: loginReducer.reducer,
       
    },
}