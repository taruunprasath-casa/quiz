import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionActions,
    Button,
    Container,
    Typography,
    Box,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import Navbar from '../components/Navbar';

const MyQuiz = () => {
    const quizzes = [
        {
            id: 1,
            title: 'Quiz 1',
            description:
                'This is a general knowledge quiz to test your awareness across various topics.',
        },
        {
            id: 2,
            title: 'Quiz 2',
            description:
                'Science quiz focused on physics, chemistry, and biology basics.',
        },
        {
            id: 3,
            title: 'Quiz 3',
            description:
                'History quiz covering major world events from the 18th to 20th centuries.',
        },
    ];

    const handleEdit = (quizId: number) => {
        console.log(`Edit quiz with ID: ${quizId}`);
    };

    const handleDelete = (quizId: number) => {
        console.log(`Delete quiz with ID: ${quizId}`);
    };

    return (
        <>
            <Navbar />

            <Container sx={{ mt: 12 }}>
                <Typography
                    variant='h4'
                    align='center'
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    Your Quizzes
                </Typography>

                <Box mt={4}>
                    {quizzes.map((quiz) => (
                        <Accordion key={quiz.id} sx={{ mb: 2 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel-${quiz.id}-content`}
                                id={`panel-${quiz.id}-header`}
                            >
                                <Typography variant='h6'>{quiz.title}</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>{quiz.description}</Typography>
                            </AccordionDetails>

                            <AccordionActions>
                                <Button
                                    size='small'
                                    color='error'
                                    onClick={() => handleDelete(quiz.id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    size='small'
                                    color='primary'
                                    onClick={() => handleEdit(quiz.id)}
                                >
                                    Edit
                                </Button>
                            </AccordionActions>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </>
    );
};

export default MyQuiz;
