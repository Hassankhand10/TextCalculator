import Container from '../Container';
import Navbar from '../Navbar';
import Form from './Form';
import BasicTable from './Table';

const MainContent = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Form />
        <BasicTable />
      </Container>
    </>
  );
}

export default MainContent;