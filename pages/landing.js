import styled from '@emotion/styled'
import Head from 'next/head'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import SectionThree from '../sections/SectionThree'
import SectionFour from '../sections/SectionFour'

function Landing() {
	return(
		<LandingStyled>
			<main>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
			</main>
		</LandingStyled>
	)
}

const LandingStyled = styled.div`
width: 80%;
margin: 0 auto;
`
export default Landing
