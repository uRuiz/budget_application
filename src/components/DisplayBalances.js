import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({ totalExpense, totalIncome }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color="green" label="Income:" value={totalIncome} />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              color="red"
              label=" Expenses:"
              value={totalExpense}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
export default DisplayBalances;
