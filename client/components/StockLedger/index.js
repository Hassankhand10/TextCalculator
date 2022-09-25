import Container from "../Container";
import Table from './Table';
import styling from './index.module.scss';
import Navbar from "../Navbar";

const MainContent = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Stock Ledger</h1>
        <Table />
        <p className={styling.totalQuantityAndAmount}>Total: xxxxx - xxxxxx</p>
      </Container>
    </>
  )
}

export default MainContent;