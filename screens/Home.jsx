import { Text, View, FlatList } from 'react-native';
import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { Button } from '../components/Button'
import axios from 'axios';
import React from 'react';

export const Home = () => {
  const [isLoading, setisLoading] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const fetchPosts = () => {
    axios.get('https://641a21caf398d7d95d51562d.mockapi.io/items')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        alert('Помилка');
      }).finally(() => {
        setisLoading(false);
      });
  }

  React.useEffect(fetchPosts, []);

  return (
    <View>
      <Header />
      <Button /> 
      <FlatList
        data={items} renderItem={({item}) => <Post sup={item.sup} title={item.title} imageUrl={item.imageUrl}/>}
      />
    </View>
  );
}
