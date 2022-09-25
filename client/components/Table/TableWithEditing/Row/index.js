import { useContext } from "react";
import { TableWithEditingContext } from "../context";
import {
  TableCell,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TrashIcon from "@mui/icons-material/Delete"
import styling from './Row.module.scss';
import { connect } from "react-redux";

const Row = (
  {
    x,
    index,
    headers,
    handleRemove,
  }) => {
  const context = useContext(TableWithEditingContext)

  return (
    <TableRow key={`tr-${index}`} selectable={false}>
      {headers.map((y, k) => (
        <TableCell key={`trc-${k}`}>
          {x[y.prop]}
        </TableCell>
      ))}
      <TableCell>
        <EditIcon className={styling.iconPointer} onClick={() => context.dialogOpen.setter(true)} />
      </TableCell>
      <TableCell>
        <TrashIcon className={styling.iconPointer} onClick={() => handleRemove(index)} />
      </TableCell>
    </TableRow>
  );
};

const mapStateToProps = (state) => ({
  headers: state.tableReducer.headers,
})

export default connect(mapStateToProps)(Row);