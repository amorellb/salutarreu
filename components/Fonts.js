import { Global } from '@emotion/react'

function Fonts() {
  return (
    <Global
      styles={`
  @font-face {
    font-family: 'AkzidenzGroteskBQ-Cnd';
    src: url('/fonts/AkzidenzGroteskBQ-Cnd.ttf') format('truetype');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AkzidenzGroteskBQ-Reg';
    src: url('/fonts/AkzidenzGroteskBQ-Reg.ttf') format('truetype');
    font-style: normal;
    font-display: swap;
  }
  `}
    />
  )
}

export default Fonts
