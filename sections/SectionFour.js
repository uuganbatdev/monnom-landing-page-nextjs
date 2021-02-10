import styled from '@emotion/styled'

function SectionFour() {
	return(
		<SectionFourStyled>
			<h2>
				Нийт Хэрэглүүрт Байгаа Контент
			</h2>
			<p className='parag'>
				Манай апп-д өдөр болгон шинэ ном, дуу хөгжим болон подкаст сувагууд шинээр орж ирдэг байгаа бөгөөд та энэ бүхнийг зах зээлийн үнээс хямдхан түрээслэн ашиглах боломжтой.
			</p>
 
			<div className='cards-container'>
				<div className='card'>
					<div className='img-container'>
						<img src='/music-icon.png' alt='card' />
					</div>
					<div className='parag-container'>
						<p>100+</p>
						<h3>Дуу хөгжимMusic</h3>
					</div>
				</div>
				<div className='card'>
					<div className='img-container'>
						<img src='/podcast-icon.png' alt='card' />
					</div>
					<div className='parag-container'>
						<p>100+</p>
						<h3>Подкаст</h3>
					</div>
				</div>
				<div className='card'>
					<div className='img-container'>
						<img src='/book-icon.png' alt='card' />
					</div>
					<div className='parag-container'>
						<p>90+</p>
						<h3>Онлайн, Сонсдог ном</h3>
					</div>
				</div>
			</div>
		</SectionFourStyled>
	)
}

const SectionFourStyled = styled.div`
margin-top: 5vh;
display: flex;
flex-direction: column;
align-items: center;
h2 {
	font-weight: 500;
	font-size: 1.8rem;
	width: 45%;
	align-self: center;
	text-align: center;
}
.parag {
	opacity: 0.7;
	width: 60%;
	text-align: center;
	margin: 5vh 0;
}
.cards-container {
	width: 100%;
	display: flex;
	justify-content: center;
	.card {
		display: flex;
		width: 30%;
		justify-content: center;
		.parag-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justfity-content: center;
			margin-left: 1vw;
			p {
				color: #1453FF;
				font-weight: 500;
				font-size: 1.5rem;
				margin: 0;
			}
			h3 {
				color: #1453FF;
				margin: 0;
				font-size: 0.8rem;
				font-weight: 400;
			}
		}
		.img-container {
			display:flex;
			width: 3vw;
			img {
				width: 100%;
				object-fit: contain;
			}
		}
	}
}
@media only screen and (max-width: 800px) {
	h2, .parag {
		width: 100%;
	}
	.parag {
		text-align: left;
	}
	.cards-container {
		flex-direction: row;
		flex-wrap: wrap;
		.card {
			width: 50%;
			margin: 3vh 0;
			.img-container {
				width: 30%;
			}
		}
	}
}
`
export default SectionFour
