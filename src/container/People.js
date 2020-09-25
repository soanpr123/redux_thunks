import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPeople} from '../redux/action/peopleAction';
import List from '../component/PeopleList';
export default function People(props) {
  const states = useSelector((state) => state);

  const {isFetching, data} = states;

  const dispatch = useDispatch();

  console.log(data, isFetching);
  useEffect(() => {
    dispatch(fetchPeople());
  }, []);
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#093339',
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: '#4e8087',
    padding: 10,
  },
  faceImageStyle: {
    width: 65,
    height: 65,
  },
  cardTextStyle: {
    color: 'white',
    textAlign: 'left',
  },
});
