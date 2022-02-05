import './App.css';
import { Button } from '@chakra-ui/react'
import HomePage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Button colorScheme='blue'>Button</Button>
            <Route exact path='/' component={HomePage} />
            <Route path='/chat' component={ChatPage} />
        </div>
    );
}

export default App;