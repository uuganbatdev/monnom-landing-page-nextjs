import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link'

function Home() {
	return(
		<HomeStyled>
			<div className='bubble1'></div>
			<div className='bubble2'></div>
			<div className='bubble3'></div>
			<div className='bubble4'></div>

			<main className='main-container'>
				<div className='left-side'>
					<img className='logo' src='/logo.png' alt='logo'/>
					<h1>MON<span>|</span>NOM</h1>
					<h2>Podcast</h2>
					<h2>Music</h2>
					<h2>eBooks</h2>
					<div className='btns-container'>
						<p>Тун удахгүй</p>
						<div className='inner-btns'>
							<Link href='/landing'>
								<a>
									<img src='/app-store.png' />
									AppsStore
								</a>
							</Link>
							<Link href='/landing'>
								<a>
									<img src='/playstore.png' />
									Playstore
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className='right-side'>
					<div className='rs-img-container'>
						<img className='rs-img rs1' src='/home-iphone.png' />
						<img className='rs-img rs2' src='/logo.png' />
					</div>
					<img className='rs-img rs3' src='/home-1.png' />
					<img className='rs-img rs4' src='/home-2.png' />
					<img className='rs-img rs5' src='/home-3.png' />
				</div>
			</main>
		</HomeStyled>
	)
}

const HomeStyled = styled.div`
	color: white;
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow-x: hidden;
	overflow-y: hidden;
	background: transparent linear-gradient(299deg, #100808 0%, #83BAC1 28%, #C99DDF 60%, #A280EE 82%, #B03ACE 100%) 0% 0% no-repeat padding-box;

	.main-container {
		position: relative;
		z-index: 3;
		width: 80%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		font-family: 'Josefin Sans';
	}
	.left-side {
		z-index: 10;
		flex: 0.6;
		display: flex;
		align-self: center;
		flex-direction: column;
		h1 {
			font-size: 2.5rem;
			span {
				font-weight: 300;
				font-size: 5rem;
			}
		}
		h2 {
			margin: 0.3vw 0;
			font-size: 2rem;
			font-weight: 700;
		}
		.logo {
			width: 10vw;
			min-width: 150px;
			object-fit: contain;
		}
		.btns-container {
			margin-top: 3vw;
			background: rgba(255,255,255,0.2);
			border-radius: 2vw;
			display: flex;
			flex-direction: column;
			width: 20vw;
			min-width: 300px;
			p {
				text-align: center;
				margin: 0.5vw 0;
				font-size: 1.2rem;
				font-weight: 400;
			}
			.inner-btns {
				display: flex;
				justify-content: space-between;
			}
			a {
				font-weight: 300;
				background: white;
				border-radius: 2vw;
				padding: 10px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				color: black;
				img {
					margin-right: 0.5vw;
					width: 30px;
					object-fit: contain;
				}
			}
		}
	}
	.right-side {
		flex: 1;
	}
	.rs-img {
		position: absolute;
		object-fit: contain;
	}
	.rs-img-container {
		position: absolute;
		left: 55%;
		top: 10%;
	}
	.rs1 {
		z-index: 4;
		height: 100vh;
	}
	.rs2 {
		z-index: 5;
		height: 20vh;
		top: 28vh;
		left: 22vh;
	}
	.rs3 {
		right: 0;
		left: 83%;
		top: 63%;
		height: 38vh;
	}
	.rs4 {
		height: 30vh;
		left: 80%;
		top: 28%;
	}
	.rs5 {
		height: 30vh;
		left: 35%;
		top: 45%;
	}
	.bubble1 {
		border-radius: 50%;
		position: absolute;
		width: 130vh;
		height: 130vh;
		left: 50%;
		top: -10%;
		background: linear-gradient(155deg, #67A4E4,#756BD4, #642B99 );
	}
	.bubble2 {
		border-radius: 50%;
		position: absolute;
		width: 30vh;
		height: 30vh;
		left: 35%;
		top: -20%;
		background: #CB6796FC;
	}
	.bubble3 {
		border-radius: 50%;
		position: absolute;
		width: 25vh;
		height: 25vh;
		left: -5%;
		bottom: -10%;
		background: #7F7ACF;
	}
	.bubble4 {
		border-radius: 50%;
		position: absolute;
		width: 15vh;
		height: 15vh;
		left: 40%;
		bottom: -10%;
		background: #D39079;
	}
	@media only screen and (max-width: 800px) {
	  .right-side {
		display: none;
	  }
	}
`
export default Home
