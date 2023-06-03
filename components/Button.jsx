import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const ButtonView = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 15px;
`

const ButtonHome = styled.Text`
    background: #000;
    color: #fff;
    padding: 10px;
`

const ButtonFoto = styled.Text`
    background: #000;
    color: #fff;
    padding: 10px;
`

const ButtonProf = styled.Text`
    background: #000;
    color: #fff;
    padding: 10px;
`

export const Button = () => {
    return (
        <ButtonView>
            <ButtonHome>Головна</ButtonHome>
            <ButtonFoto>Фотогалерея</ButtonFoto>
            <ButtonProf>Профіль</ButtonProf>
        </ButtonView>
    );
};