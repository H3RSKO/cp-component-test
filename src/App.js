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
    0: { 1: "", 2: "", 3: "" },
    1: { 4: "", 5: "", 6: "" },
    2: { 7: "", 8: "", 9: "" },
  };
  const [open, setOpen] = useState(true);
  const [grid, setGrid] = useState(initialGrid);
  const [search, setSearch] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target
    console.log('name> ', name)
    console.log('value> ', value)
    console.log('grid> ', grid)
    setGrid((prevState) => ({ ...prevState, [Math.ceil(name / 3 -1)] : {...prevState[Math.ceil(name / 3 -1)], [name]: value} }));
    console.log('grid after> ', grid)
    }

  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log('search: ', search)
  }
    return (
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >

          <Box className="popUp">
            <TextField label="Search" className="searchBar" onChange={handleSearch}></TextField>
            <Grid container>
              {Object.values(grid).map((e, i) => (
                <Grid item className="listItems" fullWidth key={i}>
                  {/* {Object.values(e).filter(elem => elem.includes(search)).map((innerElem, j) => ( */}
                  {Object.entries(e).filter(elem => elem[1].includes(search)).map(innerElem => (
                    <Grid item key={innerElem[0]}>
                      <TextField
                        value={innerElem[1]}
                        name={innerElem[0]}
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
