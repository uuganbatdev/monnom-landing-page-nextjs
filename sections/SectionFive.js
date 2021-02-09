import styled from '@emotion/styled'

function SectionFive() {
	return (
		<SectionFiveStyled>
			<h2>MONNOM</h2>
			<p className='parag'>
				Lorem ipsum aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</p>
			<div className='cards-container1'>
				<div className='card'>
					<img className='phone' src='/iphone.png' alt='card' />
					<img  className='inner-img1'src='/iconed-4.png' alt='card' />
					<div className='pagination1' style={{background: '#0d13d7'}}></div>
					<div className='pagination2'></div>
					<div className='pagination3'></div>
					<div className='pagination4'></div>
				</div>
				<div className='card'>
					<img className='phone'  src='/iphone.png' alt='card' />
					<img  className='inner-img1'src='/iconed-5.png' alt='card' />
					<div className='pagination1'></div>
					<div className='pagination2'style={{background: '#0d13d7'}}></div>
					<div className='pagination3'></div>
					<div className='pagination4'></div>
				</div>
				<div className='card'>
					<img className='phone'  src='/iphone.png' alt='card' />
					<img  className='inner-img1'src='/iconed-6.png' alt='card' />
					<div className='pagination1'></div>
					<div className='pagination2'></div>
					<div className='pagination3'style={{background: '#0d13d7'}}></div>
					<div className='pagination4'></div>
				</div>
				<div className='card'>
					<img className='phone'  src='/iphone.png' alt='card' />
					<img className='inner-img1' src='/iconed-7.png' alt='card' />
					<div className='pagination1'></div>
					<div className='pagination2'></div>
					<div className='pagination3'></div>
					<div className='pagination4'style={{background: '#0d13d7'}}></div>
				</div>
			</div>
			<div className='bg'>
				<div className='round1'></div>
				<div className='round2'></div>
			</div>
		</SectionFiveStyled>
	)
}

const SectionFiveStyled = styled.div`
margin-top: 5vh;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
h2 {
	font-family: 'Josefin Sans';
	font-weight: 700;
	font-size: 1.8rem;
	width: 45%;
	align-self: center;
	text-align: center;
	margin-bottom: 0;
}
.parag {
	opacity: 0.7;
	width: 60%;
	text-align: center;
	margin: 4vh 0;
}
.cards-container1 {
	margin-top: 2vh;
	width: 100%;
	display: flex;
}
.card {
	width: 25%;
	position: relative;
}
.phone {
	width: 100%;
	object-fit: contain;
}
.inner-img1 {
	width: 70%;
	object-fit: contain;
	position: absolute;
	left: 50%;
	top: 30%;
	transform: translateX(-50%);
}
.pagination1,
.pagination2,
.pagination3,
.pagination4 {
	position: absolute;
	left: 0;
	top: 65%;
	width: 5%;
	height: 1%;
	border-radius: 2vw;
	border: 1px solid #0d13d7;
}
.pagination1 {
	left: 35%;
}
.pagination2 {
	left: 45%;
}
.pagination3 {
	left: 55%;
}
.pagination4 {
	left: 65%;
}
.bg {
	position: absolute;
	height: 30vw;
	width: 25vw;
	left: 80%;
	top: 30%;
	background: #0d13d7;
	z-index: -1;
	clip-path: polygon(0 65%, 0 30%, 100% 0, 100% 100%);
	.round1 {
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		position: absolute;
		width: 25vw;
		height: 25vw;
		border-radius: 50%;
		background: #262bdb;
	}
	.round2 {
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		position: absolute;
		width: 15vw;
		height: 15vw;
		border-radius: 50%;
		background: #3c41df;
	}
}
`
export default SectionFive
