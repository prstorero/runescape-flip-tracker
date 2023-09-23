import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

export default styled(Card)`
  background-color: #039BE5;
  max-width: 400px;
  margin: 40px auto;
  width: 350px;

  & {
    .card-title {
      font-size: 2rem;
      color: #fff;
      text-align: center;
    }
    .card-text {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      margin-top: 1rem;
    }
    button {
      background-color: #616161;
      color: #fff;
      border: 0;
      padding: 8px;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background-color: #616161;
      }
    }
  }
`