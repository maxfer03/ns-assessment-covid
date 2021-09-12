import React from "react";
import { Box } from "@material-ui/core";

export const IndividualStats = ({id, info}) => {
    return (
        <Box key = {id}>
            {info.country}
        </Box>
    )
}