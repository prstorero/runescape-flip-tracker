import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

/**
 * Reference https://www.youtube.com/watch?v=e3w9liPXSi4 for how
 * this button was made directionally aware.
 * 
 * NOTE: This will work in its full capacity for FireFox users if
 * the 'has' flag is enabled, or if Mozilla fully supports it some
 * time later. If the glad is not on, things will still work in a
 * limited capacity: the animation will always play from the center
 * instead of being directionally aware.
 */


const StyledButton = styled(Button)`
  position: relative;
  isolation: isolate;

  overflow: hidden;

  span {
    position: absolute;
    z-index: -1;
    width: 43.333%;
    height: 100%;

    background: transparent;
    opacity: 0.5;
  }

  :first-child {
    left: 0;
    top: 0;
  }

  :last-child {
    right: 0;
    top: 0;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background: #757575;
    // background: hotpink;
    width: 10%;
    aspect-ratio: 1;
    border-radius: 50%;

    // Center the ::before
    inset: 0;
    margin: auto;

    opacity: 0;

    transition:
      transform 200ms 200ms, opacity 200ms;
  }

  &:hover::before {
    transform: scale(20);
    opacity: 1;

    transition: transform 1000ms, opacity 500ms;
  }

  &:has(:first-child:hover)::before {
    margin-left: 0;
  }

  &:has(:last-child:hover)::before {
    margin-right: 0;
  }

  &:has(:first-child:hover)::before.
  &:has(:last-child:hover)::before {
    transition: transform 500ms, opacity 250ms;
  }
`

const FancyButton = ({ text }) => {
  return (
    <StyledButton>
      <span></span>
      {text}
      <span></span>
    </StyledButton>
  )
}

export default FancyButton