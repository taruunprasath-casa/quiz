import { Box, Card, CardHeader, Typography } from '@mui/material';

const QuizList = () => {
    const quizzes = [
        { id: 1, title: "General Knowledge", description: "Test your general knowledge." },
        { id: 2, title: "Science", description: "Explore the world of science." },
        { id: 3, title: "History", description: "Dive into historical events." },
        { id: 4, title: "General Knowledge", description: "Test your general knowledge." },
        { id: 5, title: "Science", description: "Explore the world of science." },
        { id: 6, title: "History", description: "Dive into historical events." },
    ];

    return (
        <Box id="myquiz" sx={{ padding: 4, border: '1px solid #0e0e0eff', borderRadius: '10px', marginTop: "40px" }}>
            <Typography sx={{ textAlign: "center", color: "black" }} variant="h3" gutterBottom>
                Available Quizzes
            </Typography>
            <Box sx={{ marginTop: "30px", display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                {quizzes.map((quiz) => (
                    <Card variant='outlined' key={quiz.id} sx={{ width: "30%", backgroundImage: "linear-gradient(to bottom right, #000000, #1a1a1a)", marginBottom: 2, }}>
                        <CardHeader sx={{ color: "white" }} title={quiz.title} />
                        <Typography variant="body2" color="white" sx={{ padding: 2 }}>
                            {quiz.description}
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default QuizList;
