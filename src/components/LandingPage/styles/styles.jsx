import styled from "styled-components";


export const TopNav = styled.div`
  background-color: white;
  display: flex;
  overflow: hidden;
  align-items: flex-end;
`;

export const Button = styled.button`
  //background-color: white;
  background-color: #3333bb;
  color: white;
  border-radius: 50px;
  height: 40px;
  margin-left: ${(props) => props.spaceLeft};

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

// echo "# learning-about-spring-security" >> README.md
// git


// git remote add origin https://github.com/a-mariam/learning-about-spring-security.git
//     git branch -M main
// git push -u origin main
export const Image = styled.image`

`;

export const Section = styled.div`
    display: flex;
    overflow: hidden;
    align-items: flex-end;
  margin-bottom: ${(props) => props.spaceBelow};
   
`;

export const SmallDiv = styled.div`
  margin-bottom: ${(props) => props.spaceBelow};
  background-color: ${(props)=> props.backgroundColor};
  margin-top: ${(props) => props.spaceAbove};
  margin-left: ${(props) => props.spaceLeft};
  margin-right: ${(props) => props.spaceRight};
  background-image: ${(props) => props.backgroundPicture};
`;

export const TextDiv = styled.div`
  margin-bottom: ${(props) => props.spaceBelow};
  margin-left: ${(props) => props.spaceLeft};
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: larger;
`;