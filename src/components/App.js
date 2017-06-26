import React from 'react'
import { connect } from 'react-redux'

import Table from './Table'
import actions from '../actions'


class App extends React.Component {
    render() {
        const { users, usersLoading, loadUsers } = this.props;

        return (
            <div>
                <h4>Hello world!</h4>
                <Table users={users} loading={usersLoading} loadUsers={loadUsers} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        usersLoading: state.table.loading,
        users: state.table.users
    }
}

export default connect(mapStateToProps, actions)(App);