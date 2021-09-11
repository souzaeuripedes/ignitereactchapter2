import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3,1fr);
	gap: 2rem;
	margin-top: -7rem;
	
	div {
		background: var(--shape);
		padding: 1.5rem 2rem;
		border-radius: 0.25rem;
		color: var(--text-title);
		
		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		
			/* 
				Tag strong é com display inline por padrão.display
				Usamos display block para conseguir colocar o margin-top 
			*/
		strong {
			display: block;
			margin-top: 1rem;
			font-size: 2rem;
			line-height: 3rem;
			font-weight: 500;
		}
		
		/* 
			Adicionando uma classe para div
		*/
		&.hightlight-background {
			background: #33cc95;
			color: #FFF;
		}
	}
`;
