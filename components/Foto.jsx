import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const FotoView = styled.View`
    width: 49%;
    height:170px;
    background: #F4CD8A;
    margin: 0 0px 15px 0px;
`
const FotoBlock = styled.View`
    margin: 0 15px 15px 15px;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const Foto = () => {
    return (
        <FotoBlock>
            <FotoView/>
            <FotoView/>
            <FotoView/>
            <FotoView/>
            <FotoView/>
            <FotoView/>
            <FotoView/>
        </FotoBlock>
    );
};