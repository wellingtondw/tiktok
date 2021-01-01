import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';

import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const Post = () => {
  const [paused, setPaused] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setPaused(!paused)}>
        <Video
          source={{
            uri:
              'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
          }}
          resizeMode="cover"
          onError={(e) => console.log(e)}
          paused={paused}
          repeat
          style={styles.video}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <View style={styles.profileImage}>
            <Image source={''} />
          </View>

          <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <AntDesign name={'heart'} size={30} color={'white'} />
            <Text style={styles.statsLabel}>123</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={30} color="white" />
            <Text style={styles.statsLabel}>500</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name={'share-a'} size={25} color="white" />
            <Text style={styles.statsLabel}>211</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.author}>@daviddobric</Text>
            <Text style={styles.description}>hahaha oh boy @borat</Text>

            <View style={styles.songRow}>
              <Entypo name="beamed-note" size={24} color="white" />
              <Text style={styles.songName}>Nf - the search</Text>
            </View>
          </View>

          <Image style={styles.songImage} source={''} />
        </View>
      </View>
    </View>
  );
};

export default Post;
