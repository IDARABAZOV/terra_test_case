import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
 }
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const HeaderWrapper = styled.header`
    padding: 20px 40px;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const NavItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const Button = styled.button`
    background: white;
    color: black;
    padding: 5px;
    border: 1px solid black;
    margin: 5px;
    cursor: pointer;
    
    &: active {
        background: #ffcccc;
    }
`

export const TableLayout = styled.div`
    min-width: 100%
    display: flex;
    flex-direction: column;
`

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: pointer;
`

export const TableCell = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    flex-basis: ${props => props.fullWidth ? "100%" : "23.16%" };
    border: 1px solid black;
    
    & > div {
        margin-right: 10px;
        
        & > span {
            font-weight: bold;
        }
    }
`
