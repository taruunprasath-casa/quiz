import { Box, Paper, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
    const navigate = useNavigate();

    const handleQuizTypeSelect = (type: string) => {
        navigate(`/createquiz/${type}`);
    };

    return (
        <>
            <Navbar />
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    marginTop: "100px",
                    color: "black",
                    fontWeight: "bold",
                }}
            >
                Create Your Quiz
            </Typography>

            <Box
                sx={{
                    minHeight: "60vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 5,
                    flexWrap: "wrap",
                    padding: 4,
                }}
            >
                <Paper
                    elevation={8}
                    onClick={() => handleQuizTypeSelect("multiple-choice")}
                    sx={{
                        padding: 6,
                        borderRadius: 2,
                        textAlign: "center",
                        backgroundImage: "linear-gradient(to bottom right, #000000, #1a1a1a)",
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

                <Paper
                    elevation={8}
                    onClick={() => handleQuizTypeSelect("fill-in-the-blanks")}
                    sx={{
                        padding: 6,
                        borderRadius: 2,
                        textAlign: "center",
                        backgroundImage: "linear-gradient(to bottom right, #000000, #1a1a1a)",
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
                        Fill in the Blanks
                    </Typography>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3273/3273589.png"
                        alt="Fill Icon"
                        style={{ width: 100, height: 100, marginBottom: 20 }}
                    />
                </Paper>
            </Box>
        </>
    );
};

export default CreateQuiz;
