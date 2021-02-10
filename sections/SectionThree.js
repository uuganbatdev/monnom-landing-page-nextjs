import styled from '@emotion/styled'

function SectionThree() {
	return(
		<SectionThreeStyled>
			<div className='bg'>
				<div className='round1'></div>
				<div className='round2'></div>
			</div>
			<img src='/iphone-balloon.png' />
			<div className='right-side'>
				<h2>Аппны ерөнхий танилцуулга</h2>
				<p>
				Хэрэглэхэд хялбар бөгөөд бага төлбөрөөр та их хэмжээний контент, подкаст, дуу хөгжим татан аван, түрээслэсэн тохиолдолд интернетгүй үед ч сонсож унших боломжтой юм.
				</p>
				<a href='#'>
					Илүү ихийг
				</a>
			</div>
		</SectionThreeStyled>
	)
}

const SectionThreeStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
img {
	width: 35%;
	object-fit: contain;
}
.right-side {
	width: 55%;
	h2 {
		margin-bottom: 7vh;
		font-weight: 500;
	}
	p {
		opacity: 0.7;
		width: 90%;
	}
	a {
		font-weight: 500;
		color: grey;
		padding: 12px 15px;
		border-radius: 10px;
		border: 1px solid #1453FF;
		display: inline-block;
		margin-top: 5vh;
	}
}
.bg {
	position: absolute;
	height: 30vw;
	width: 30vw;
	left: 0;
	background: #0d13d7;
	z-index: -1;
	clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
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
@media only screen and (max-width: 800px) {
	.bg, img {
		display: none;
	}
	.right-side {
		width: 100%;
	}
}
`
export default SectionThree
