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
    // font-weight: bold;
    font-size: larger;
    margin-bottom: ${(props) => props.spaceBelow};
    margin-left: ${(props) => props.spaceLeft};
    margin-right: ${(props) => props.spaceRight};
    color: ${(props) => props.color};
  
`;


export const Image = styled.image`
   src= ${((props) => props.imageSrc)}
`;

export const Section = styled.div`
  // width: 100%
  // height: 50rem;
  height: 400px;
   width: 100%;
    background-color: #cccccc;
  background-image : url(https://www.shutterstock.com/shutterstock/photos/2179380689/display_1500/stock-photo-happy-young-asian-saleswoman-looking-at-camera-welcoming-client-smiling-woman-executive-manager-2179380689.jpg);
   
`;
export const Slogan = styled.p`
 font-size: 50px;
 color :white;
 font-weight: 50px;
`;

export const SmallDiv = styled.div`
   width: 40%;
   height: 350px;
  //  box-shadow : 10px 10px 10px 10px grey;
  // border: 2px solid blue;
   border-radius: 30px 20px 30px 20px;
   background-color: transparent;
  // margin-bottom: ${(props) => props.spaceBelow};
  // background-color: ${(props)=> props.backgroundColor};
  // margin-top: ${(props) => props.spaceAbove};
  // margin-left: ${(props) => props.spaceLeft};
  // margin-right: ${(props) => props.spaceRight};
  // background-image: ${(props) => props.backgroundPicture};
  margin-left: 50rem;
  margin-right: 30px;
  outline: none;
  color: white;
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