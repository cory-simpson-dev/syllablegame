import Div100vh from 'react-div-100vh'
import RulesModal from './components/modals/RulesModal'
import RulesToggle from './components/buttons/RulesToggle';
import GameTitle from './components/headings/GameTitle';
import RoundTitle from './components/headings/RoundTitle';
import NewGame from './components/buttons/NewGame';
// add logic/state for rules in local storage

// add logic/state for starting new game > starting timer in current round > assign points > switch teams > next round/end game

function App() {
  return (
    <Div100vh className="bg-black max-w-md mx-auto flex flex-col relative">
      {/* if not in localStorage as read, show: */}
      {/* <RulesModal /> */}
      {/* else, show: */}
      <RulesToggle />

      {/* if not in game currently, show: */}
      <GameTitle />
      <NewGame />
      {/* else, if in game, show: */}
        {/* if round is inactive, show: */}
        {/* <RoundTitle /> */}
        {/* <Teams /> */}
        {/* <StartTimer /> */}

        {/* else, round is active, show: */}
        {/* card and point assignment layout */}

        {/* if round is complete */}
    </Div100vh>
  );
}

export default App;
