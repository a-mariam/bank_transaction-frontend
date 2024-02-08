import styled from "styled-components";


export const TopNav = styled.div`
  background-image: linear-gradient(to right, navy, blue);
  display: flex;
  overflow: hidden;
  align-items: flex-end;
   height: 60px;

   border-radius: 3px 3px 3px 3px;
`;

export const Button = styled.button`
  // background-image: linear-gradient( to right, navy , blue);
  background-color: blue;
  color: white;
  border-radius: 50px;
  height: 50px;
  margin-left: ${(props) => props.spaceLeft};
  margin-top: ${(props) => props.spaceAbove};
  margin-bottom: ${(props) => props.down}

`;

export const Page = styled.div`
background-color: white;
  width: 100%;
  height: 100%;
`;

export const ReuseP = styled.p`
    width: 20%;
    height: 20%;
    // font-weight: bold;
    font-size: larger;
    margin-bottom: ${(props) => props.spaceBelow};
    margin-left: ${(props) => props.spaceLeft};
    margin-right: ${(props) => props.spaceRight};
    color: ${(props) => props.color};
  
`;





export const Slogan = styled.p`
 font-size: 50px;
 color : ${(props) => props.color}
 margin-botton: ${(props) => props.spaceBelow}
 font-weight: 50px;
`;
export const Card = styled.div`
 width: 100%;
 height: 30rem;

 margin-top: 30px;
 background-color: blue;
 border-radius: 10px 10px 10px 10px;
`;


export const BlueSection = styled.div`
 width: 100%;
 height: 30rem;
 background-color: blue;
 border-radius: 15px 15px 15px 15px;
 display: center;

`;

export const WhiteSection = styled.div`
width: 100%;
height: 30rem;
margin-top: 30px;
background-color: lightsteelblue;
border-radius: 15px 15px 15px 15px;
display: center;
`;
export const Img = styled.img`
   src: ${(props) => props.image};
   margin-top: 30px;
   margin-left: ${(props) => props.leftSpace};
   margin-right: ${(props) => props.rightSpace}
   height: ${(props) => props.height};
   width: 30%;
   object-fit: cover;
   border-radius: 15px 15px 15px 15px;

`;
  

export const SmallDiv = styled.div`
   width: 40%;
   height: 350px;
   border-radius: 30px 20px 30px 20px;
  //  background-color: transparent;
  // background-image: linear-gradient(white , blue);
  margin-left: 50rem;
  margin-right: 30px;
  outline: none;
  color: blue;
  font-size: 15px;
 
`;

export const DownNav = styled.div`
 background-color: blue;
 margin-top: 20px
 width: 20rem;
 height: 20rem
 
`;

export const TextDiv = styled.div`
  margin-bottom: ${(props) => props.spaceBelow};
  margin-left: ${(props) => props.spaceLeft};
  color: ${(props) => props.color};
  // font-weight: bold;
  font-size: larger;
`;