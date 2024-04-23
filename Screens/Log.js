import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


// ==== image ===== 
import image1 from "../assets/login1.png"
import image2 from "../assets/login2.png"
import image3 from "../assets/login3.png"


const Log = () => {

  const navigation = useNavigation();

  const flatlistRef = useRef()
    // get dimension 
  const screenWidth = Dimensions.get("window").width
    // state to store index
  const[activeIndex, setActiveIndex] = useState(0)

  // auto scroll 
  useEffect(() => {
        
    let interval = setInterval(() => {
        //if activeindex === last index --> jump back to first index
        if(activeIndex === carouselData.length -1){
            flatlistRef.current.scrollToIndex({
                index: 0,
                animation: true
            })
        }
        // else activeindex +1
        else{
            flatlistRef.current.scrollToIndex({
                index: activeIndex + 1,
                animation: true
            })
        }
    }, 3000)

    return () => clearInterval(interval);
})

const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index
})

// data for carousel 
const carouselData = [
    {
        id: "01",
        image: image1,
        header: "Free and Fast Delivery",
        text: "Free and fast delivery for all meals above ₹100."
    },
    {
        id: "02",
        image: image2,
        header: "Best Prices & Deals",
        text: "Find your favorite Meals at the best prices with exclusive deals only on aliments app."
    },
    {
        id: "03",
        image: image3,
        header: "Track your Orders",
        text: "Track your orders in realtime from the app"
    }
]

// Handle Scroll 
const handleScroll = (event) => {
    // get the scroll position 

    const scrollPosition = event.nativeEvent.contentOffset.x
    // get the index of the active item
    let index = scrollPosition / screenWidth;
    index = Math.ceil(index)

    // update the index 
    setActiveIndex(index)
}

// display data 
const renderItem = ({item, index}) => {
    return(
        <View style={{width: screenWidth, alignItems: 'center'}}>
            <Image source={item.image} style={{resizeMode: 'contain',  height: 230, width: 230}} />
            <Text style={{color: "#FF800B", marginTop: 38, fontFamily: "Inter-Bold", fontSize: 22}}>{item.header}</Text>
            <Text style={{color: "#595959", marginTop: 15, textAlign: 'center', paddingHorizontal: 10, lineHeight: 15, fontSize: 14, fontFamily: "Inter-Regular"}}>{item.text}</Text>
        </View>
    )
}

//render Dot Indicators
const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {

        // if the active index === index 
        if(activeIndex === index){
            return(
                <View style={{backgroundColor: "#FF800B", height: 10, width: 10, borderRadius: 5, marginHorizontal: 6}}>
                </View>
            )
        }
        else{
            return(
                <View key={index} style={{backgroundColor: "#D0D0D0", height: 10, width: 10, borderRadius: 5, marginHorizontal: 6}}>
                 
                </View>
            )
        }
    })
}

  return (
    <View style={{flex: 1, backgroundColor: "#ffffff"}}>
      <SafeAreaView style={{ flex: 1, alignItems:"center", top: 100 }}>

        <FlatList
          data={carouselData}
          ref={flatlistRef}
          getItemLayout={getItemLayout}
          renderItem={renderItem} 
          horizontal={true}
          pagingEnabled={true}
          onScroll={handleScroll}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

        <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 50}}>
          {renderDotIndicators()}
        </View>

        <LinearGradient style={{backgroundColor: "#FF800B", width: "100%", height: "40%", alignItems: "center", top: 0, gap: 30, paddingTop: 30}} colors={["#FF9B63", "#FF621F"]}>
          <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigation.replace('LoginScreen') }>
            <Text style={[styles.button_text, {color: "#000000"}]}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => navigation.replace('RegisterScreen') }>
            <Text style={[styles.button_text, {color: "#ffffff"}]}>Create an account</Text>
          </TouchableOpacity>
        </LinearGradient>

      </SafeAreaView>
      
    </View>
  )
}

export default Log

const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderRadius: 10,
    paddingVertical: 13,
  },
  button1:{
    backgroundColor: "#ffffff"
  },
  button2: {
    backgroundColor: "#000000"
  },
  button_text: {
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16
  }
})