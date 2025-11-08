"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Comments from "./Comments";
import ProjectModal from "./ProjectModal";

const neonColors = [
  { 
    bg: "hsl(180, 100%, 25%)", 
    glow: "0px 0px 20px hsla(180, 100%, 50%, 0.8), 0px 0px 40px hsla(180, 100%, 50%, 0.4)",
    border: "hsl(180, 100%, 50%)"
  },
  { 
    bg: "hsl(190, 100%, 20%)", 
    glow: "0px 0px 20px hsla(190, 100%, 45%, 0.8), 0px 0px 40px hsla(190, 100%, 45%, 0.4)",
    border: "hsl(190, 100%, 45%)"
  },
  { 
    bg: "hsl(170, 100%, 25%)", 
    glow: "0px 0px 20px hsla(170, 100%, 50%, 0.8), 0px 0px 40px hsla(170, 100%, 50%, 0.4)",
    border: "hsl(170, 100%, 50%)"
  },
  { 
    bg: "hsl(200, 100%, 20%)", 
    glow: "0px 0px 20px hsla(200, 100%, 45%, 0.8), 0px 0px 40px hsla(200, 100%, 45%, 0.4)",
    border: "hsl(200, 100%, 45%)"
  },
];

const Card = ({ id, title, description, imgSrc, index, projectDetails }) => {
  const colorStyle = neonColors[index % neonColors.length];
  const [showComments, setShowComments] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <StyledWrapper $bgColor={colorStyle.bg} $glowColor={colorStyle.glow} $borderColor={colorStyle.border}>
      <div className="parent">
        <div
          className="card relative cursor-pointer"
          onClick={openModal}
        >
          <div className="glass" />
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{description}</span>
          </div>
        </div>

        

        {/* Modal du projet */}
        {showModal && (
          <ProjectModal 
            project={projectDetails} 
            onClose={() => setShowModal(false)} 
          />
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 290px;
    height: 300px;
    margin-bottom: 30px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: ${(props) => props.$bgColor};
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    position: relative;
    border: 2px solid ${(props) => props.$borderColor};

    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: ${(props) => props.$glowColor}, 0px 8px 15px rgba(0, 0, 0, 0.4);
      border-color: ${(props) => props.$borderColor};
    }
  }

  .glass {
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(15, 5, 5, 0.2) 100%
    );
  }

  .content {
    padding: 80px 30px 0px;

    .title {
      display: block;
      color: white;
      font-weight: 900;
      font-size: 20px;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      margin-bottom: 10px;
    }

    .text {
      display: block;
      color: rgba(255, 255, 255, 0.9);
      font-size: 15px;
      margin-top: 15px;
      text-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
      line-height: 1.4;
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .comment-button {
      background: rgba(0, 0, 0, 0.4);
      color: white;
      padding: 8px 12px;
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 12px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(0, 255, 255, 0.3);
        border-color: rgba(0, 255, 255, 0.7);
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
        transform: translateY(-1px);
      }
    }
  }
`;

export default Card;