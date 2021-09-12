import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../redux/actions";
import { getToken } from "../utils/functions";

export const Detail = ({countryUrl}) => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.detail)
    useEffect(() => {
        if(info.country === ""){
            dispatch(fetchDetail(getToken(), countryUrl))
        }
    }, [])
    return (
        <Box display = "flex" flexDirection="column">
            Detail: {countryUrl}
            <Box>{info.country}</Box>
            <Box>{info.continent}</Box>
            <Box>{info.day}</Box>
            <Box>{info.population}</Box>
            <Box>{info.cases["1M_pop"]}</Box>
            <Box>{info.cases.active}</Box>
            <Box>{info.cases.critical}</Box>
            <Box>{info.cases.new}</Box>
            <Box>{info.cases.recovered}</Box>
            <Box>{info.cases.total}</Box>
            <Box>{info.deaths.active}</Box>
            <Box>{info.deaths["1M_pop"]}</Box>
            <Box>{info.deaths.new}</Box>
            <Box>{info.deaths.total}</Box>
            <Box>{info.tests["1M_pop"]}</Box>
            <Box>{info.tests.total}</Box>
        </Box>
    )
}