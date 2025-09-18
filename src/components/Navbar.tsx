import {
    AppBar,
    Container,
    Link,
    Stack,
    Typography,
    Box,
    Button,
    Avatar
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const Navbar = () => {

    const isTeacher = localStorage.getItem("isTeacher") === "true";

    const navItems = [
        { name: "Home", id: "dashboard" },
        { name: "MyQuiz", id: "myquiz" },
        { name: "Create Quiz", id: "createquiz" },
    ];

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundImage: "linear-gradient(-20deg, #06030ee3 0%, #000000aa 100%)",
                padding: "10px 0px",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Container>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {/* Logo and title */}
                    <Box display="flex" alignItems="center" gap={1}>
                        <img
                            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                            src="https://cdn-icons-png.flaticon.com/128/5692/5692030.png"
                            alt="logo"
                        />
                        <Typography variant="h3" component="div" sx={{ userSelect: 'none' }}>
                            Quizz App
                        </Typography>
                    </Box>

                    {/* Navigation links */}
                    <Stack direction="row" gap={5}>
                        {navItems.map((navItem) => (
                            <Link
                                key={navItem.id}
                                sx={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    cursor: "pointer"
                                }}
                                href={`/${navItem.id}`}
                            >
                                {navItem.name}
                            </Link>
                        ))}
                    </Stack>

                    <Button variant="contained" href="/">
                        Logout
                    </Button>

                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                        {isTeacher ? "T" : "S"}
                    </Avatar>
                </Stack>
            </Container>
        </AppBar>
    );
};

export default Navbar;
