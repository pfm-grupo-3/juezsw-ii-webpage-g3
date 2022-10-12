import * as React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";

export const DocumentsTable = ({
  caption,
  highlightOnHover,
  size,
  variation,
}) => (
  <Table
    caption={caption}
    highlightOnHover={highlightOnHover}
    size={size}
    variation={variation}
    color={"white"}
  >
    <TableHead>
      <TableRow>
        <TableCell as="th">Citrus</TableCell>
        <TableCell as="th">Stone Fruit</TableCell>
        <TableCell as="th">Berry</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Orange</TableCell>
        <TableCell>Nectarine</TableCell>
        <TableCell>Raspberry</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Grapefruit</TableCell>
        <TableCell>Apricot</TableCell>
        <TableCell>Blueberry</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Lime</TableCell>
        <TableCell>Peach</TableCell>
        <TableCell>Strawberry</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
