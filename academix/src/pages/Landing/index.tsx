import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import ReactDOM from "react-dom";
import headerImg from '../../assets/img/stay connected.gif' 
import Navbar from "../../components/General/NavBar/LandingNav";
import LandingContent from "./content";
import { useNavigate } from "react-router-dom";
const Landing: React.FC = () => {
    const navigate = useNavigate();
  const CustomBox: any = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText: any = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return ReactDOM.createPortal(
    <>
    <Navbar/>
      <CustomBox component="header">
        {/*  Box text  */}
        <BoxText component="section">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#27292b",
            }}
          >
           Academix Stay Connected 
           At All Times
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              py: 3,
              lineHeight: 1.6,
              color: "#27292b",
            }}
          >
            something somthing....
          </Typography>

          <Box>
            <Button
              variant="contained"
              onClick={()=>{navigate("/login")}} // handle it if logged in dont forget
              sx={{
                mr: 2,
                px: 4,
                py: 1,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 0,
                borderColor: "#14192d",
                color: "#fff",
                backgroundColor: "#14192d",
                "&&:hover": {
                  backgroundColor: "#343a55",
                },
                "&&:focus": {
                  backgroundColor: "#343a55",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </BoxText>

        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              flex: "1",
              paddingTop: "0px",
              alignSelf: "center",
            },
            [theme.breakpoints.up("md")]: {
              flex: "2",
              alignSelf: "flex-end",
            },
          })}
        >
          <img
            src={headerImg}
            alt="headerImg"
            style={{
              width: "100%",
              marginBottom: 0,
            }}
          />
        </Box>
      </CustomBox>
      <LandingContent/>
    </>,
    document.getElementById("head")!
  );
};

export default Landing;
