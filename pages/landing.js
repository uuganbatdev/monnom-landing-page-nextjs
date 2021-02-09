import styled from '@emotion/styled'
import Head from 'next/head'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import SectionThree from '../sections/SectionThree'
import SectionFour from '../sections/SectionFour'
import SectionFive from '../sections/SectionFive'
import SectionSix from '../sections/SectionSix'

function Landing() {
	return(
		<LandingStyled>
			<main>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<SectionFive />
				<SectionSix />
			</main>
		</LandingStyled>
	)
}

const LandingStyled = styled.div`
width: 80%;
margin: 0 auto;
`
export default Landing
