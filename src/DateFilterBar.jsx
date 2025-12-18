import { Button, TextField, Stack } from "@mui/material";

export default function DateFilterBar({ onChange }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained" onClick={() => onChange({ filterType: "today" })}>
        Today
      </Button>

      <Button variant="contained" onClick={() => onChange({ filterType: "yesterday" })}>
        Yesterday
      </Button>

      <TextField
        type="date"
        onChange={e => onChange(prev => ({ ...prev, startDate: e.target.value }))}
      />

      <TextField
        type="date"
        onChange={e => onChange(prev => ({ ...prev, endDate: e.target.value }))}
      />

      <Button
        variant="outlined"
        onClick={() => onChange({ filterType: "custom" })}
      >
        Apply
      </Button>
    </Stack>
  );
}
