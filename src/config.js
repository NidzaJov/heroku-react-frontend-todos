export const config = process.env.NODE_ENV === 'production'? {API_URL: 'https://heroku-node-backend-nidza.herokuapp.com'} : {
    API_URL: 'http://app.test:5000/api'
};