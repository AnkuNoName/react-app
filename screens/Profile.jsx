import { Header } from '../components/Header';
import { Foto } from '../components/Foto';
import { RegistrationForm } from '../components/RegistrationForm';
import { Button } from '../components/Button'
import { Text, View, FlatList } from 'react-native';
import React from 'react';




export const Profile = () => {
    return (
        <View>
            <Header />
            <Button />
            <RegistrationForm/>
        </View>
    );
};