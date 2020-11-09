import React, {useState} from 'react'
import {DialogTitle, Dialog, List, ListItem} from '@material-ui/core';
import './App.css';

function App() {
  const initilaGrid = [[{content: '1'},{content: '2'},{content: '3'}],[{content: '4'},{content: '5'},{content: '6'}],[{content: '7'},{content: '8'},{content: '9'}]]
  const [open, setOpen] = useState(true)
  const [grid, setGrid] = useState(initilaGrid)

  const handleClose = () => {
    setOpen(true)
  }

  const handleInputChange = (event) => {
    setGrid({...grid, [event.target.name]: event.target.value})
  }

  return (
    <div>
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Grid</DialogTitle>
      <List className='popUp'>
        {grid.map((e, i) => (
           <ListItem text onChange={handleInputChange} key={i}>
            {e.content}
          </ListItem>
        ))}
      </List>
    </Dialog>
    </div>
  );
}

export default App;
