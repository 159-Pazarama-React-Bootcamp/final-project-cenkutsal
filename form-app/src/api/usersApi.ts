import { User } from './usersApiModels';

const baseUrl = 'localhost:4000/api';

const usersApi = {
    getLoggedInUser(): Promise<User> {
        return fetch(`${baseUrl}/users/me}`, { method: 'GET' })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    login(payload: User): Promise<User> {
        return fetch(`${baseUrl}/login}`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
};

export default usersApi;
