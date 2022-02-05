import './App.css';
import HomePage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Route exact path='/' component={HomePage} />
            <Route path='/chat' component={ChatPage} />
        </div>
    );
}

export default App;