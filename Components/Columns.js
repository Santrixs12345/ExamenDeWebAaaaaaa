import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Columns() {
  const items = [...Array(15)].map((val, i) => `Item ${i}`);
  return (
    <div>
      <h1>This is Fuking Spotifiz</h1>
      <div className="container">
        <div className="center-col">
          <span>List</span>
          <ul>
            {items.map((item, i) => (
              <li key={`item_${i}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="right-col">
          <div className="botonL">
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              <Button>letra</Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
