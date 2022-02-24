import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from "react-native";
import Colors from "../assets/Colors";
import { Ionicons } from "@expo/vector-icons";

import { useContext } from "react";
import EcomContext from "../Babelprovider";

const windowWidth = Dimensions.get("window").width;

const LikedGiftsScreen = ({ navigation }) => {
  const {getUserlikes, data11,ProductDelete } = useContext(EcomContext);


  /*   const ages = [32, 33, 16, 40];
  const agess = [];

  data11.filter(checkAdult); // Returns [32, 33, 40]

  function checkAdult(id) {
    // return age >= 18;
    if (id == 216) {
      alert("found");
    }

{
    "desciption": "Cool down while experiencing all the action of a dogfight every time you start the engine of the World War II airplane ceiling fan. Perfect for all history and war buffs, the fan’s creative design, will have you on pins and needles each time you decide to cool off.",
    "id": 372,
    "key": "0m4RCSWLNIw8qazoOpJI",
    "name": "World War II Airplane Ceiling Fan",
    "price": 281,
    "product_image": "https://cdn.thisiswhyimbroke.com/images/warplane-ceiling-fan-Craftmade-WB348TS-Tiger-Shark-Warplane-300x250.jpg",
    "product_url": "https://www.amazon.com/dp/B0000CBJQR/",
    "userid": "U2h8fzTgpJMofPUaveQm44zFDTd2",
  },



  } */

  useEffect(() => 
  {
    getUserlikes();
    console.log("***************", data11);
  }, []);
  return (
    <>
      <View style={styles.Container}>
        <FlatList
          data={data11}
          showsHorizontalScrollIndicator={true}
          keyExtractor={(data11) => data11.name}
          renderItem={({ item }) => {
            return (
              <View style={styles.ProductContainer}>
                <TouchableOpacity
                  //   onPress={() => navigation.navigate("ProductDetailsScreen")}
                  onPress={() =>
                    navigation.navigate("ProductDetailsScreen", {
                      id: item.key,
                    })
                  }
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.product_image,
                    }}
                  />
                </TouchableOpacity>
                <View style={styles.rightSide}>
                  <TouchableOpacity
                  //  onPress={() => navigation.navigate("ProductDetailsScreen")}
                  >
                    <Text style={styles.textTitle}>{item.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.textPrice}>$ </Text>
                      <Text style={styles.textPrice}>{item.price}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.btnContainer}>
                    <TouchableOpacity 
                     onPress={ ()=>{ Linking.openURL(item.product_url)}}
                    style={styles.btnBuy}>
                      <Text>Buy Now</Text>
                    </TouchableOpacity>
            {/*         <TouchableOpacity>
                      <Ionicons
                        name="heart-outline"
                        size={40}
                        color={"green"}
                      />

                    </TouchableOpacity> */}

                    <TouchableOpacity>
                    <Ionicons name="heart-dislike-outline" size={40} color="black"
                     // onPress={() => alert(item.key) }
                     onPress={() => ProductDelete(item.key)}
                    />
                      
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </>
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
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default LikedGiftsScreen;
