import { User } from './usersApiModels';

const baseUrl = 'http://localhost:4001/api';

const accessToken = getCookie('access-token');

function getCookie(name: string) {
    const cookies = Object.fromEntries(
        document.cookie.split('; ').map((cookie) => cookie.split('=').map(decodeURIComponent)),
    );

    return cookies[name] || null;
}

const usersApi = {
    getLoggedInUser(): Promise<User> {
        return fetch(`${baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    login(payload: User): Promise<User> {
        return fetch(`${baseUrl}/login/`, {
            method: 'POST',
            body: JSON.stringify(payload),
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Access-Token': accessToken || '',
                'Access-Control-Allow-Credentials': 'true',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
};

export default usersApi;
