import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TableWithEditing } from "../../Table";
import { setTableHeaders } from "../../../redux/actions/table.action";

const Table = (props) => {
  const headers = [
    {
      name: "Code",
      prop: "code"
    },
    {
      name: "Description",
      prop: "description"
    },
    {
      name: "Qty",
      prop: "quantity"
    },
    {
      name: "Packing",
      prop: "packing"
    },
    {
      name: "Cost",
      prop: "cost"
    },
    {
      name: "Stock",
      prop: "stock"
    }
  ]

  useEffect(() => {
    props.setTableHeaders(headers);
  }, [])



  const [data, setData] = useState([{
    code: "00001",
    description: "OPPO",
    quantity: 0,
    packing: "YJYJYJ",
    cost: 0,
    stock: 0
  }, {
    code: "00001",
    description: "OPPO",
    quantity: 0,
    packing: "YJYJYJ",
    cost: 0,
    stock: 0
  }, {
    code: "00001",
    description: "OPPO",
    quantity: 0,
    packing: "YJYJYJ",
    cost: 0,
    stock: 0
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