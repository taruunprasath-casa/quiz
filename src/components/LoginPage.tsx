import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("isTeacher", isTeacher.toString());

    const mockUser = {
      email: "taruunprasath@gmail.com",
      password: "123456",
      isTeacher: true,
    }

    if (email === mockUser.email && password === mockUser.password) {
      navigate("/dashboard");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: "100%",
          borderRadius: 3,
          background: "linear-gradient(to bottom right, #a18f8f80, #1a1a1a46)",
        }}
      >
        <Box mb={3} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="black">
            Sign in to Quiz App
          </Typography>
          <Typography variant="body1" color="black">
            Welcome! Please enter your credentials.
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isTeacher}
                onChange={(e) => setIsTeacher(e.target.checked)}
              />
            }
            label="Are you a Teacher?"
            sx={{ color: "black" }}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontWeight: "bold", mt: 2 }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
