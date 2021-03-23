import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas'

// 引入中间件
const sagaMiddleware = createSagaMiddleware()

 // @ts-ignore
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose

// const enhancer = composeEnhancers(
//    applyMiddleware(sagaMiddleware)
// );

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

// 必须有个run函数，才能可以访问
sagaMiddleware.run(helloSaga)

export default store;