import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer} from './reducer'

const storeObj = createStore(reducer,composeWithDevTools(applyMiddleware()));

export default storeObj;