import './App.css';
import {AppBar, Box, Card, Paper, Tab, Tabs, Typography} from "@mui/material";

function App() {
  return (
      <Box flex width= "fit-content" flexWrap sx={{scrollBehavior: "inherit"}}>
        <AppBar position="fixed">
            <Card sx={{backgroundColor: "grey", paddingBottom: "1rem", paddingTop: "1rem"}} variant="outlined"
                  height= "fit-content" width = "fit-content" alignContent="center">
                <Tabs variant= "fullWidth" sx={{paddingX: "2rem"}}>
                    <Tab  size= "medium" label="Introduction" href="introduction"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightskyblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab  size= "medium" label="The 2 quadrants" href="#The 2 Quadrants"  clickable sx={{
                        color: "black",
                        backgroundColor:"skyblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab  size= "medium" label="Clickable Link" href="#testclick"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightblue",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab  size= "medium" label="Clickable Link" href="#testId"  clickable sx={{
                        color: "black",
                        backgroundColor:"lightgreen",
                        alignContent: "center",
                        borderBlock: "medium",
                        borderColor: "black",
                        paddingX: "0.1rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab size= "medium" label="Clickable Link" href="#testId" component="a"  clickable sx={{
                        color: "black",
                        backgroundColor: "yellowgreen",
                        alignContent: "center",
                        paddingX: "0.2rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab size= "medium" label="Clickable Link" href="#testId" component="a"  clickable sx={{
                        color: "black",
                        backgroundColor: "orange",
                        alignContent: "center",
                        paddingX: "0.2rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                    <Tab size= "medium" label="Clickable Link" href="#testId" component="a" clickable sx={{
                        color: "black",
                        backgroundColor: "orangered",
                        alignContent: "center",
                        paddingX: "0.2rem",
                        margin: "0.2rem",
                        fontSize: "1.5rem",
                    }}/>
                </Tabs>
            </Card>
        </AppBar>
        <Card sx={{backgroundColor: "lightgray", paddingY: "1rem", paddingTop: "6rem"}}>
            <Typography textAlign="center" paddingTop="1rem" variant="h2" flex>
                Family Communication Patterns
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "lightskyblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem"}}>
                <Typography id="introduction" textAlign="center" paddingY="0.5rem" variant="h4">
                    Introduction:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" paddingTop="2rem" flex paragraph>
                We all come from different families. One of the key characteristics of each family is the way that
                we communicate. Each family has their own way of communicating with each other. As we grow older,
                the way that we communicate with our family changes. They may shift to forms that we are already
                familiar with or they may even become a completely different. The goal of this website is to help
                understand the way that families communicate.
            </Typography>
            <Typography variant="h6" paddingX="2rem" flex paragraph>
                One of the ways that families communicate is through patterns. Through these patterns it is easy
                to determine the nature of some of our family relationships. These different types of communication
                can be divided into 2 different quadrants. These quadrants are "Concept Orientation" and
                "Socio-Orientation". Using these two different quadrants, we are able to define four different
                categories that help describe the patterns in which our families communicate.
            </Typography>
            <Card variant="outlined" component={Paper} sx ={{
                backgroundColor: "skyblue", paddingX: "2rem", width: "25rem", marginLeft: "1rem"}}>
                <Typography id="The 2 Quadrants" textAlign="center" paddingY="0.5rem" variant="h6">
                    The Two Quadrants of Family Communication Patterns:
                </Typography>
            </Card>
            <Typography variant="h6" paddingX="2rem" flex paragraph>
                One of the ways that families communicate is through patterns. Through these patterns it is easy
                to determine the nature of some of our family relationships. These different types of communication
                can be divided into 2 different quadrants. These quadrants are "Concept Orientation" and
                "Socio-Orientation". Using these two different quadrants, we are able to define four different
                categories that help describe the patterns in which our families communicate.
            </Typography>
            <Typography id="testclick" variant="h6" paddingX="2rem" flex paragraph>
                One of the ways that families communicate is through patterns. Through these patterns it is easy
                to determine the nature of some of our family relationships. These different types of communication
                can be divided into 2 different quadrants. These quadrants are "Concept Orientation" and
                "Socio-Orientation". Using these two different quadrants, we are able to define four different
                categories that help describe the patterns in which our families communicate.
            </Typography>
            <Typography variant="h6" paddingX="2rem" flex paragraph>
                One of the ways that families communicate is through patterns. Through these patterns it is easy
                to determine the nature of some of our family relationships. These different types of communication
                can be divided into 2 different quadrants. These quadrants are "Concept Orientation" and
                "Socio-Orientation". Using these two different quadrants, we are able to define four different
                categories that help describe the patterns in which our families communicate.
            </Typography>
            <Typography variant="h6" paddingX="2rem" flex paragraph>
                One of the ways that families communicate is through patterns. Through these patterns it is easy
                to determine the nature of some of our family relationships. These different types of communication
                can be divided into 2 different quadrants. These quadrants are "Concept Orientation" and
                "Socio-Orientation". Using these two different quadrants, we are able to define four different
                categories that help describe the patterns in which our families communicate.
            </Typography>
        </Card>
      </Box>



  );
}

export default App;
