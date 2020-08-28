import {createStore, applyMiddleware} from 'redux'
import reducers from "../reducers/search"
import reduxSaga from 'redux-saga'
import rootSaga from '../sagas'


const sagaMiddleware = reduxSaga()

export default () => {
  return{
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

