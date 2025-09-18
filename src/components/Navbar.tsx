import { AppBar, Container, Link, Stack, Typography } from '@mui/material'

const Navbar = () => {

    const navItems = [
        { name: "Home", id: "home" },
        { name: "MyQuiz", id: "myquiz" },
        { name: "Contact", id: "contact" },
        { name: "Create Quiz", id: "createquiz" }
    ];
    return (
        <>
            <AppBar position='fixed' sx={{ backgroundImage: "linear-gradient(-20deg, #06030ee3 0%, #000000aa 100%)", padding: "10px 0px" }}>
                <Container >
                    <Stack direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        width="120%"
                    >
                        <Typography variant="h3" >Quiz</Typography>
                        <Stack direction="row" gap={3}>
                            {navItems.map(navItem => (
                                <Link
                                    key={navItem.id}
                                    sx={{ color: "white", textDecoration: "none", fontSize: "20px" }} href={`#${navItem.id}`}
                                >
                                    {navItem.name}
                                </Link>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar