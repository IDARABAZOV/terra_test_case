import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TableLayout} from "../../style";
import {fetchAsync} from "./tableSlice";
import TableRowElement from "./TableRowElement";

export default function Table() {
    const state = useSelector(state => state.table.filteredData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsync());
    }, [dispatch]);

    return (
        <>
            <TableLayout>
                {state.map(item => {
                    return (
                      <TableRowElement
                          key={item.ID}
                          item={item}
                      />
                    )
                })}

            </TableLayout>
        </>

    )
}
