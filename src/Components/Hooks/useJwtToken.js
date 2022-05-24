import { useEffect, useState } from 'react';

const useJwtToken = (user) => {
    const [jwtToken, setJwtToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentEmail = { email: email };

        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentEmail)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setJwtToken(accessToken)
                })
        }

    }, [user])
    return [jwtToken];
}

export default useJwtToken;