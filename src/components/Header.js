import React, { useState } from "react";
import styled from "styled-components";
import {AiOutlineClose} from "react-icons/ai"
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header() {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" />
      </Logo>
      <Menu>
        {cars && cars.map((car, index) => <button key={index}>{car}</button>)}
        <button>Solar Panels</button>
        <button>Solar Roof</button>
      </Menu>
      <RightMenu>
        <button>Shop</button>
        <button>Account</button>
        <button onClick={() => setBurgerStatus(true)}>Menu</button>
      </RightMenu>
      <BurgerMenu show={BurgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#" key={index}>
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Logo = styled.div`
  width: 20vw;
`;

const Menu = styled.div`
  display: flex;
  button {
    padding: 0.5vh 1vw;
    background: transparent;
    border: none;
    font-size: 16px;
    font-weight: bolder;
    transition: auto cubic-bezier();

    &:hover {
      background: rgb(196 216 239);
      border-radius: 20px;
      color: black;
    }
  }

  @media (max-width: 1060px) {
    display: none;
  }
`;

const RightMenu = styled(Menu)`
  width: 20vw;
  @media (max-width: 1060px) {
    display: block;
    width: 80vw;
    display: flex;
    justify-content: end;
    margin-right: 4vw;
  }
`;

const BurgerMenu = styled.div`
  width: 260px;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  a {
    text-decoration: none;
    font-weight: 600;
  }

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const CustomClose = styled(AiOutlineClose)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
