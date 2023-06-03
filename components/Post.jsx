import styled from 'styled-components/native';

const PostView = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px 15px 0 15px;
   
`
const PostContent = styled.View`
    padding-left: 15px;
`
const PostImage = styled.Image`
    width: 50px;
    height: 35px;
    border-radius: 5px;
`

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 600;
`

const PostDate = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #808080;
`

const PostSupTitle = styled.Text`
  font-size: 17px;
  font-weight: 400;
`

export const Post = ({title, imageUrl, sup}) => {
    return (
    <PostView>
        <PostImage 
          source = {{uri: imageUrl}}
        />

        <PostContent>
            <PostTitle>{title}</PostTitle>
            <PostDate>03.06.2023</PostDate>
            <PostSupTitle>{sup}</PostSupTitle>
        </PostContent>
    </PostView>
    );
};