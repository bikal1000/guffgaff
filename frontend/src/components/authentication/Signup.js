import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

const Signup = () => {
    const [show, setShow] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();

    const handleClick = () => setShow(!show);

    const postDetails = (pics) => {

    }

    const submitHandler = () => {

    }

    return <VStack spacing='5x'>
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                type='text'
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
        </FormControl>
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
        <FormControl id='confirm-password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Enter your password again'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id='pic'>
            <FormLabel>Upload Your Picture</FormLabel>
            <Input
                type='file'
                p={1.5}
                accept='image/*'
                onChange={(e) => postDetails(e.target.files[0])}
            />
        </FormControl>
        <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
        >
            Sign Up
        </Button>
    </VStack>
}

export default Signup;