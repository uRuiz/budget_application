import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color="green" label="Income:" value="1045.50" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance color="red" label=" Expenses:" value="623.50" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
export default DisplayBalances;
