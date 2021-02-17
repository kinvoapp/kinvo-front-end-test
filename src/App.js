
import MainPage from './elements/MainPage'
import IncomesProvider from './provider/IncomesProvider';


function App() {
  return (
    <IncomesProvider>
      <div>
      <MainPage />
    </div>
    </IncomesProvider>
       
    
   
  );
}

export default App;
