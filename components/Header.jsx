import {Text} from 'react-native';
import styled from 'styled-components/native';

const HeaderView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px;
  background: #fff;
  border-bottom-width: 1px;
  border-bottom-calor: #fff;
  border-bottom-style: solid;
`

const HeaderText = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const HeaderImage = styled.Image`
  width: 50px;
  height: 35px;
  border-radius: 5px;
`

export const Header = () => {
    return (
    <HeaderView>
        <HeaderImage 
          source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Ukraine.png'}}
        />

        <HeaderText>
          <Text>Ankudevich IPZK-20-1</Text>
        </HeaderText>
    </HeaderView>
    );
};