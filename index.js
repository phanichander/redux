const redux = require('redux')
const reducerLogger = require('redux-logger')


const createStore = redux.createStore;
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware;
const logger = reducerLogger.createLogger()

const BUY_CAKE = "BUY_CAKE"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'redux action'
    }
}

const cakeInitialState = {
    numOfCakes: 10
}

const cakeReducer = (state = cakeInitialState, action) => {
   switch(action.type) {
    case BUY_CAKE:
        return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

    default:
        return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log('Initial State', store.getState())

// const unsubscribe = store.subscribe(() => console.log("updated state"), store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())

unsubscribe()
