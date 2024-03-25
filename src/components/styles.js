// styles.js

import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

//HOME
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: #f0f0f0;
  height: 100vh;
`;

export const Heading = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-size: 50px;
  color: #333;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-left: 50px;
  margin-right: 50px;
  color: #666;
  font-size: 1.2rem;
  text-align: center;
`;

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 4rem;
  margin: 0 10px;
`;

export const Description = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const ImageContainer = styled.div`
  text-align: right;
  margin-left: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 400px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const TextWrapper = styled.div`
  text-align: left;
`;

export const TabletMedia = styled.div`
  @media screen and (min-width: 768px) {
    ${Container} {
      padding: 50px;
    }

    ${ImageContainer} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ${Image} {
      width: 45%;
    }

    ${TextWrapper} {
      width: 45%;
    }
  }
`;

//NAVBAR
export const ContainerNav = styled.header`
  background-color: #1e1e1e;
  color: #fff;
  padding: 20px 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavLinkItem = styled.li`
  margin-right: 20px;
`;

export const CustomNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #383838;
  }

  &.active {
    background-color: #2b2b2b;
  }
`;

// Contact

export const ContactContainer = styled.div`
  text-align: center;
  margin-top: 50px;

  h2 {
    margin-bottom: 40px;
    color: #333;
  }

  .social-links {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    a {
      margin: 0 15px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .form-container {
    margin-top: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      margin-bottom: 8px;
      font-weight: bold;
      color: #555;
    }

    input,
    textarea,
    button {
      margin-bottom: 15px;
      padding: 10px;
      width: 350px;
      border: 1px solid #ccc;
      border-radius: 8px;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }

    button {
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
//EXPERIENCE
export const ExperienceContainer = styled.div`
  text-align: center;
  margin-top: 50px;

  h2 {
    margin-bottom: 20px;
  }

  .experience-item {
    background-color: #f9f9f9;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    h3 {
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }

    ul {
      padding-left: 0;
      list-style-type: none;
    }

    li {
      margin-bottom: 5px;
    }
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(1); 
  }
  to {
    transform: scale(1.01); 
  }
`;


//PROJECT
export const ProjectContainer = styled.div`
  text-align: center;
  margin-top: 50px;

  h2 {
    margin-bottom: 20px;
  }

  .project-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    h3 {
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      color: #666;
    }

    .project-image {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    &:hover .project-image {
      animation: ${zoomIn} 0.3s ease forwards;
    }

    .view-project {
      color: #007bff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
      }
    }
  }
`;
