import {
    Box,
    Paper,
    TextField,
    Typography,
    Container,
    Grid,
    Button,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
    title: string;
    description: string;
    numberOfQuestions: number;
};

const CreateQuiz = () => {
    const { register, handleSubmit, reset } = useForm<Inputs>({
        defaultValues: {
            title: "",
            description: "",
            numberOfQuestions: 0,
        },
    });

    const [quizType, setQuizType] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleQuizTypeSelect = (type: string) => {
        setQuizType(type); 
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (!quizType) {
            alert("Please select a quiz type first!");
            return;
        }

        const quizData = {
            ...data,
            type: quizType,
        };

        console.log("Quiz Created:", quizData);

        reset();
        setQuizType(null);

        navigate(`/${quizData.type}`, { state: quizData });
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 20, mb: 6 }}>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        mb: 6,
                    }}
                >
                    Create Your Quiz
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
                    <Paper
                        elevation={quizType === "multiple-choice" ? 12 : 8}
                        onClick={() => handleQuizTypeSelect("multiple-choice")}
                        sx={{
                            p: 6,
                            borderRadius: 3,
                            textAlign: "center",
                            backgroundImage:
                                quizType === "multiple-choice"
                                    ? "linear-gradient(to bottom right, #3f51b5, #1a237e)"
                                    : "linear-gradient(to bottom right, #000000, #1a1a1a)",
                            color: "white",
                            cursor: "pointer",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                            },
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            Multiple Choice
                        </Typography>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/2108/2108962.png"
                            alt="Multiple Choice Icon"
                            style={{ width: 100, height: 100, marginBottom: 20 }}
                        />
                    </Paper>
                </Grid>

                {quizType && (
                    <Paper elevation={5} sx={{ p: 5, borderRadius: 3 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{ mb: 3, fontWeight: "bold" }}
                            >
                                Quiz Details ({quizType})
                            </Typography>

                            <TextField
                                fullWidth
                                label="Title"
                                {...register("title", { required: true })}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                label="Description"
                                {...register("description")}
                                sx={{ mb: 3 }}
                                multiline
                                rows={3}
                            />

                            <TextField
                                fullWidth
                                type="number"
                                label="Number of Questions"
                                {...register("numberOfQuestions", { valueAsNumber: true })}
                                sx={{ mb: 4 }}
                            />

                            <Box sx={{ textAlign: "center" }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                >
                                    Create Quiz
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                )}
            </Container>
        </>
    );
};

export default CreateQuiz;
