import React from "react";
import Provider from './context';
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
import EditDialog from './EditDialog';
import { connect } from "react-redux";

const TableWithEditing = ({
  data,
  headers,
  handleRemove,
  style
}) => {
  return (
    <Provider>
      <div style={style}>
        <TableContainer component={(props) => <Paper variant="outlined" {...props} />}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((element, i) => (
                  <TableCell key={`thc-${i}`}>{element.name}</TableCell>
                ))}
                <TableCell key={`thc-edit`}>Edit</TableCell>
                <TableCell key={`thc-delete`}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((element, i) =>
                <Row
                  x={element}
                  i={i}
                  handleRemove={handleRemove}
                />
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <EditDialog />
      </div>
    </Provider>
  );
}

const mapStateToProps = (state) => ({
  headers: state.tableReducer.headers
})

export default connect(mapStateToProps)(TableWithEditing);