import React, {useState} from "react";
import {TableCell, TableRow} from "../../style";

export default function TableRowElement({ item }) {
    const [visible, setVisible] = useState(false);

    return (
        <TableRow
            onClick={() => setVisible(prevState => !prevState)}
        >
            <TableCell>{item.mark}</TableCell>
            <TableCell>{item.model}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.year}</TableCell>
            <TableCell
                style={{ display: visible ? "flex" : "none" }}
                fullWidth
            >
                <div><span>Color:</span> {item.Color}</div>
                <div><span>Country:</span> {item.country}</div>
                <div><span>Option:</span> {item.option}</div>
            </TableCell>
        </TableRow>
    )
}
