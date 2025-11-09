"use client";

import React from "react";
import styled from "styled-components";

const NeonNavLink = ({ href, children, onClick }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <a href={href} className="button">
        <div className="bg" />
        <div className="wrap">
          <div className="outline" />
          <div className="content">
            <span className="char state-1">
              {children.split("").map((char, i) => (
                <span key={i} data-label={char} style={{ "--i": i + 1 }}>
                  {char}
                </span>
              ))}
            </span>
          </div>
        </div>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --white: #ffe7ff6a;
    --purple-100: #20e8c761;
    --purple-200: #01060cff;
    --purple-300: #03092f93;
    --purple-400: #02031eff;
    --purple-500: #010312ff;
    --radius: 8px;

    border-radius: var(--radius);
    outline: none;
    cursor: pointer;
    font-size: 16px;
    font-family: Arial;
    background: transparent;
    letter-spacing: -0.5px;
    border: 0;
    opacity: 4;
    position: relative;
    margin: 3px 3px;
    width: auto;
    padding: 3px 3px;
    display: inline-block;
  }

  .bg {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    filter: blur(1,2px);
    background: var(--purple-500);
  }

  .wrap {
    border-radius: inherit;
    overflow: hidden;
    padding: 4px;
    background: linear-gradient(to bottom, var(--purple-100), var(--purple-400));
    position: relative;
    transition: all 0.3s ease;
  }

  .outline {
    position: absolute;
    inset: 0;
    opacity: 0;
    border-radius: inherit;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px var(--purple-400);
  }

  .content {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
    gap: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
    color: white;
    text-shadow: 0 0 2px rgba(0, 255, 255, 0.6), 0 0 5px rgba(0, 255, 255, 0.68), 0 0 10px rgba(19, 234, 234, 0.96);
  }

  .char span {
    transition: all 0.3s ease;
  }

  .button:hover .outline {
    opacity: 1;
  }

  .button:hover .wrap {
    transform: translate(2px, -2px);
  }
`;

export default NeonNavLink;
