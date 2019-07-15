import { TableHeaderColumn, TableRow, TableBody, TableRowColumn, TableHeader, Table } from "material-ui/Table";
import React from "react";

export default ({ messages, h }) =>
    <Table>
        <TableHeader>
            <TableRow>
                {h.map((e, j) =>
                    <TableHeaderColumn key={`thc-${j}`}>
                        {e.header}
                    </TableHeaderColumn>
                )}
            </TableRow>
        </TableHeader>
        <TableBody>
            {messages.map((msg, i) => row(msg, i, h))}
        </TableBody>
    </Table>;

const row = (e, j, h) =>  <TableRow key={`tr-${j}`}> {h.map((r, o) =>
    <TableRowColumn key={`trc-${o}`}> {e[r.prop]} </TableRowColumn> )} </TableRow>;