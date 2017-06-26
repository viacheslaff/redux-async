export function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                resolve([
                    {
                        id: 1,
                        firstName: 'Mark',
                        lastName: 'Otto',
                        nickname: '@mdo'
                    },
                    {
                        id: 2,
                        firstName: 'Jacob',
                        lastName: 'Thornton',
                        nickname: '@fat'
                    },
                    {
                        id: 3,
                        firstName: 'Larry',
                        lastName: 'the Bird',
                        nickname: '@twitter'
                    }
                ])
            },
            1000
        );
    });
}