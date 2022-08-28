import { useEffect, useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_KEY,
        ethers.getDefaultProvider(
            process.env.PROVIDER_URL
        )
    )
)

const Dashboard = ({address}) => {
    const [sanityTokens, setSanityTokens] = useState([])
    const [thirdWebTokens, setThirdWebTokens] = useState([])

    return (
        <Wrapper>
            <Sidebar/>
            <MainContainer>
                <Header walletAddress={address}/>
                <Main />
            </MainContainer>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #0a0b0d;
    color: white;
`

const MainContainer = styled.div`
    flex: 1;
`