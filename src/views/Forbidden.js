import React from "react";
import { Box, Button } from "@material-ui/core";
import { useHistory } from "react-router";

export const Forbidden = () => {
  const history = useHistory();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >
      <Box
        padding={2}
        border={2}
        borderColor="primary.main"
        borderRadius="borderRadius"
        boxShadow={3}
      >
        <Box>Forbidden.</Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push("/")}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
};
