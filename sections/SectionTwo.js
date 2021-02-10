import styled from '@emotion/styled'

function SectionTwo() {
	return(
		<SectionTwoStyled>
			<h2>
				Би  таньд чанартай контентуудыг хямд үнээр санал болгож байна.
			</h2>
			<div className='cards-container'>
				<div className='card'>
					<div className='img-container'>
						<img src='/music.png' alt='card' />
					</div>
					<h3>Music</h3>
					<p>
						Та манай аппаар интернетгүй үед дуу сонсох боломжтой
					</p>
				</div>
				<div className='card'>
					<div className='img-container'>
						<img src='/podcast.png' alt='card' />
					</div>
					<h3>Podcast</h3>
					<p>
						Та манай аппаар дуртай хүнийхээ подкастийг цаг алдалгүйгээр сонсох боломжтой
					</p>
				</div>
				<div className='card'>
					<div className='img-container'>
						<img src='/ebook.png' alt='card' />
					</div>
					<h3>eBooks</h3>
					<p>
						Та манай аппаар онлайн ном унших болон сонсох хэлбэрээр татан авч интернетгүй үед хаана ч уншиж сонсох боломжтой
					</p>
				</div>
			</div>
			<div className='reason'>
				<h2>
					Биднийг сонгох шалтгаан
				</h2>
				<p>
					Манай хэрэглүүр нь ихэнх подкасд аппуудыг бодвол та дуртай, хэрэгтэй контент, дуу хөгжим, ном гэх мэтчилэн зүйлсийг татан авч хаана ч интернет сүлжээгүйгээр сонсох боломжтой.
				</p>
			</div>
		</SectionTwoStyled>
	)
}

const SectionTwoStyled = styled.div`
margin-top: 5vh;
display: flex;
flex-direction: column;
h2 {
	font-weight: 500;
	font-size: 1.8rem;
	width: 45%;
	align-self: center;
	text-align: center;
	margin-bottom: 10vh;
}
.cards-container {
	width: 100%;
	display: flex;
	justify-content: center;
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 30%;
		.img-container {
			display:flex;
			height: 20vh;
			img {
				height: 100%;
			}
		}
		h3 {
			margin: 0;
			font-weight: 500;
			font-size: 2rem;
		}
		p {
			text-align: center;
			width: 70%;
		}
	}
}
.reason {
	margin-top: 5vh;
	align-self: center;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-content: center;
	align-items: center;
	h2 {
		margin: 0;
		text-align: center;
	}
	p {
		width: 50%;
		opacity: 0.7;
	}
}
@media only screen and (max-width: 800px) {
	margin-top: 15vh!important;
	h2 {
		width: 100%;
		font-size: 1.4rem;
	}
	.cards-container {
		flex-direction: column;
		.card {
			width: 100%;
			margin: 3vh 0;
			.img-container {
				width: 100%;
				display: grid;
				place-items: center;
			}
		}
	}
	.reason {
		width: 100%;
		p {
			width: 100%;
			text-align: left;
		}
		h2 {
			text-align: left;
		}
	}
}
`
export default SectionTwo
