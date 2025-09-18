import { Box, Button, Container, Typography } from '@mui/material';

const Hero = () => {
    return (
        <Box
            id="home"
            sx={{
                marginTop: '80px',
                height: '50vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2px',
                background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
                border: '2px solid #0e0e0eff',
                borderRadius: '10px',
                color: '#fff'
            }}
        >
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                Welcome to the Quiz App
            </Typography>

            <Container sx={{ marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Test your knowledge with our exciting quizzes!
                </Typography>
                <Typography variant="body1">
                    Dive into a variety of topics and challenge yourself. Whether you're a trivia buff or just looking for some fun, our quizzes are designed to entertain and educate. Get started now and see how much you know!
                </Typography>
            </Container>

            <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                    marginTop: '20px',
                    backgroundColor: 'white',
                    color: '#000',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: '#000',
                        color: '#fff',
                    },
                }}
            >
                Create Quiz
            </Button>
        </Box>
    );
};

export default Hero;
