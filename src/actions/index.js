import types from './types'
import { fetchUsers } from '../api/index'

export default {
    loadUsers() {
        return (dispatch) => {
            dispatch({ type: types.USERS_LOADING });

            fetchUsers()
                .then(users => dispatch({ type: types.USERS_LOAD_SUCCESS, users }))
                .catch(() => dispatch({ type: types.USERS_LOAD_ERROR }));
        }
    }
}
