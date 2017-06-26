import table from './table'
import actionTypes from '../actions/types'

export default (state, action) => {
    if (state === undefined) {
        state = {
            table: table(undefined, action)
        }
    }

    switch (action.type) {
        case actionTypes.USERS_LOADING:
        case actionTypes.USERS_LOAD_SUCCESS:
            state = Object.assign({}, state, {
                table: table(state.table, action)
            });
            break;
    }

    return state;
}