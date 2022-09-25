import { useContext } from 'react';
import { TableWithEditingContext } from '../context';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { connect } from 'react-redux';

const EditDialog = (props) => {
  const context = useContext(TableWithEditingContext);

  const handleClose = () => {
    context.dialogOpen.setter(false);
  };

  return (
    <Dialog open={context.dialogOpen.state} onClose={handleClose}>
      <DialogTitle>Edit entry:</DialogTitle>
      <DialogContent>
        {
          props.headers.map((header) => (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={header.name}
              type="email"
              fullWidth
              variant="standard"
            />
          ))
        }

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Edit</Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  headers: state.tableReducer.headers
})

export default connect(mapStateToProps)(EditDialog);