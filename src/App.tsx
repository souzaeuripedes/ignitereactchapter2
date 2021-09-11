import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./TransactionsContext";
Modal.setAppElement('#root');

export function App() {
  const[isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
  return (
    <TransactionProvider>
      <Header 
        onOpenNewTransactioModal={handleOpenNewTransactionModal} 
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
