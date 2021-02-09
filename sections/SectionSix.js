import styled from '@emotion/styled'

let generateColor = () => {
	return `rgb(${Math.floor(Math.random() * 256)},${ Math.floor(Math.random() * 256) },${ Math.floor(Math.random() * 256) })`
}

function SectionSix() {
	
	return(
		<SectionSixStyled>
			<h2>Сэтгэгдэлүүд</h2>
			<div className='cards-container'>
				<div className='book-card' style={{ backgroundImage: `linear-gradient(to right, ${generateColor()}, ${generateColor()}` }}>
  					<img src='/book-1.png' />
					<p>"Их удаан хүлээсний эцэст уншихад хүлээлтээс илүү байж чадлаа"</p>
				</div>
				<div className='book-card' style={{ backgroundImage: `linear-gradient(to right, ${generateColor()}, ${generateColor()})` }} >
					<img src='/book-2.png' />
					<p>"Баярлалаа их гоё зохиолтой ном байна. Маш их таалагдлаа"</p>
				</div>
				<div className='book-card' style={{ backgroundImage: `linear-gradient(to right, ${generateColor()}, ${generateColor()})` }}>
					<img src='/book-3.png' />
					<p>"Их удаан хүлээсний эцэст уншихад хүлээлтээс илүү байж чадлаа"</p>
				</div>
			</div>
		</SectionSixStyled>
	)
}

const SectionSixStyled = styled.div`
display: flex;
flex-direction: column;
h2 {
	font-size: 1.7rem;
	font-weight: 500;
}
.cards-container {
	width: 100%;
	display: flex;
	justify-content: space-between;
	.book-card {
		flex-shrink: 0;
		padding: 1vw ;
		border-radius: 8px;
		display: flex;
		align-items: center;
		width: 30%;
		background: green;
		img {
			width: 33%;
			object-fit: contain;
		}
		p {
			color: white;
			font-size: 1.2rem;
			font-weight: 500;
			padding: 0 3%;
		}
	}
}
`
export default SectionSix
