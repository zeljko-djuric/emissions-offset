import React from "react";
import "./App.css";
import { Card } from "./Components/Card";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  const [trips, setTrips] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/getTrips")
      .then((res) => res.json())
      .then((result) => {
        setTrips(result);
      });
  }, []);

  const numberOfTrips = trips.length;
  console.log("number of trips", numberOfTrips);
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={10}
      paddingTop="5"
      paddingLeft="5"
    >
      {trips.map((trip) => (
        <GridItem>
          <Card trip={trip} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default App;
