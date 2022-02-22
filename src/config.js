export const config = process.env.NODE_ENV === 'production'? {API_URL: 'https://heroku-node-backend-nidza.herokuapp.com/api'} : {
    API_URL: 'http://localhost:5000/api'
};