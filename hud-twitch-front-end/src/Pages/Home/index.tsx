import { AnimatedIcon, AnimatedSocialsContainer, BottomHud, Container, InfoContainer, Section, SocialSection, Title, Value } from "./styles"
import { AiFillHeart, AiFillLock } from 'react-icons/ai'
import { IoLogoGithub, IoLogoTwitch, IoLogoTwitter } from 'react-icons/io5'
import { useEffect, useState } from "react"
import { socket } from "../../services/socket"
import { transform, useAnimation } from "framer-motion"

export const Home = () => {

  const [lastFollower, setLastFollower] = useState('')
  const [lastSubscribe, setLastSubscribe] = useState('Não tem ainda :(')

  const lastFollowerAnimation = useAnimation()
  const locked1 = useAnimation()
  const locked2 = useAnimation()

  const socialAnimation = useAnimation()
  const twitterAnimation = useAnimation()

  useEffect(() => {
    socket.on('last_follower', (nick: string) => {
      // console.log(nick)
      setLastFollower(nick)
      if (nick != lastFollower) {
        lastFollowerAnimation.start(() => ({ scale: [1, 1.6, 0.8, 1] }))
        setTimeout(() => {
          locked1.start(() => ({ rotate: [15, -15, 15, -15, 0] }))
        }, 1000);
        setTimeout(() => {
          locked2.start(() => ({ rotate: [15, -15, 15, -15, 0] }))
        }, 2000);
      }
    })
    socket.on('last_subscribe', (nick: string) => {
      if (nick != lastFollower) {
        setLastSubscribe('')
        // controls.start(() => ({ scale: [1, 1.6, 0.8, 1] }))
      }
    })

    setInterval(async () => {
      // TWITTER!!
      await socialAnimation.start(() => ({ y: 50 }))
      await twitterAnimation.start(() => ({ opacity: 1 }))
      setTimeout(async () => {
        // GITHUB!!
        socialAnimation.start(() => ({ y: -40 }))
        twitterAnimation.start(() => ({
          opacity: 0,
          transition: {
            duration: 0.45
          },
        }))
      }, 5000);
    }, 10000)

  }, [])


  return <Container>
    <BottomHud>
      <Section>
        <AnimatedIcon animate={lastFollowerAnimation}>
          <AiFillHeart />
        </AnimatedIcon>
        <InfoContainer>
          <Title>Último seguidor</Title>
          <Value>{lastFollower}</Value>
        </InfoContainer>
      </Section>

      <Section>
        <AnimatedIcon animate={locked1}>
          <AiFillLock />
        </AnimatedIcon>
        <InfoContainer>
          <Title>Último subscriber</Title>
          <Value>{lastSubscribe || 'Libera com 50 followers'}</Value>
          {/* <Value>{lastSubscribe}</Value> */}
        </InfoContainer>
      </Section>

      <Section>
        <AnimatedIcon animate={locked2}>
          <AiFillLock />
        </AnimatedIcon>
        <InfoContainer>
          <Title>Último donate</Title>
          <Value>{'Próxima live eu libero 🤙🤙'}</Value>
        </InfoContainer>
      </Section>

      <AnimatedSocialsContainer animate={socialAnimation}>
        <SocialSection animate={twitterAnimation}>
          <AnimatedIcon>
            <IoLogoTwitter />
          </AnimatedIcon>
          <InfoContainer>
            <Title>Twitter</Title>
            <Value>lucioreyli</Value>
          </InfoContainer>
        </SocialSection>

        <SocialSection>
          <AnimatedIcon>
            <IoLogoGithub />
          </AnimatedIcon>
          <InfoContainer>
            <Title>GitHub</Title>
            <Value>lucioroadtoglory</Value>
          </InfoContainer>
        </SocialSection>
      </AnimatedSocialsContainer>
    </BottomHud>
  </Container>

}