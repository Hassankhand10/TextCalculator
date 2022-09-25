import { useEffect, useState } from "react";
import { BasicTable } from "../../Table";
import { setTableHeaders } from "../../../redux/actions/table.action";
import { connect } from "react-redux";

const Table = (props) => {
  const headers = [
    {
      name: "A/c Name",
      prop: "acName"
    },
    {
      name: "Code",
      prop: "code"
    },
    {
      name: "Balance",
      prop: "balance"
    },
    {
      name: "Telephone",
      prop: "telephone"
    }
  ];

  useEffect(() => {
    props.setTableHeaders(headers);
  }, [])


  const [data, setData] = useState([{
    code: "C00004",
    acName: "Bank-A/C",
    balance: "50000",
    telephone: ""
  }, {
    code: "C00004",
    acName: "Bank-A/C",
    balance: "50000",
    telephone: ""
  }, {
    code: "C00004",
    acName: "Bank-A/C",
    balance: "50000",
    telephone: ""
  }])

  return (
    <BasicTable
      style={{ marginTop: "20px" }}
      data={data}
    />)
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setTableHeaders })(Table);