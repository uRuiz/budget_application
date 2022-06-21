import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

export default function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
          {...entry}
        />
      ))}
    </Container>
  );
}
