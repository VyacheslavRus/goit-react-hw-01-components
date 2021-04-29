import styled from 'styled-components';

export const FriendsListItemStyled = styled.li`

width: 200px;
border: none;
margin-bottom: 10px;
background-color: blueviolet;
box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
display: flex;
align-items: center;

  .status{
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${({ isOnline }) => (isOnline ? "green" : "red")}
}
.name{
    font-weight: 700;
}`