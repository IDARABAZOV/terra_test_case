import React from "react";
import { HeaderWrapper, Nav, NavItem, Button } from "./style";
import { useDispatch } from "react-redux";
import {sortByType, sortByYear, sortByMark, liveSearch} from "./features/table/tableSlice"
export default function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <HeaderWrapper>
                <Nav>
                    <NavItem>
                        <h3>Group by</h3>
                        <Button onClick={() => dispatch(sortByMark())}>Mark</Button>
                        <Button onClick={() => dispatch(sortByType())}>Type</Button>
                    </NavItem>
                    <NavItem>
                        <h3>Sort by</h3>
                        <Button onClick={() => dispatch(sortByMark())}>Mark</Button>
                        <Button onClick={() => dispatch(sortByType())}>Type</Button>
                        <Button onClick={() => dispatch(sortByYear())}>Year</Button>
                    </NavItem>
                    <NavItem>
                        <input
                            onInput={(e) => dispatch(liveSearch(e.target.value))}
                            type="text"
                            placeholder={"search"}
                        />
                    </NavItem>
                </Nav>
            </HeaderWrapper>
        </>
    )
}
