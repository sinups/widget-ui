import styled from 'styled-components'

const BreadcrumbsStyles = styled.div`
  display: flex;
  font-size: 11px;
  line-height: 22px;
  align-items: center;
  letter-spacing: normal;
  margin-bottom: 3px;

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
`

export default BreadcrumbsStyles
