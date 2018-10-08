import {combineReducers} from 'redux'
import redappReducer from 'redapp/es/reducer';

import themeReducer from "./theme/themeReducer";
import walletReducer from "./wallet/walletReducer";
import breederReducer from "./breeder/breederReducer";
import web3Red from "./web3/web3Red";

const reducer = combineReducers({
    theme: themeReducer,
    wallet: walletReducer,
    breeder: breederReducer,
    redapp: redappReducer,
    web3: web3Red
});

export default reducer;
