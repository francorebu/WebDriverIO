const axios = require('axios');

describe('API test', () => {
  it('should retrieve user details from the API', async () => {
    const response = await axios.get('https://reqres.in/api/users/2');
    expect(response.status).toBe(200);
    expect(response.data.data).toHaveProperty('id');
    expect(response.data.data).toHaveProperty('email');
    expect(response.data.data).toHaveProperty('first_name');
    expect(response.data.data).toHaveProperty('last_name');

    const user = response.data.data;
    console.log('status: ' + response.status);
    console.log('User details:');
    console.log(`ID: ${user.id}`);
    console.log(`Email: ${user.email}`);
    console.log(`First Name: ${user.first_name}`);
    console.log(`Last Name: ${user.last_name}`);
  });
});
