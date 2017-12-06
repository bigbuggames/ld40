import { keyframes } from 'styled-components'

const fadeIn = keyframes`
  100% { opacity: 1; }
`

const fadeOut = keyframes`
  100% { opacity: 0; }
`

const pulse = keyframes`
  50% { transform: scale3d(1.02, 1.02, 1); }
`

export default {
  fadeIn,
  fadeOut,
  pulse
}
