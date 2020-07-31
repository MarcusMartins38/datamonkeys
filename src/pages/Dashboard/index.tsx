import React from "react";
import { NavLink } from "react-router-dom";

import {
  Container,
  LeftSideContent,
  ProfileInfo,
  ServicesButtons,
  MiddleSideContent,
  RigthSideContent,
} from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LeftSideContent>
        <ProfileInfo>
          <img
            src="https://avatars0.githubusercontent.com/u/57776263?s=460&u=0492ca374347582300b38a8665c05574b329fec6&v=4"
            alt="perfil"
          />
          <h2>Julio Merisio</h2>
          <p>1231T233</p>
        </ProfileInfo>

        <ServicesButtons>
          <div>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Services</NavLink>
          </div>

          <div>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Services</NavLink>
          </div>
        </ServicesButtons>
      </LeftSideContent>

      <MiddleSideContent>
        <h1>Send Money</h1>
        <div>
          <h1>22,124</h1> <p>available</p>
        </div>
      </MiddleSideContent>

      <RigthSideContent></RigthSideContent>
    </Container>
  );
};

export default Dashboard;
