import React from 'react';
import Table from "./features/table/Table";
import { GlobalStyle, Container } from "./style";
import Header from "./Header";


function App() {

    return (
      <>
          <GlobalStyle />
          <Container>
              <Header />
              <Table />
          </Container>

      </>

    );
}

export default App;
