import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  BackHandler
} from 'react-native';
import {COLOURS, Items} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {height,width}=Dimensions.get('window')
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FloatingAction } from "react-native-floating-action";


const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [valueItem,setValueItem]=useState(null);
  const paperTheme = useTheme();
  const { colors } = useTheme();
  const theme = useTheme();
  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
      getItem();
    });

    return unsubscribe;
  }, [navigation]);

  async function getItem(){
    let dataItem=[];
    let item;
    await AsyncStorage.getItem('ADD').then(product=>{
      if(product!=null){
        const data=JSON.parse(product);
        item=data;
        dataItem.push(item);
        setProducts(dataItem)
        console.log(data,"add value")
      }
    })
  }
  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }
   setProducts(productList);
    setAccessory(accessoryList);
  };
  
  //back handler
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  
  const backAction = () => {
    if (navigation.isFocused()) {
       BackHandler.exitApp() 
    return true;
    }
  };
  
  //getting id values local storage and render the component based on the register
  useEffect(()=>{
    async function getData(){
      let dataItem;
      await AsyncStorage.getItem('REGISTER').then(value=>{
        if(value!=null){
          const data=JSON.parse(value);
          dataItem=data.id;
          setValueItem(dataItem);
          console.log(dataItem,"getting value")
        }
      })
    }
    getData();
  },[])

  //floating action button data 
  const actions = [
    {
      text: "Add",
      icon: require("../../assets/icon/add.png"),
      name: "bt_accessibility",
      position:2
    },
  ]

  //render product details for user
    const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={{
          width: '48%',
          marginVertical: 14,
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: theme.dark ? COLOURS.backgroundLight:COLOURS.backgroundLight,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          {data.isOff ? (
            <View
              style={{
                position: 'absolute',
                width: '20%',
                height: '24%',
                backgroundColor: COLOURS.green,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {data.productName}
        </Text>
        {data.category == 'accessory' ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.green,
                }}>
                Available
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.red,
                }}>
                Unavailable
              </Text>
            </View>
          )
        ) : null}
        <Text>&#8377; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

//render admin data
const RenderData=({data})=>{
  return(
    <View
     style={{
      width: '48%',
      marginVertical: 14,
    }}>
    <View
      style={{
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: theme.dark ? COLOURS.backgroundLight:COLOURS.backgroundLight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
      }}>
      {data.isOff ? (
        <View
          style={{
            position: 'absolute',
            width: '20%',
            height: '24%',
            backgroundColor: COLOURS.green,
            top: 0,
            left: 0,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: COLOURS.white,
              fontWeight: 'bold',
              letterSpacing: 1,
            }}>
            {data.offPercentage}%
          </Text>
        </View>
      ) : null}
      <Image
        source={data.productImage}
        style={{
          width: '80%',
          height: '80%',
          resizeMode: 'contain',
        }}
      />
    </View>
    <Text
      style={{
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '600',
        marginBottom: 2,
      }}>
      {data.productName}
    </Text>
    {data.category == 'accessory' ? (
      data.isAvailable ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="circle"
            style={{
              fontSize: 12,
              marginRight: 6,
              color: COLOURS.green,
            }}
          />
          <Text
            style={{
              fontSize: 12,
              color: COLOURS.green,
            }}>
            Available
          </Text>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="circle"
            style={{
              fontSize: 12,
              marginRight: 6,
              color: COLOURS.red,
            }}
          />
          <Text
            style={{
              fontSize: 12,
              color: COLOURS.red,
            }}>
            Unavailable
          </Text>
        </View>
      )
    ) : null}
    <Text>&#8377; {data.productPrice}</Text>
    <TouchableOpacity style={{
     
      width:50,
      height:25,
      backgroundColor:'blue',
      left:100,
      bottom:20,
      borderRadius:6,
      padding:1
      }}
      onPress={()=>navigation.navigate('Update',{item:data})}
      >
    <Text style={{textAlign:'center',color:'white'}}>Edit</Text>
   </TouchableOpacity>
  </View>
  )
}

if(valueItem==1){
   return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme.dark ? COLOURS.lightLime:COLOURS.white,
        top:height*0.03
      }}>
      <StatusBar backgroundColor={theme.dark ?COLOURS.lightLime:COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:100}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color:theme.dark ? COLOURS.blue:COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color:theme.dark ? COLOURS.blue:COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            Hi-Fi Shop &amp; Service
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Shoe shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Accessories
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          
          </View>
          <View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}else{
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme.dark ? COLOURS.lightLime:COLOURS.white,
        top:height*0.03
      }}>
      <StatusBar backgroundColor={theme.dark ?COLOURS.lightLime:COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:100,flexGrow:1}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            Hi-Fi Shop &amp; Service
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Shoe shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {products.map(data => {
              return <RenderData data={data} key={data.id} />;
            })}
          </View>
          <View style={{top:height*0.38,flex:1}}>
       <FloatingAction
       actions={actions}
        onPressItem={()=>navigation.navigate('Add')}
          />
       </View>
        </View>
      
       
    </ScrollView>
    </View>
  )
}
};

export default Home;
