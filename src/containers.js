import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import App from './App'
import {changeInitVal,changeAfterAddVal,changeAfterSubVal} from './actions'

function mapStateToProps(state){
    console.log("mapStateToProps",state)
    return {
        storeData:state.resdata,
        initval : state.initvalue,
        afaddval : state.afteraddval,
        afsubval : state.aftersubval
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        changeinitalval:changeInitVal,
        changeafteraddval:changeAfterAddVal,
        changeaftersubval:changeAfterSubVal
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);