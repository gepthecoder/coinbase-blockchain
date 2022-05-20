import styled from 'styled-components'
import Portfolio from './Portfolio'
import Promos from './Promos'

const Main = ({thirdWebTokens, sanityTokens, walletAddress}) => {
    console.log(thirdWebTokens, '🎈')
    console.log(sanityTokens, '🎈')
    console.log(walletAddress, '🎈')

    return (
        <Wrapper>
        <Portfolio
            thirdWebTokens={thirdWebTokens}
            sanityTokens={sanityTokens} 
            walletAddress={walletAddress}
        />
        <Promos />
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  :: -webkit-scrollbar {
      display: none
  }
  & div {
    border-radius: 0.4rem;
  }
`