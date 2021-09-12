import React from "react";
import { CountriesTable } from "./CountriesTable";
import { IndividualStats } from "./IndividualStats";

export const DisplayStats = ({stats}) => {
    return(
        <div>
            
              <CountriesTable/>  
            
           {/*  {stats.map(e => {
                return (
                    <IndividualStats key = {stats.indexOf(e)} id = {e._id} info = {e}/>
                )
            })} */}
        </div>
    )
}