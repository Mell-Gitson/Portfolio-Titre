"use client";

import React from "react";
import styled from "styled-components";

const NeonButton = ({ children, onClick, type = "button", disabled = false, className }) => {
  return (
    <StyledWrapper className={className}>
      <button onClick={onClick} type={type} disabled={disabled}>
        {children}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --cyan: #00faff;
    --cyan-glow: rgba(0, 250, 255, 0.6);
    --cyan-soft: rgba(0, 250, 255, 0.15);

    font-size: 15px;
    padding: 0.7em 2.7em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s ease;
    line-height: 1.4em;
    border: 2px solid var(--cyan);
    background: linear-gradient(
      to right,
      var(--cyan-soft) 1%,
      transparent 40%,
      transparent 60%,
      var(--cyan-soft) 100%
    );
    color: var(--cyan);
    box-shadow:
      inset 0 0 10px var(--cyan-glow),
      0 0 12px 3px rgba(0, 255, 255, 0.2),
      0 0 20px 5px rgba(0, 255, 255, 0.1);
    cursor: pointer;
    text-shadow: 0 0 8px var(--cyan-glow);
  }

  button:hover {
    color: #b9ffff;
    box-shadow:
      inset 0 0 15px rgba(0, 255, 255, 0.8),
      0 0 20px 6px rgba(0, 255, 255, 0.4);
    text-shadow: 0 0 12px rgba(0, 255, 255, 0.9);
  }

  button::before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.45s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(0, 255, 255, 0.15) 40%,
      rgba(0, 255, 255, 0.15) 60%,
      transparent 100%
    );
  }

  button:hover::before {
    transform: translateX(15em);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: inset 0 0 8px rgba(0, 255, 255, 0.3);
  }
`;

export default NeonButton;
