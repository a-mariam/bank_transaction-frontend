import styled from "styled-components";


export const Background = styled.div`
   background-image: linear-gradient(to bottom, navy, mediumslateblue);
   height: 100%;
   width: 50%;
   border-radius: 5px 5px;
   margin-left: ${(props) => props.leftSpace}
`;

export const Background2 = styled.div`
   display: block;
   background-color: white;
   height: 100%;
   width: 50%;
   border-radius: 5px 5px;
   margin-left: ${(props) => props.leftSpace}
`;

export const Container = styled.div`
    display: flex;
    align-self:  flex-end;
    height : 700px;
    width : 70%;
    box-shadow: 10px 5px 5px 5px grey;
    background-color: white;
    margin-left: 15%;
    margin-top: 80px;
    border-radius: 30px 30px 30px 30px;
`;
export const InputField =  styled.input`
    height: 5%;
    width : 90%;
    align-self: flex-end;
    margin-left: 10px;
    background-color: rgba(235,225,221,0.949);
    margin-top: ${(props) => props.spaceAbove};
    placeholder = ${(props) => props.display}
`;