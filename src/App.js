import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance size="small" label="Your Balance:" value="2550.53" />

      <DisplayBalances />
      <MainHeader title="History" type="h3" />

      <EntryLine isExpense value="$10.00" description="Something" />
      <EntryLine value="$100,00" description="Something" />
      <EntryLine isExpense value="$20.00" description="Something" />

      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
