import styled from '@emotion/styled'

function Footer() {
	return(
		<FooterStyled>
			<div className='container'>
				<div className='left'>
					<img className='logo' src='./logo.png' />
					<div className='inner-left'>
						<h2>MON|NOM</h2>
						<div className='left-bottom'>
							<a href='#'><img src='/facebook.png' alt='social' /></a>
							<a href='#'><img src='/twitter.png' alt='social' /></a>
							<a href='#'><img src='/instagram.png' alt='social' /></a>
							<a href='#'><img src='/linked-in.png' alt='social' /></a>
						</div>
					</div>
				</div>
				<div className='middle'>
					<p>Холболтууд</p>
					<a href='#'>Нүүр</a>
					<a href='#'>Үнийн мэдээлэл</a>
					<a href='#'>Татан авах</a>
					<a href='#'>Тухай</a>
					<a href='#'>Үйлчилгээ</a>
				</div>
				<div className='right'>
					<div className='inner-right'>
						<p>Бидэнтэй холбогдох</p>
						<p>+976 99111155</p>
						<p>monnom@gmail.com</p>
						<p>Ulaanbaatar, Mongolia BZD</p>
					</div>
				</div>
			</div>
		</FooterStyled>
	)
}

const FooterStyled = styled.div`
margin-top: 7vh;
width: 100vw;
padding: 10vh 0;
background: #6b6baf;
color: white;
font-weight: 500;
h2 {
	margin: 0 ;
}
.container {
	width: 80%;
	margin: 0 auto;
	display: flex;
	img {
		object-fit: contain;
	}
	.left {
		width: 33%;
		display: flex;
		justify-content: center;
		.inner-left {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.left-bottom {
				margin-top: 15px;
			}
		}
		.logo {
			width: 20%;
			margin-right: 10px;
		}
		a {
			display: inline-grid;
			place-items: center;
			padding: 5px;
			border: 1px solid white;
			border-radius: 50%;
			margin: 0 5px;
			img {
				width: 15px;
				height: 15px;
			}
		}
	}
	.middle {
		width: 33%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		p {
			width: 60%;
		}
		a {
			width: 60%;
			margin: 5px 0;
		}
	}
	.right {
		width: 33%;
		display: grid;
		place-items: center right;
	}
}

`
export default Footer
