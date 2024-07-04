import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Design Meeting',
    time: 'Tomorrow | 10:30pm',
    image: require('../assets/Images/ImageGrup.png'),
  },
  {
    id: '2',
    title: 'Design Meeting',
    time: 'Tomorrow | 10:30pm',
    image: require('../assets/Images/ImageGrup.png'),
  },
  {
    id: '3',
    title: 'Design Meeting',
    time: 'Tomorrow | 10:30pm',
    image: require('../assets/Images/ImageGrup.png'),
  },
  {
    id: '4',
    title: 'Design Meeting',
    time: 'Tomorrow | 10:30pm',
    image: require('../assets/Images/ImageGrup.png'),
  },
  {
    id: '5',
    title: 'Design Meeting',
    time: 'Tomorrow | 10:30pm',
    image: require('../assets/Images/ImageGrup.png'),
  },
];
interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const Home = () => {
  const navigation = useNavigation<any>();
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [uncompletedTasks, setUncompletedTasks] = useState<Task[]>([]);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setShowLoader(true);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://jsonplaceholder.typicode.com/todos/',
      headers: {},
    };

    axios
      .request(config)
      .then(response => {
        const tasks: Task[] = response.data;
        setCompletedTasks(tasks.filter((task: Task) => task.completed));
        setUncompletedTasks(tasks.filter((task: Task) => !task.completed));
        setShowLoader(false);
      })
      .catch(error => {
        setShowLoader(false);
        console.log(error);
      });
  }, []);

  type ItemProps = {title: string; image: any; time: string};

  const Item = ({title, time, image}: ItemProps) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{time}</Text>
      <TouchableOpacity>
        <Image source={image} style={styles.imageGrup} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navcontainer}>
          <Image
            source={require('../assets/Images/logoEmail.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>oussama chahidi</Text>
            <Text style={styles.text}>oussamachahidi@gmail.com</Text>
          </View>
        </View>

        <Image
          source={require('../assets/Images/Bell.png')}
          style={styles.bellImage}
        />
      </View>
      <View style={styles.cardContiner}>
        <Text style={styles.titleText}>Group tasks</Text>
        <FlatList
          horizontal
          data={DATA}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Item title={item.title} time={item.time} image={item.image} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <ScrollView
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: -10,
          height: '25%',
        }}>
        <Text style={styles.titleText}>Incomplete Tasks</Text>
        {showLoader ? (
          <ActivityIndicator
            size="large"
            color="white"
            style={{alignSelf: 'center', marginTop: '20%'}}
          />
        ) : (
          <>
            {completedTasks &&
              completedTasks.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CreateTask')}
                    style={styles.item}
                    key={item.id}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={styles.itemTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.taskIncompleted}>
                          Task Incomplete
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity>
                          <Image
                            source={require('../assets/Images/iconright.png')}
                            style={{width: 11, height: 16}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </>
        )}
      </ScrollView>
      <ScrollView
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: -10,
          height: '25%',
        }}>
        <Text style={styles.titleText}>Completed Tasks</Text>
        {showLoader ? (
          <ActivityIndicator
            size="large"
            color="white"
            style={{alignSelf: 'center', marginTop: '20%'}}
          />
        ) : (
          <>
            {uncompletedTasks &&
              uncompletedTasks.map(item => {
                return (
                  <View style={styles.item} key={item.id}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                        }}>
                        <Image
                          source={require('../assets/Images/checkCircle.png')}
                          style={{width: 20, height: 20}}
                        />
                        <View>
                          <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.itemTitle}>
                            {item.title}
                          </Text>
                          <Text style={styles.taskCompleted}>
                            Task Complete
                          </Text>
                        </View>
                      </View>
                      <View>
                        <TouchableOpacity>
                          <Image
                            source={require('../assets/Images/iconright.png')}
                            style={{width: 16, height: 16}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#104993',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 8,
    marginTop: '4%',
  },
  navcontainer: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    margin: 'auto',
    alignSelf: 'center',
    marginLeft: '3%',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.62,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.50)',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.26,
  },
  bellImage: {
    width: 30,
    height: 30,
    margin: 'auto',
    alignSelf: 'flex-end',
  },
  cardContiner: {
    margin: 10,
    flexDirection: 'column',
  },
  titleText: {
    margin: 10,
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.4,
  },
  card: {
    flexDirection: 'column',
    height: 100,
    padding: 15,
    backgroundColor: 'white',
    width: 200,
    borderRadius: 10,
    margin: 10,
  },
  cardTitle: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.26,
  },
  cardText: {
    color: 'rgba(0, 0, 0, 0.90)',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0.9,
    marginBottom: 10,
  },
  imageGrup: {
    height: 25,
    width: 78,
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  itemTitle: {
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.26,
  },
  itemTime: {
    color: 'rgba(0, 0, 0, 0.90)',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0.9,
  },
  taskCompleted: {
    color: 'green',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.9,
  },
  taskIncompleted: {
    color: 'rgba(238, 6, 6, 0.9)',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.9,
  },
});

export default Home;
