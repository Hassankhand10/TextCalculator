import Container from "../Container";
import Table from "./Table";
import Form from "./Form";
import Navbar from "../Navbar";

const MainContent = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Form />
        <Table />
      </Container>
    </>
  );
};

export default MainContent;