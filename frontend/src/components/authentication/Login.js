import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

const Login = () => {
    const [show, setShow] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = () => setShow(!show);


    const submitHandler = () => {

    }

    return <VStack spacing='5x'>
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                type='email'
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
        >
            Login
        </Button>
        <Button
            variant='solid'
            colorScheme="red"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={() => {
                setEmail('guest@example.com');
                setPassword('123456')
            }}
        >
            Get Guest User Credentials
        </Button>
    </VStack>
}

export default Login;