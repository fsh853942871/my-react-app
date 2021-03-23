let initState = {
    sn: ""
}

export const setParams = (param: Object) => {
    return {
        type: 'SET-PARAMS',
        param
    }
}

export const getParams = (param: Object) => {
    return {
        type: 'GET-PARAMS',
        param
    }
}

export function* func() {
    console.log('qwe')
    console.log('one')
    yield '1'
    console.log('two')
    yield '2'
    console.log('three')
    return '3'
}

export const setSn = (param: Object) => {
    return {
        type: 'SET-SN',
        param
    }
}

const reducer = (state = initState, action: {type: string,param: any}) => {
    console.log(action)
    switch (action.type) {
      case 'SET-PARAMS': 
        return {
            ...state,
            ...action.param
        };
      case 'SET-SN':
          return {
              ...state,
              sn: action.param
          }
      default:
        return state;
    }
  };
  
  export default reducer;