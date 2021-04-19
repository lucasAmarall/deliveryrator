import React from "react";
import { IHomeProps } from "./interface";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CollaboratorsList from "../../Templates/CollaboratorsList";

const Home: React.FC<IHomeProps> = () => {
  return (
    <>
      <Box bgcolor="primary.main">
        <Container maxWidth="md">
          <Box
            height="70vh"
            minHeight="700px"
            maxHeight="1000px"
            display="flex"
            alignItems="center"
          >
            <Box height="400px" width="100%" bgcolor="secondary.main" mt={-16}>
              <h1>Home</h1>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box mt={-16} display="flex" mb={8} alignItems="center">
        <Container maxWidth="md">
          <Box
            height="400px"
            width="100%"
            bgcolor={"white"}
            borderRadius={16}
            boxShadow={16}
          >
            <CollaboratorsList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
