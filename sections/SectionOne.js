import styled from '@emotion/styled'

function SectionOne() {
	return(
		<SectionOneStyled>
				<div className='first-section'>
					<div className='section1-bg'>
						<img className='bg-img' src='/landing-bg.png' alt='background'/>
						<div className='bg-color'></div>
					</div>
					<div className='s1-left-side'>
						<div className='inner-s1-left-top'>
							<img className='logo' src='/logo.png' alt='logo'/>
							<h1>MON<span>|</span>NOM</h1>
						</div>
						<div className='s1-headings'>
							<h2>Подкаст, Ном, Дуу Хөгжим</h2>
						</div>
						<div className='inner-s1-left-bot'>
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing , sed diam nonumy eirmod tempoet justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
							</p>
							<a href='#'>Coming Soon<img src='/direct-download.png' alt='download'/></a>
						</div>
					</div>
					<div className='s1-right-side'>
						<nav>
							<a href='#'>
								Захиалах
							</a>
							<a href='#'>
								 Шинэ ном
							</a>
							<a href='#'>
								 Мэдээлэл
							</a>
						</nav>
						<div className='imgs-container'>
							<img className='sm-img1' src='/iphone-icon-1.png' alt='iphone' />
							<img className='big-img' src='/iphone-icon-2.png' alt='iphone' />
							<img className='sm-img1' src='/iphone-icon-3.png' alt='iphone' />
						</div>
					</div>
				</div>
		</SectionOneStyled>
	)
}

const SectionOneStyled = styled.div`
color: white;
.first-section {
	display: flex;
	height: 80vh;
	padding-top: 5vh;
	.section1-bg {
		width: 100vw;
		height: 80vh;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.bg-img {
		position: absolute;
		left: 0;
		width: 100%;
		z-index: -1;
		object-fit: cover;
		filter: brightness(85%);
	}
	.s1-left-side {
		width: 40%;
		display: flex;
		flex-direction: column;
		.inner-s1-left-top {
			display: flex;
			img { 
				width: 30%;
				min-width: 100px;
				object-fit: contain;
			}
			h1 {
				font-family: 'Josefin Sans';
				margin-left: 2vw;
				font-size: 2.5rem;
				span {
					font-weight: 300;
					font-size: 5rem;
				}
			}
		}
		.s1-headings {
			margin-top: 1vw;
			display: flex;
			justify-content: space-between;
			h2 {
				font-size: 2.2rem;
				font-weight: 500;
			}
		}
		.inner-s1-left-bot {
			margin-top: 2vw;	
			p {
				font-weight: 400;
				font-size: 1.2rem;
			}
			a {
				display: inline-flex;
				color: grey;
				background: white;
				align-items: center;
				padding: 20px 15px;
				border-radius: 10px;
				img {
					margin-left: 8px;
					height: 15px;
					object-fit: contain;
					filter: invert(59%) sepia(4%) saturate(31%) hue-rotate(325deg) brightness(89%) contrast(91%);
				}
			}
		}
	}
	.s1-right-side {
		width: 60%;
		display: flex;
		flex-direction: column;
		nav {
			width: 70%;
			align-self: flex-end;
			display: flex;
			justify-content: space-between;
			font-size: 1.2rem;
			font-weight: 500;
		}
		.imgs-container {
			width: 90%;
			display: flex;
			img {
				width: 40%;
				object-fit: contain;
			}
			.big-img {
				width: 50%;
			}
		}
	}
}
`
export default SectionOne
