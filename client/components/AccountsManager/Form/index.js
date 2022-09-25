import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import styling from './index.module.scss'

const Form = () => {
  return (
    <>
      <h1>Accounts Manager</h1>
      <TextField
        className={`${styling.formElementMargin} ${styling.typeTextField}`}
        id="outlined-select-currency"
        select
        label="A/c Type:"
        helperText="Please select your account type"
      >
        {[{
          value: 'C',
          label: 'Capital',
        }].map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        className={`${styling.formElementMargin} ${styling.nameTextField}`}
        id="outlined-required"
        label="A/c Name:"
      />
      <div className={styling.formElementMargin}>
        <TextField
          className={styling.formRowElementMargin}
          id="date"
          label="B/F Date:"
          type="date"
          defaultValue="2017-05-24"
        />
        <TextField
          className={styling.formRowElementMargin}
          type="number"
          InputProps={{
            inputProps: {
            }
          }}
          id="outlined-required"
          label="$:"
        />
        <TextField
          className={styling.formRowElementMargin}
          type="number"
          InputProps={{
            inputProps: {
            }
          }}
          id="outlined-required"
          label="B/F Amount:"
        />
      </div>
      <Button
        className={`${styling.formElementMargin} ${styling.insertButton}`}
        variant="contained"
      >
        Insert
      </Button>
    </>
  );
}

export default Form;