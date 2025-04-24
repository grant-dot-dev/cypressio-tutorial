import express from 'express';
import cors from 'cors';
const app = express();
const port = 4321;
app.use(cors());
// Middleware to parse JSON
app.use(express.json());
// Registration endpoint
app.post('/register', (req, res) => {
    const { fullName, email, password, confirmPassword, agreeToTerms } = req.body;
    // Simulate saving data to a database or further processing
    console.log('Received registration data:', { fullName, email, password, confirmPassword, agreeToTerms });
    // Respond to client
    res.status(200).send({ message: 'Registration successful' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
