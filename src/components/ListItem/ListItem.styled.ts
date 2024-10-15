import styled from "styled-components";

export const ListItemLink = styled.span<{ data: string }>`
   display: block;
   text-decoration: none;
   padding: 10px;
   font-size: 20px;
   font-weight: 500;
   color: ${(props) => (props.data === "notDone") ? "red" : "green"};
`