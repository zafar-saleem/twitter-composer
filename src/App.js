import { useEffect } from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import{ EventBus } from './eventBus';
import { Appbar } from './components/Appbar';
import { Messages } from './pages/Messages';
import './App.css';

window.evts = EventBus()();

function App() {
	useEffect(() => {
		
	}, []);

  return (
    <BrowserRouter>
    	<Appbar />
    	<Routes>
    		<Route path="/" exact element={<Messages />} />
    	</Routes>
    </BrowserRouter>
  );
}

export default App;
