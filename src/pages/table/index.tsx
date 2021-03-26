import React, { useState } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { setParams, getParams, setSn, func } from './reducers'
import store from 'src/store/index'
import isEqual from 'lodash/isEqual'
import { resolve } from 'path'
import HooksComponent from './components/HooksComponent/index'

type Props = {
    data: object
    setParams: Function
    getParams: Function
    setSn: Function
}
class Table extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    componentDidMount = () => {
        // this.testReduxSaga()
        // this.testGenerator()
        // this.testLodash()
        // this.testAsync()
        // this.testProxy()
        // this.testHook()

        const state = {
            // 宿主端url入参
            fullUrl: '1', // 完整url
            appName: '2', // slh pocketslh xprj boss slwd fxz
            version: '3',
        }
        let a = Object.keys(state).reduce((o, v) => {
            console.log(o)
            console.log(v)
            // o[v] = (state) => state[v]
            return o
        }, {})
        console.log(a)
    }
    testReduxSaga = () => {
        this.props.getParams()
        console.log(store.getState().tableReducer.sn)
        // this.props.setSn(234)

        // console.log(store.getState().tableReducer.sn)
        // this.props.setParams({
        //     sn: 123,
        // })
    }

    testGenerator = () => {
        let f = func()
        console.log(f.next())
        console.log(f.next())
        console.log(f.next())
        console.log(f.next())
    }
    func = function* func() {
        console.log('one')
        yield '1'
        console.log('two')
        yield '2'
        console.log('three')
        return '3'
    }

    testLodash = () => {
        var object = { a: 1 }
        var other = { a: 1 }
        var c = object

        console.log(isEqual(object, other))
        // => true

        console.log(object === other)
        // => false

        console.log(object === c)
    }

    testAsync = () => {
        this.getAsync()
        console.log('testAsync')
    }
    getAsync = async () => {
        const data = await this.getApiData()
        console.log(data)
    }
    getApiData = () => {
        console.log(1)
        return new Promise((resolve) => {
            console.log(2)
            setTimeout(() => {
                console.log(3)
                let data = {
                    qwe: 'haha',
                }
                resolve(data)
            }, 500)
        })
    }

    testProxy = () => {
        var target = {
            name: 'poetries',
        }
        var logHandler = {
            // get: function (target: Object, key: string) {
            //     console.log(`${key} 被读取`)
            //     return target[key]
            // },
            // set: function (target, key, value) {
            //     console.log(`${key} 被设置为 ${value}`)
            //     target[key] = value
            // },
        }
        var targetWithLog = new Proxy(target, logHandler)

        // targetWithLog.name // 控制台输出：name 被读取
        // targetWithLog.name = 'others' // 控制台输出：name 被设置为 others

        console.log(target.name) // 控制台输出: others
    }

    render() {
        return (
            <div>
                <Button type='primary'>Button</Button>
                <Button type='primary'>Button</Button>
                <Button type='primary'>Button</Button>
                <HooksComponent />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state.tableReducer,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getParams: (params: object) => dispatch(getParams(params)),
        setParams: (params: object) => dispatch(setParams(params)),
        setSn: (sn: string) => dispatch(setSn(sn)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
