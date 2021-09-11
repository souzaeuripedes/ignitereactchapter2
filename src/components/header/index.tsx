import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransactioModal: () => void;
}

export function Header({onOpenNewTransactioModal}:HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo dt money" /> 
                <button type="button" onClick={onOpenNewTransactioModal}>
                    Nova transação
                </button>
                
                
            </Content> 
        </Container>
    );
}