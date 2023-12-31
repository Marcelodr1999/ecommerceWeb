const BASE_URL = 'http://127.0.0.1:8000/api-token-auth'; 
async function login(username, password) {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const authService = {
  login,
};

export default authService;


