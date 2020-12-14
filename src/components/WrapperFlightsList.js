import React from "react";
import Grid from "@material-ui/core/Grid";
import TopBar from "../components/Topbar";
import "../pages/flightsList.css";
import WrapperMoreDetails from "../components/WrapperMoreDetails";
import ButtonComponents from "../components/Button";
import FlightInformationListGrid from "../components/FlightsInformationListGrid";
function WrapperFlightsList({
  arr,
  flights,
  handleShowDetails,
  handleShowLess,
  handleDetailsFlight,
}) {
  return (
    <Grid className="gridContainer" container>
      <TopBar />
      {flights?.map((val) => {
        return (
          <Grid
            key={val.id}
            style={{ margin: "40px" }}
            container
            className="containerItem"
            item
            md={12}
            lg={12}
            xs={12}
          >
            <FlightInformationListGrid
              handleDetailsFlight={handleDetailsFlight}
              val={val}
            />
            <Grid className="buttonDetailsFlightsItem" item md={12} xs={12}>
              {!arr.includes(val.id) ? (
                <ButtonComponents
                  func={() => handleShowDetails(val.id)}
                  size="small"
                  val="Mostra di più"
                />
              ) : null}
            </Grid>

            {arr.includes(val.id) ? (
              <WrapperMoreDetails val={val} handleShowLess={handleShowLess} />
            ) : null}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default WrapperFlightsList;
