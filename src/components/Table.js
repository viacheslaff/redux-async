import React from 'react'

export default (props) => {
    const { users, loading, loadUsers } = props;

    let content;

    if (loading) {
        content = <div className="panel-body">Loading...</div>
    }
    else if (users.length === 0) {
        content = <div className="panel-body">No users</div>
    }
    else {
        content = (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.nickname}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }

    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                Panel heading
                {' '}
                <button className="btn btn-xs btn-success pull-right" onClick={loadUsers}>Load users</button>
            </div>
            {content}
        </div>
    )
}