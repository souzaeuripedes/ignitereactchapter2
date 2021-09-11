import { Summary } from '../summary';
import { TransactionTable } from '../transactionTable';
import { Container } from './styles';

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>
    );
}