import styled from 'styled-components'

const MessageStyles = styled.div`
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

    .bread__crumbs {
      display: flex;
      font-size: 11px;
      line-height: 22px;
      align-items: center;
      letter-spacing: normal;

      .support__info,
      .dot {
        opacity: 0.5;
      }

      .dot {
        background: #2f2e39;
        mix-blend-mode: normal;
        border-radius: 50%;
        width: 3px;
        height: 3px;
        margin: 0 7px;
      }
    }
  }
`

export default MessageStyles
