import actionTypes from '../actions/types'

export default (state, action) => {
    if (state === undefined) {
        state = {
            loading: false,
            users: []
        }
    }

    switch (action.type) {
        case actionTypes.USERS_LOADING:
            state = Object.assign({}, state, {
                loading: true,
                users: []
            });
            break;

        case actionTypes.USERS_LOAD_SUCCESS:
            state = Object.assign({}, state, {
                loading: false,
                users: [...action.users]
            });
            break;
    }

    return state;
}