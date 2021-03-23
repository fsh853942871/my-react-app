import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { setParams, getParams, setSn, func } from './reducers'
import store from 'src/store/index'

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
        this.props.getParams()
        console.log(store.getState().tableReducer.sn)
        // this.props.setSn(234)

        // console.log(store.getState().tableReducer.sn)
        // this.props.setParams({
        //     sn: 123,
        // })
        let f = func()
        console.log(f.next())
        console.log(f.next())
        console.log(f.next())
        console.log(f.next())
    }

    // state = {}
    render() {
        return (
            <div>
                <Button type='primary'>Button</Button>
                <Button type='primary'>Button</Button>
                <Button type='primary'>Button</Button>
            </div>
        )
    }

    func = function* func() {
        console.log('one')
        yield '1'
        console.log('two')
        yield '2'
        console.log('three')
        return '3'
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
