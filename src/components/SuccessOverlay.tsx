import React, { CSSProperties } from 'react';


interface Props {
  onClick(): void
}

const containerStyles = {
  backgroundColor: 'rgba(255,255,255,0.9)',
  top: 0, bottom: 0, right: 0, left: 0,
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: 2,
} as CSSProperties

const innerContainerStyles = {
  textAlign: 'center',
  paddingTop: 200
} as CSSProperties

export default function SuccessOverlay({ onClick }: Props) {
  return (
    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        <iframe src="https://giphy.com/embed/3o6fJ1BM7R2EBRDnxK" width="480" height="234" frameBorder="0"
                className="giphy-embed" allowFullScreen/>
        <h5>You won this round!</h5>
        <button type={'reset'} onClick={onClick}>Next translation</button>
      </div>
    </div>
  )
}
