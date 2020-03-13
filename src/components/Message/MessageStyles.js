import styled from 'styled-components'

const MessageStyles = styled.div`
  display: flex;
  justify-content: ${props => props.position};

  .content {
    padding: 15px 25px;
    margin-top: 10px;
    background-color: ${props => props.backgroundColor};
    max-width: 350px;
    min-width: 200px;
    border-radius: ${props => props.borderRadius}px;
    color: ${props => props.color};
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.35px;
  }
`

export default MessageStyles
