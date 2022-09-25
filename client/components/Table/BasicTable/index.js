import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Paper
} from "@mui/material";
import Row from "./Row";
import { connect } from "react-redux";

const BasicTable = ({
  data,
  headers,
  style
}) => {
  return (
    <div style={style}>
      <TableContainer component={(props) => <Paper variant="outlined" {...props} />}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((element, i) => (
                <TableCell key={`thc-${i}`}>{element.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((element, i) =>
              <Row
                x={element}
                i={i}
              />
            )}
          </TableBody>
        </ Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  headers: state.tableReducer.headers
});

export default connect(mapStateToProps)(BasicTable);