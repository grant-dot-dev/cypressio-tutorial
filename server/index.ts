import express, { Express, Request, Response } from 'express';
import cors from 'cors';

interface RegistrationData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;

}

const app: Express = express();
const port = 4321;

app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Registration endpoint
app.post('/register', (req: Request, res: Response) => {
    const { fullName, email, password, confirmPassword, agreeToTerms }: RegistrationData = req.body;

    // Simulate saving data to a database or further processing
    console.log('Received registration data:', { fullName, email, password, confirmPassword, agreeToTerms });

    // Respond to client
    res.status(200).send({ message: 'Registration successful' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


