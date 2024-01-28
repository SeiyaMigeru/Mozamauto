import { ModalProvider } from "./components/ModalProvider";
import { LanguageProvider } from "./language/LanguageContext";
import NavigationProvider from "./navigation/NavigationProvider";

const App = () => (
  <LanguageProvider>
    <ModalProvider>
      <NavigationProvider />
    </ModalProvider>
  </LanguageProvider>
  
);

export default App;
