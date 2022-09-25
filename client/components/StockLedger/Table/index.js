import { useEffect, useState } from "react";
import { BasicTable } from "../../Table";
import { setTableHeaders } from "../../../redux/actions/table.action";
import { connect } from "react-redux";

const Table = (props) => {
  const headers = [
    {
      name: "IDescription",
      prop: "IDescription"
    },
    {
      name: "ICode",
      prop: "ICode"
    },
    {
      name: "QtyIn",
      prop: "qtyIn"
    },
    {
      name: "QtyOut",
      prop: "qtyOut"
    },
    {
      name: "Qty",
      prop: "qty"
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
  ];

  useEffect(() => {
    props.setTableHeaders(headers);
  }, [])


  const [data, setData] = useState([{
    IDescription: "Oppo F11-Pro",
    ICode: "C00004",
    qtyIn: 21010,
    qtyOut: 20,
    qty: 20990,
    packing: "",
    cost: 35000,
    stock: 4650000
  }, {
    IDescription: "Oppo F11-Pro",
    ICode: "C00004",
    qtyIn: 21010,
    qtyOut: 20,
    qty: 20990,
    packing: "",
    cost: 35000,
    stock: 4650000
  }, {
    IDescription: "Oppo F11-Pro",
    ICode: "C00004",
    qtyIn: 21010,
    qtyOut: 20,
    qty: 20990,
    packing: "",
    cost: 35000,
    stock: 4650000
  }])

  return (
    <BasicTable
      style={{ marginTop: "20px" }}
      data={data}
    />)
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setTableHeaders })(Table);