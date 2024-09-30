import styled from "styled-components";
import CountUp from 'react-countup';
import { FaEllipsisVertical } from "react-icons/fa6";
const consolebg = require("../../../assets/imagens/network-console.png")


export const GridContent = styled.div `
    width: 100%;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    
`

export const HeaderContent = styled.div `
    width: 90%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 2rem;

`

export const Console = styled.div `
    width: 15rem;
    height: 7rem;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    background-color: #0056c6;
    background-image: url(${consolebg});
    background-position-x: 11rem;
    background-size: 10rem;
    background-repeat: no-repeat;
    border-radius: 1.5rem;
    padding: 2rem;

    h3 { 

        width: 100%;
        color: #fff;
    }

  
`

export const CountUpp = styled(CountUp)`
    color: #fff;
    margin: 0 auto;
    font-size: 4rem;
    text-align: center;
    font-weight: 700;
`

export const VerticalIcon = styled(FaEllipsisVertical)`
    margin: 0.500rem;
    padding: 0.500rem;
    border-radius: 1rem;
    color: #fff;
    background-color: #242424;
    &:hover { 
        color: #fff;
        background-color: #0056C6;
    }
`