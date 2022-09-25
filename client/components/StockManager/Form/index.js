import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
import { TextField } from "@mui/material"; import styling from './index.module.scss';

const Form = () => {
  return (
    <>
      <h1>Stock Manager</h1>
      <TextField
        className={`${styling.formElementMargin} ${styling.categoryTextField}`}
        id="outlined-select-currency"
        select
        label="Category:"
        helperText="Please select your account type"
      >
        {[{
          value: 'U',
          label: 'Unknown',
        }].map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div className={styling.formElementMargin}>
        <TextField
          className={`${styling.formRowElementMargin}`}
          id="outlined-select-currency"
          select
          label="Brand:"
          helperText="Please select your brand"
        >
          {[{
            value: 'U',
            label: 'Unknown',
          }].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={`${styling.formRowElementMargin}`}
          id="outlined-required"
          label="Nick:"
        />
      </div>
      <TextField
        className={`${styling.formRowElementMargin}`}
        id="outlined-required"
        label="Description:"
      />
      <div style={{ gap: "20px" }} className={styling.unitsGrid}>
        <div className={`${styling.gridColumn1} ${styling.formElementMargin}`}>
          <TextField
            className={`${styling.unitTextField} ${styling.formElementMargin}`}
            type="number"
            InputProps={{
              inputProps: {
              }
            }}
            id="outlined-required"
            label="B/F Qty:"
          />
          <TextField
            className={`${styling.unitTextField} ${styling.formElementMargin}`}
            type="number"
            InputProps={{
              inputProps: {
              }
            }}
            id="outlined-required"
            label="Op Cost:"
          />
        </div>
        <div className={`${styling.formElementMargin}`}>
          <div className={`${styling.formElementMargin} col-2`}>
            <TextField
              className={styling.formRowElementMargin}
              type="number"
              InputProps={{
                inputProps: {
                }
              }}
              id="outlined-required"
              label="MIN Qty:"
            />
            <TextField
              className={styling.formRowElementMargin}
              type="number"
              InputProps={{
                inputProps: {
                }
              }}
              id="outlined-required"
              label="MAX Qty:"
            />
          </div>
          <div className={`${styling.formElementMargin} col-2`}>
            <TextField
              className={styling.formRowElementMargin} type="number"
              InputProps={{
                inputProps: {
                }
              }}
              id="outlined-required"
              label="Packing:"
            />
            <TextField
              className={styling.formRowElementMargin} type="number"
              InputProps={{
                inputProps: {
                }
              }}
              id="outlined-required"
              label="Pkt Qty:"
            />
          </div>
          <div className={`${styling.formElementMargin} col-2`} >
            <TextField
              className={styling.formRowElementMargin} type="number"
              InputProps={{
                inputProps: {
                }
              }}
              id="outlined-required"
              label="Cost:"
            />
            <TextField
              className={styling.formRowElementMargin} type="number"
              InputProps={{
                inputProps: {
                }
              }}
              id="outlined-required"
              label="Retail:"
            />
          </div>
        </div>
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