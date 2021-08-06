import { useEffect, useRef } from 'react'
import Lottie from 'lottie-react'

// Style
import { Button as ButtonComponent, ButtonLabel, IconContainer } from './style'

// Assets
import animationData from '../../public/assets/lottie/loader.json'

const Button = ({ title, onClick, disabled, icon, loading }) => {
  const lottieRef = useRef()

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        lottieRef.current?.pause()
      }, 400)
    } else {
      lottieRef.current?.play()
    }
  }, [loading])

  return (
    <ButtonComponent onClick={onClick} disabled={disabled} loading={loading}>
      <ButtonLabel>{title}</ButtonLabel>
      {icon !== undefined && (
        <IconContainer loading={loading}>{icon}</IconContainer>
      )}

      {loading && (
        <IconContainer>
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop
            autoPlay
            style={{ height: 48, width: 48 }}
          />
        </IconContainer>
      )}
    </ButtonComponent>
  )
}

export default Button
