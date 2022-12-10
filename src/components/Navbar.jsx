import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../reponsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Warpper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;

  a:link,
  a:hover,
  a:focus,
  a:active,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  a:link,
  a:hover,
  a:focus,
  a:active,
  a:visited {
    text-decoration: none;
    color: inherit;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {

  return (
    <Container>
      <Warpper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/">OLI.</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/Register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Login">SIGN IN</Link>
          </MenuItem>
          <MenuItem style={{ textDecoration: "none" }}>
            <Badge badgeContent={4} color="primary">
              <Link to="/Cart">
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Warpper>
    </Container>
  );
};

export default Navbar;
