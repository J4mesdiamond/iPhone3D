import { gsap } from 'gsap';
import React, { useRef } from 'react';
import { useLayoutEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);
  @media screen and (max-width: 48em) {
    top: 2rem;
    transform: translate(-50%, 0%) rotate(0deg);
  }
`;

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;

    let updateColor = (color, text, rgbColor) => {

        textElem.innerText = text;
        textElem.style.color = color;

        rightElem.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
        leftElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    };

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: 'top top',
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: Elem,
        start: 'top top',
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
      },
    })
      .to(
        Elem,
        {
          onStart: updateColor,
          onStartParams: ['#4B4946', 'Black Titanium', '75, 73, 70'],
          onReverseComplete: updateColor,
          onReverseCompleteParams: ['#4B4946', 'Black Titanium', '75, 73, 70'],
        },
      )
      .to(
        Elem,
        {
          onStart: updateColor,
          onStartParams: ['#A1B4BD', 'Natural Titanium', '161, 180, 189'],
          onReverseComplete: updateColor,
          onReverseCompleteParams: ['#A1B4BD', 'Natural Titanium', '161, 180, 189'],
        },
      )
      .to(
        Elem,
        {
          onStart: updateColor,
          onStartParams: ["#F2F0ED", "White Titanium", "242, 240, 237"],
          onReverseComplete: updateColor,
          onReverseCompleteParams: ["#F2F0ED", "White Titanium", "242, 240, 237"],
        },
      )
      .to(
        Elem,
        {
          onStart: updateColor,
          onStartParams: ["#295178", "Blue Titanium", "41, 81, 120"],
          onReverseComplete: updateColor,
          onReverseCompleteParams: ["#295178", "Blue Titanium", "41, 81, 120"],
        },
      );

    return () => {};
  });

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef} />
      <Right ref={rightRef} />
    </Section>
  );
};

export default ColorSection;
