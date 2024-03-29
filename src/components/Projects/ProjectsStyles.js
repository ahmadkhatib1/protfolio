import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Img = styled.img`
  width:100%;
  height:200px;
  object-fit: contain;
  overflow: hidden;
  border-radius:20px;
`
export const Button = styled.button`
  min-width:5rem;
  margin-right:2rem;
  padding:0.5rem 1rem;
  border:none;
    border-radius: 50px;
  background:white;
  color:rgb(65,98,168);
  border:2px solid rgb(28,36,53);
  font-weight: bold;
  cursor: pointer;
   &.active{
      background:rgb(65,98,168);
      color:white;
  }
`

export const GridContainer = styled(motion.section)`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
padding-bottom: 10px;
padding-top: 35px;
border-radius:20px;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled(motion.div)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  border-radius:20px;
  min-height: 650px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  min-height: 50px;
  padding-top: 10px;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  min-height:150px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
gap:5px;
flex-wrap: wrap;
line-height: 1.5;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`
export const Span = styled.span`
  font-weight: bold;
  margin: 10px 0;
  color: gold;
`;
//filter 
export const NavMenue= styled.div`
display: flex;
align-items: center;
justify-content:center;
`;