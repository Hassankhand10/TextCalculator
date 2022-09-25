import { useEffect, useState } from "react";
import { TableWithEditing } from "../../Table";
import { setTableHeaders } from "../../../redux/actions/table.action";
import { connect } from "react-redux";

const Table = (props) => {
  const headers = [
    {
      name: "Code",
      prop: "code"
    },
    {
      name: "A/c Name",
      prop: "acName"
    },
    {
      name: "A/c Type",
      prop: "acType"
    },
    {
      name: "Balance",
      prop: "balance"
    }
  ];

  useEffect(() => {
    props.setTableHeaders(headers);
  }, [])


  const [data, setData] = useState([{
    code: "C00004",
    acName: "Bank-A/C",
    acType: "Cash & Bank",
    balance: "50000"
  }, {
    code: "C00004",
    acName: "Bank-A/C",
    acType: "Cash & Bank",
    balance: "50000"
  }, {
    code: "C00004",
    acName: "Bank-A/C",
    acType: "Cash & Bank",
    balance: "50000"
  }])

  const handleRemove = i => {
    setData(data.filter((row, j) => j !== i)
    )
  };

  return (
    <TableWithEditing
      style={{ marginTop: "20px" }}
      handleRemove={handleRemove}
      data={data}
    />)
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setTableHeaders })(Table);