import { put, takeEvery, all, call } from 'redux-saga/effects'
// tabeEvery 捕捉每一个action   put也可以发送action到store里面
// import { SET_PARAMS } from './actionTypes'
// import axios from 'axios'

function* fetchUser(){
   console.log('fetchUser')
//    let getAjax = yield axios.get('/test.json')
   let getAjax = {
       qwe: 123
   }
   let actions = {
      type:'SET-PARAMS',
      value: getAjax
   }

   // 提交这个actions 到store里面，和在reducer里面提交是一样的
   yield put( actions )
}

export function* helloSaga() {
   // 很重要的一点，进行捕获 组件里面发出的tyepe类型是  GET_INIT_LIST 的action
     yield takeEvery( 'GET-PARAMS', fetchUser )
}