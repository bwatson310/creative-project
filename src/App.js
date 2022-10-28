import './App.css';
import {Box, Tab, Tabs, Typography} from "@mui/material";

function App() {
  return (
      <Box height= "fit-content" bgcolor= "darkgraygrey" width= "fit-content">
        <Box height= "fit-content" width = "fit-content" alignContent="center">
            <Tabs>
                <Tab  size= "medium" label="Clickable Link" href="#testId" component="a"  clickable sx={{
                    color: "black",
                    backgroundColor:"lightsteelblue",
                    alignContent: "center",
                    borderBlock: "medium",
                    borderBlockColor: "black",
                }}/>
                <Tab size= "medium" label="Clickable Link" href="#testId" component="a"  clickable sx={{
                    color: "black",
                    backgroundColor: "orange",
                    alignContent: "center",
                }}/>
                <Tab size= "medium" label="Clickable Link" href="#testId" component="a"  clickable sx={{
                    color: "black",
                    backgroundColor: "lightgreen",
                    alignContent: "center",
                }}/>
                <Tab size= "medium" label="Clickable Link" href="#testId" component="a" clickable sx={{
                    color: "black",
                    backgroundColor: "red",
                    alignContent: "center",
                }}/>
            </Tabs>
        </Box>

        <Box height= "fit-content" width="fit-content">
        </Box>
          <Box height= "fit-content">
              <Typography variant="h1" paragraph>

              </Typography>
          </Box>

          <Box bgcolor= "lightblue" width="1000" id="testId">

              I am the tested link

          </Box>
      </Box>


  );
}

export default App;
