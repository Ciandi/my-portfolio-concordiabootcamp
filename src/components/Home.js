import React from "react";
import {
  Container,
  Heading,
  Paragraph,
  IconList,
  Icon,
  Description,
  ImageContainer,
  Image,
  TextWrapper,
} from "./styles";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import myImage from "../images/XiangDi.png";
import myImage2 from "../images/XiangDiSu.png";

const Home = () => {
  return (
    <Container>
      <Heading>Hi!</Heading>
      <Description>
        <TextWrapper>
          <Paragraph>
            I'm Xiang Di Su, Web Developer based on html, css, javascript,
            react. Here, you'll find information about my skills, experiences,
            and projects. Feel free to explore and reach out to me!
          </Paragraph>
          <IconList>
            <FaReact size={40} />
            <Icon />
            <DiJavascript size={40} />
            <Icon />
            <IoLogoJavascript size={40} />
            <Icon />
            <FaGithub size={40} />
          </IconList>
        </TextWrapper>

        <ImageContainer>
          <Image src={myImage} alt="Xiang Di Su" />
        </ImageContainer>
      </Description>
      <Heading>About me</Heading>
      <Description>
        <ImageContainer>
          <Image src={myImage2} alt="Xiang Di Su" />
        </ImageContainer>

        <TextWrapper>
          <Paragraph>
            Hi there! Welcome to my portfolio, a technician by day and a
            passionate enthusiast by night. I thrive on challenges and love
            exploring various interests.
          </Paragraph>
          <Paragraph>
            I'm also deeply involved in the world of cryptocurrency and stocks,
            constantly analyzing trends and seeking new opportunities.
          </Paragraph>
          <Paragraph>
            In my free time, you'll often find me coding Let's connect and share
            experiences - whether it's gaming strategies, investment insights,
            coding tips, or simply exchanging stories, I'm always up for a chat!
          </Paragraph>
          <Paragraph>
            You can contact me through the contact section tab!
          </Paragraph>
        </TextWrapper>
      </Description>
    </Container>
  );
};

export default Home;
