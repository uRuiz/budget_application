import { Statistic } from "semantic-ui-react";

function DisplayBalance({ label, value, size = "tiny", color = "black" }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>{label} </Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}
export default DisplayBalance;
