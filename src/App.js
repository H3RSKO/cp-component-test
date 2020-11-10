import React, { useState, useEffect } from "react";
import {
  Dialog,
  TextField,
  Grid,
  Box,
} from "@material-ui/core";
import "./App.css";

// // data is passed in as JSON like:
// const data = {
//   "id": "value1",
//   "id": "value2"
// }


function App(props) {
  // passed in JSON
  const {data} = props

  // default data if nothing is passed in
  const initialGrid = {
    0: { 1: "", 2: "", 3: "" },
    1: { 4: "", 5: "", 6: "" },
    2: { 7: "", 8: "", 9: "" },
  };

  const [open, setOpen] = useState(true);
  const [grid, setGrid] = useState(initialGrid);
  const [search, setSearch] = useState('');

  // checks to see if data is passed in, If it is it inputs it into our grid
  useEffect(() => {
    if (Object.entries(data).length) {
      let dataArray = Object.values(data)
      dataArray.forEach((val, i) => {
        setGrid((prevState) => ({ ...prevState, [Math.ceil((i + 1) / 3 - 1)] : {...prevState[Math.ceil((i + 1) / 3 - 1)], [i + 1]: val} }))
      })
    }
  }, [])

  const handleClose = () => {
    setOpen(false);
  };

  // our input handler
  const handleInputChange = (event) => {
    const {name, value} = event.target
    setGrid((prevState) => ({ ...prevState, [Math.ceil(name / 3 -1)] : {...prevState[Math.ceil(name / 3 -1)], [name]: value} }));
    }

  // our search handler
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
                <Grid item container className="listItems" direction="row" key={i}>
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
