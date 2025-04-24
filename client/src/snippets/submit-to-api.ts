// const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
//     try {
//         const response = await fetch('http://localhost:4321/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         if (response.ok) {
//             setStatusMessage('Registration Complete');
//         } else {
//             setStatusMessage('Registration failed');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };

// const [statusMessage, setStatusMessage] = useState<string>("");