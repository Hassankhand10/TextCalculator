import React from "react";
import {
  TableCell,
  TableRow,
} from "@mui/material";
import { connect } from "react-redux";

const Row = ({
  x,
  index,
  headers,
}) => {
  return (
    <TableRow key={`tr-${index}`} selectable={false}>
      {headers.map((y, k) => (
        <TableCell key={`trc-${k}`}>
          {x[y.prop]}
        </TableCell>
      ))}
    </TableRow>
  );
};

const mapStateToProps = (state) => ({
  headers: state.tableReducer.headers
})

export default connect(mapStateToProps)(Row);