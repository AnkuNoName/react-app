import styled from 'styled-components/native';
import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const Registration = styled.View`
  align-items: center;
`;

const RegistrationBlock = styled.View`
  margin-bottom: 10px;
`;

const RegistrationEmail = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
`;

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  return (
    <Registration>
      <RegistrationBlock>
        <RegistrationEmail>Електронна пошта</RegistrationEmail>
        <Input
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Enter email"
        />
      </RegistrationBlock>

      <RegistrationBlock>
        <RegistrationEmail>Пароль</RegistrationEmail>
        <Input
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Enter password"
          secureTextEntry
        />
      </RegistrationBlock>

      <RegistrationBlock>
        <RegistrationEmail>Пароль ще раз</RegistrationEmail>
        <Input
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          placeholder="Confirm password"
          secureTextEntry
        />
      </RegistrationBlock>

      <RegistrationBlock>
        <RegistrationEmail>Прізвище</RegistrationEmail>
        <Input
          value={lastName}
          onChangeText={handleLastNameChange}
          placeholder="Enter last name"
        />
      </RegistrationBlock>

      <RegistrationBlock>
        <RegistrationEmail>Ім'я</RegistrationEmail>
        <Input
          value={firstName}
          onChangeText={handleFirstNameChange}
          placeholder="Enter first name"
        />
      </RegistrationBlock>
    </Registration>
  );
};

