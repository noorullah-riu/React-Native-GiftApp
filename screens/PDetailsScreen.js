import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import Colors from "../assets/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import EcomContext from "../Babelprovider";

const windowWidth = Dimensions.get("window").width;

const PDetailsScreen = ({ navigation, route }) => {
  const { ProductD ,ProductDetail} = useContext(EcomContext);

  const { id ,id2} = route.params;

  useEffect(() => {
  
  console.log("-----");
  console.log(id2);
    
  }, []);
  return (
    <View style={styles.Container}>
      <View style={styles.ProductContainer}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{
            uri: id2.product_image
            }}
          />
        </TouchableOpacity>
        <View style={styles.rightSide}>
          <TouchableOpacity>
            <Text style={{ color: "black", fontSize: 20 }}>
 
               {id2.name} 
            </Text>
            <Text style={styles.textTitle}>
            {id2.desciption}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textPrice}>$ </Text>
              <Text style={styles.textPrice}> {id2.price} </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity 
              onPress={ ()=>{ Linking.openURL(id2.product_url)}}
            style={styles.btnBuy}>
              <Text>Buy Now</Text>
            </TouchableOpacity>
       {/*      <TouchableOpacity>
              <Ionicons name="heart-outline" size={40} color={Colors.orange} />
            </TouchableOpacity> */}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BottomNavigator")}
            style={styles.btnBuy}
          >
            <Text>Goto Main App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingBottom: "15%",
  },
  ProductContainer: {
    flexDirection: "row",
    width: windowWidth / 1.05,
    paddingTop: 20,
  },
  image: {
    height: windowWidth / 3,
    width: windowWidth / 3,
    resizeMode: "cover",
    borderRadius: 10,
    overflow: "hidden",
  },
  rightSide: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  textPrice: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
  },
  textTitle: {
    fontSize: 16,
    color: Colors.color3,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 10,
    //alignContent: 'center',
  },
  btnBuy: {
    height: 40,
    backgroundColor: Colors.orange,
    marginRight: 20,
    marginBottom:10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default PDetailsScreen;
