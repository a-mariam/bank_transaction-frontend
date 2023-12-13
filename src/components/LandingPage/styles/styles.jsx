import styled from "styled-components";


export const TopNav = styled.div`
  background-image: linear-gradient(to right, navy, blue);
  display: flex;
  overflow: hidden;
  align-items: flex-end;
   height: 60px;
   margin-bottom: 20px;
   border-radius: 3px 3px 3px 3px;
`;

export const Button = styled.button`
  background-image: linear-gradient( to right, navy , blue);
  // background-color: #3333bb;
  color: white;
  border-radius: 50px;
  height: 40px;
  margin-left: ${(props) => props.spaceLeft};
  margin-top: ${(props) => props.spaceAbove};

`;

export const Page = styled.div`
background-color: white;
  width: 100%;
  height: 100%;
`;

export const ReuseP = styled.p`
    width: 20%;
    height: 20%;
    font-weight: bold;
    font-size: larger;
    margin-bottom: ${(props) => props.spaceBelow};
    margin-left: ${(props) => props.spaceLeft};
    color: ${(props) => props.color};
  
`;


export const Image = styled.image`
   src= ${((props) => props.imageSrc)}
`;

export const Section = styled.div`
    display: flex;
    overflow: hidden;
    align-items: flex-end;
  margin-bottom: ${(props) => props.spaceBelow};
   
`;

export const SmallDiv = styled.div`
   width: 40%;
   height: 350px;
   box-shadow : 10px 5px 5px 5px grey;
   border-radius: 30px 20px 30px 20px;
  margin-bottom: ${(props) => props.spaceBelow};
  background-color: ${(props)=> props.backgroundColor};
  margin-top: ${(props) => props.spaceAbove};
  margin-left: ${(props) => props.spaceLeft};
  margin-right: ${(props) => props.spaceRight};
  background-image: ${(props) => props.backgroundPicture};
  outline: none;
 
`;

export const TextDiv = styled.div`
  margin-bottom: ${(props) => props.spaceBelow};
  margin-left: ${(props) => props.spaceLeft};
  color: ${(props) => props.color};
  // font-weight: bold;
  font-size: larger;
`;