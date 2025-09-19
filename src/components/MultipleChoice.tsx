import { Box, Container, Paper, Typography, Button, TextField } from "@mui/material";
import Navbar from "./Navbar";
import { useForm, useFieldArray } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";


type Inputs = {
    question: string;
    answers: { value: string }[];
};

const MultipleChoice = () => {
    const { register, control, handleSubmit } = useForm<Inputs>({
        defaultValues: {
            question: "",
            answers: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
        },
    });

    const { fields } = useFieldArray({
        control,
        name: "answers",
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    bgcolor: "#f5f5f5",
                    pt: 8,
                }}
            >
                <Container maxWidth="md">
                    <Paper
                        elevation={5}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                        }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Typography variant="h6" gutterBottom>
                                Enter Question
                            </Typography>
                            <TextField
                                fullWidth
                                label="Question"
                                {...register("question")}
                                sx={{ mb: 3 }}
                            />

                            <Typography variant="subtitle1" gutterBottom>
                                Enter Answer Options
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                {fields.map((field, index) => (
                                    <TextField
                                        key={field.id}
                                        label={`Answer ${index + 1}`}
                                        {...register(`answers.${index}.value` as const)}
                                    />
                                ))}
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3 }}
                            >
                                Save Question
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};

export default MultipleChoice;
