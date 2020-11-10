import React, { useState, prevState } from "react";
import {
  Dialog,
  TextField,
  Grid,
  Box,
} from "@material-ui/core";
import "./App.css";

function App() {
  const initialGrid = {
    0: { 1: "1", 2: "2", 3: "" },
    1: { 4: "", 5: "", 6: "" },
    2: { 7: "", 8: "", 9: "" },
  };
  const [open, setOpen] = useState(true);
  const [grid, setGrid] = useState(initialGrid);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setGrid((prevState) => ({ ...prevState, [Math.ceil(name / 3 - 1)] : {...prevState[Math.ceil(name / 3 - 1)], [name]: value} }));

    }
    return (
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >

          <Box className="popUp">
            <TextField label="Search" className="searchBar"></TextField>
            <Grid container>
              {Object.values(grid).map((e, i) => (
                <Grid item className="listItems" fullWidth key={i}>
                  {Object.keys(e).map((innerElem) => (
                    <Grid item key={innerElem}>
                      <TextField
                        value={e.innerElem}
                        name={innerElem}
                        onChange={handleInputChange}
                        variant="outlined"
                        className="listItem"
                      >

                      </TextField>
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Dialog>
      </div>
    );
  };

export default App;
