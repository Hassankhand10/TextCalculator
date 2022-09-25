import Container from "../Container";
import Table from './Table';
import styling from './index.module.scss';
import Navbar from "../Navbar";

const Ledger = (props) => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>{props.name} Ledger</h1>
        <Table />
        <p className={styling.totalAmount}>Total: xxxxx - xxxxxx</p>
      </Container>
    </>
  )
}

export default Ledger;