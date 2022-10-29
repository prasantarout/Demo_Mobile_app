//import liraries
import React, {useState, useEffect, useMemo} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    BackHandler,
    Alert
  } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, SIZES,FONTS} from '../constants';
import SkeletonLoader from "react-native-skeleton-loader";
const {height,width}=Dimensions.get('window')
import actions from '../redux/actions'
import { FloatingAction } from "react-native-floating-action";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({navigation,route}) => {
     const { colors } = useTheme();
     const theme = useTheme();
     const [data, setData] = useState([])
     const [loading, setLoading] = useState(false);
     const [offset, setOffset] = useState(1);
     const [isListEnd, setIsListEnd] = useState(false);
 
     const action = [
      {
        text: "ADD",
        name: "bt_accessibility",
        icon: require("../assets/icon/add.png"),
        position: 1
      },
    ]
 
  useEffect(() => {
    getDataItem();
   
  }, [])
 
  
     

  const getDataItem=async()=>{
    try {
      let dataValue;
      await AsyncStorage.getItem('ITEM').then(response=>{
        if(response!=null){
          const data=JSON.parse(response);
          dataValue=data;
        }
      })
      if (!loading && !isListEnd) {
        setLoading(true);
        let res = await actions.getData();
        setData(res.data);
        if (res.data.length > 0) {
         setOffset(offset + 1);
          setData([...data,...res.data,dataValue]);
          setLoading(false);
        }else {
          setIsListEnd(true);
          setLoading(false);
        }
     }
    } catch (error) {
        console.log("error raised", error)
    }
  }

  const deletePost = async (id) => {
      try {
          const res = await actions.deletePost(id)
          let arry = [...data]
          let modifyArray = arry.filter((val,i)=>{
              if(val.id !== id){
                  return val
              }
          })
          setData(modifyArray)
      } catch (error) {
          console.log("error raised", error)
      }
  }
 
useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  function handleBackButtonClick(){
    // console.log("back Pressed wow")
    Alert.alert(
        'Exit',
        'Do you really want to exit the app?', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        },], {
        cancelable: false
    }
    )
    return true;
}
 
  useEffect(() => {
   BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => backHandler.remove();
  }, []);

  const renderItem = ({ item, index }) => {
      return (
          <View style={[styles.boxView,{borderColor:colors.text}]} key={index}>
             <SkeletonLoader type="rectangle" size={110} loading={loading} height={100} color='ffa433' highlightColor='#BFC9CA'>
             <Text style={[styles.heading,{color:colors.text}]}>{item.id}. {item.title}</Text>
              <Text style={{color:colors.text}}>{item.body}</Text>
             <View style={styles.btn}>
              <View style={styles.btnStyle}>
                <TouchableOpacity onPress={()=>deletePost(item.id)} >
                  <Text style={{color:'white'}}>DELETE</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.btnStyle}>
              <TouchableOpacity onPress={()=>navigation.navigate('Update',{data:item})}>
                  <Text style={{color: 'white',textAlign:'center',}}>EDIT</Text>
              </TouchableOpacity>
              </View>
              </View>
              </SkeletonLoader>
            </View>
      )
  }
  const onEnd = () => {
    Alert.alert('You Have Reached To List End...');
  }
      const renderFooter = () => {
        return (
          // Footer View with Loader
          <View style={styles.footer}>
            {loading ? (
              <ActivityIndicator
                color={theme.dark ? "white" : "black"}
                style={{margin: 15}} />
            ) : null}
          </View>
        );
      };
      return (
        <View style={styles.container}>
            <StatusBar  barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            <View style={styles.navBar}>
              <Text style={{
                textAlign:'center',
                left:width*0.4,
                color:'white',
                fontSize:24,
                top:10
              }}>Home</Text>
            </View>
        <SafeAreaView>
            <FlatList
                data={data}
                ListFooterComponent={renderFooter}
                renderItem={renderItem}
                onEndReached={onEnd}
                onEndReachedThreshold={0.5}
                keyExtractor={(item, id) => id.toString()}
                style={{ paddingBottom:200 }}
                ItemSeparatorComponent={() => <View style={{ marginBottom:20 }} />}
            />
        </SafeAreaView>
        <FloatingAction
         actions={action}
         onPressItem={() =>
          navigation.navigate("Add")}
       />
    </View>
      );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
},
      footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
 boxView: {
      borderWidth: 1,
      padding: 16,
      borderRadius: 8,
      top:10,
      elevation:1,
      
     
  },
  navBar: {
    height: 80,
    width:width*1,
    right:16,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     borderBottomWidth: 1,
    backgroundColor:COLORS.colorGray,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 0.8,
     elevation: 4,
  },
  heading: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      textTransform:'capitalize',
    
  },
  btnStyle: {
      marginTop: 10,
      backgroundColor:'blue',
      margin:10,
   
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4
  },
  btn:{
alignSelf:'flex-end',
flexDirection: 'row',
justifyContent: 'center',
  }
    
});

//make this component available to the app
export default Home;
