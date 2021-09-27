import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal"
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false);

  function handleOpenNewTranslationModal() {
      setIsNewTranslationModalOpen(true);
  }

  function handleCloseNewTranslationModal() {
      setIsNewTranslationModalOpen(false);
  }

  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTranslationModal}/>

        <Dashboard/>

        <NewTransactionModal 
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}
        />

        <GlobalStyle/>
    </>
  );
}
