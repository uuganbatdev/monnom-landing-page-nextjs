import styled from '@emotion/styled'
import Head from 'next/head'
import SectionOne from '../sections/SectionOne'

function Landing() {
	return(
		<LandingStyled>
			<main>
				<SectionOne />
			</main>
		</LandingStyled>
	)
}

const LandingStyled = styled.div`
width: 80%;
margin: 0 auto;
`
export default Landing
