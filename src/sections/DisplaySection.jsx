import { gsap } from 'gsap';
import React from 'react'
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components'


const Section = styled.section`
    width: 100vw;
    height: 200vh;
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--white);

    &>*:nth-child(even){
        align-self: flex-end;
        margin-right: 4rem;
        text-align: right;
    }
    &>*:nth-child(odd){
        margin-left: 4rem;
    }
`;
const MainTitle = styled.h1`
    font-size: var(--fontBig);
    font-family: var(--fontL);

    background-image: linear-gradient(-45deg, var(--gradient));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
`;
const TextBlockRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
`
const TextBlockLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
`
const Title = styled.div`
    font-size: var(--fontlg);
    margin-bottom: 1rem;
`
const Text = styled.div`
    font-size: var(--fontxs);
    color: var(--greyLight);
    margin-bottom: 0.5rem;
    width: 55%;
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    transform: rotate(-25deg);
    z-index: 1;
    margin-bottom: 4rem:
`
const MovingText = styled.h1`
    font-size: var(--fontBig);
    font-family: var(--fontL);

    background-image: linear-gradient(-45deg, var(--gradient));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
`


const DisplaySection = () => {
    const container = useRef(null);
    const textOne = useRef(null);
    const textTwo = useRef(null);
  
    useLayoutEffect(() => {
      let t1 = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top-=500 top",
            end: "bottom top",
            scrub: 1,
          },
        })
        .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
        .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");
  
      return () => {
        if (t1) t1.kill();
      };
    }, []);

    
  return (
    <Section>
        <MainTitle>
            A display of  <br /> true intelligence.
        </MainTitle>
        <TextBlockRight>
            <Title>Advanced Super Retina XDR display with ProMotion</Title>
            <Text>
                <b style={{color: "white"}}>Dynamic Island </b> bubbles up alerts and Live Activities — so you don't miss them while you're doing something else. You can easily track your next ride, sports scores, flight status, and more.
            </Text>
            <Text>
                <b style={{color: "white"}}>Always-On display </b> Your Lock Screen stays glanceable, so you don't have to tap it to stay in the know. Using smart algorithms, iPhone detects when it's in your pocket or face down and goes dark to save battery life.
            </Text>
        </TextBlockRight>
        <TextBlockLeft ref={container}>
            <Title>Get in on the  <br />Action button.</Title>
            <Text>
                The all-new Action button is <b style={{color: "white"}}>a fast track to your favorite feature</b>. Once you set the one you want, just press and hold to launch the action.
            </Text>
            <Text>
               By default, the <b style={{color: "white"}}>Action button is set to toggle between Ring and Silent modes</b>. If you choose a different action, you can use Control Center to mute or use Focus filters to automatically set your iPhone to silent.
            </Text>
            <Text>
                Whatever you're doing, the Action button is at the ready. Launch Camera to catch a spontaneous selfie. Record an instant voice memo. You can even <b style={{color: "white"}}>select Shortcut to open an app or run a series of tasks</b> like switching on the lights in your living room and playing music.
            </Text>
        </TextBlockLeft>
        <TextContainer>
            <MovingText ref={textOne}>Tougher than ever!</MovingText>
            <MovingText ref={textTwo}>Every touch matters.</MovingText>
        </TextContainer>
    </Section>
  )
}

export default DisplaySection