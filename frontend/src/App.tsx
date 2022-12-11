import Div100vh from 'react-div-100vh'
import RulesModal from './components/RulesModal'

// add logic/state for rules in local storage (add opaque background)

function App() {
  return (
    <Div100vh className="bg-black max-w-md mx-auto flex flex-col">
      <RulesModal />
    </Div100vh>
  );
}

export default App;
