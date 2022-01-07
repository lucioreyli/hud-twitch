import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`

export const BottomHud = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  color: white;
  font-size: 20px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`

export const Value = styled.h2`
  font-size: 20px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`
export const Section = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
`

export const SocialSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0px 20px;

  
  margin-bottom: 30px;
  padding-top: 15px;
`

export const AnimatedIcon = styled(motion.div)`
font-size: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  `;

export const AnimatedSocialsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  
  /* gap: 3rem; */

`