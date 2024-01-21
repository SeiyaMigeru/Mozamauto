import { LanguageProvider } from "./language/LanguageContext";
import NavigationProvider from "./navigation/NavigationProvider";

const App = () => (
  <LanguageProvider>
    <NavigationProvider />
  </LanguageProvider>
  
);

export default App;
