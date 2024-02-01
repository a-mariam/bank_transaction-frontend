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
export const Error = styled.p`
    color : red
`;

export const Container = styled.div`
    display: flex;
    align-self:  flex-end;
    height : 40rem;
    width : 50rem;
    box-shadow: 10px 10px 10px 10px grey;
    background-color: white;
    // margin-left: auto;
    // margin-rigth: auto;
    // margin-top: 80px;
    border-radius: 30px 30px 30px 30px;
`;
export const InputField =  styled.input`
    height: 30px;
    width : 20rem;
    align-self: center;
    margin-right: 500px;
    margin-left: 10px;
    background-color: transparent;
    border-radius: 5px ;
    margin-top: ${(props) => props.spaceAbove};
    placeholder = ${(props) => props.display}
`;


export const SubmitButton = styled.button`
  height: 2rem;
  width: 20rem;
  background-color: mediumblue;
  color: white;
  margin-top: 30px;
  border-radius: 5px 5px 5px 5px;

`;