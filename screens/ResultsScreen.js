import React from "react";
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
import axios from "axios";

import { useContext } from "react";
import EcomContext from "../Babelprovider";

const windowWidth = Dimensions.get("window").width;

const ResultsScreen = ({ navigation }) => {
  const {
    RecProducts,
    setRecProducts,
    Data1,
    Data2,

    userid,
    Userlikes,
    getUserlikes,
  } = useContext(EcomContext);

  //alert(RecProducts.length);

  function feedback(
    paraid,
    paralike,
    name,
    desciption,
    price,
    id,
    product_image,
    product_url
  ) {
    if (paralike === 1) {
      Userlikes(name, desciption, price, id, product_image, product_url);
      // function to save liked product
      // into Databse of google
    }

    /* var a=Data2.replace(/\s+/, "")
console.log(a);
var b=a.replace(/\s+/, "")
console.log(b);

var c=b.replace(/\s+/, "")
console.log("string c ",c.toString()); */

    var bodyFormData = new FormData();
    bodyFormData.append("intList", Data1.toString());
    bodyFormData.append("third", paraid.toString());
    bodyFormData.append("last", paralike.toString());
    bodyFormData.append("firstString", Data2.toString());
    // bodyFormData.append("firstString", "yes,yes,yes,yes");

    console.log("intList",Data1);
    console.log("third",paraid.toString());
    console.log("last",paralike.toString());
    console.log("firstString",Data2.toString());

    axios({
      method: "post",
      url: "http://talhakhawar.pythonanywhere.com",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        alert(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        //   navigation.navigate("StartScreen");
      });
  }

  const footer = () => {
    return (
      <View style={styles.options}>



{RecProducts.length <= 0 ? (
  <View>
     <TouchableOpacity
     style={{width:"80%",backgroundColor:"gray",padding:20 ,marginLeft:30,}}
     onPress={() => navigation.navigate("StartScreen")}
   >
     <Text style={styles.btnText}>No Result Retake Quiz</Text>
   </TouchableOpacity>

   <TouchableOpacity
     style={{width:"80%",backgroundColor:"gray",padding:20 ,marginTop:20, marginLeft:30,}}
                onPress={() => navigation.navigate("QuestionRandomScreen")}
              >
                <Text style={styles.btnText}>Answer Random Questions Again</Text>
              </TouchableOpacity>


<TouchableOpacity
 style={{width:"80%",backgroundColor:"gray",padding:20 ,marginLeft:30,marginTop:10}}
onPress={() => navigation.navigate("BottomNavigator")}
>
<Text style={{ textAlign: "center" }}>Goto Main App{RecProducts.length}</Text>
</TouchableOpacity>

</View>
            ) : (
              <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnAnswer}
                onPress={() => navigation.navigate("StartScreen")}
              >
                <Text style={styles.btnText}>Restart Quiz</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnAnswer}
                onPress={() => navigation.navigate("QuestionRandomScreen")}
              >
                <Text style={styles.btnText}>Answer Random Questions Again</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnAnswer}
                onPress={() => navigation.navigate("BottomNavigator")}
              >
                <Text style={{ textAlign: "center" }}>Goto Main App{RecProducts.length}</Text>
              </TouchableOpacity>
            </View>
            )}



      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <FlatList
        //  horizontal={false}
        numColumns={2}
        data={RecProducts}
        ListFooterComponent={footer()}
        showsHorizontalScrollIndicator={true}
        keyExtractor={(RecProducts) => RecProducts.name}
        renderItem={({ item }) => {
          return (
            <View style={styles.ProductContainer}>
              <TouchableOpacity
              //  onPress={() => navigation.navigate("PDetailsScreen")}
             
          onPress={() =>
                navigation.navigate("PDetailsScreen", {
                  id: item.name,
                  id2: {
                    desciption: item.desciption,
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    product_image:item.product_image,
                    product_url:item.product_url,
                  },
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
              <TouchableOpacity
             //   onPress={() => navigation.navigate("ProductDetailsScreen")}
             
             >
                <Text style={styles.textTitle}>{item.name}</Text>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
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
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    feedback(
                      item.id,
                      1,
                      item.name,
                      item.desciption,
                      item.price,
                      item.id,
                      item.product_image,
                      item.product_url
                    )
                  }
                  style={{ paddingRight: 50 }}
                >
                  <Ionicons name="heart-outline" size={40} color={"green"} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    feedback(
                      item.id,
                      0,
                      item.name,
                      item.desciption,
                      item.price,
                      item.id,
                      item.product_image,
                      item.product_url
                    )
                  }
                >
                  <Ionicons name="thumbs-down" size={40} color={"red"} />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingBottom: "15%",
  },
  ProductContainer: {
    //flexDirection: 'row',
    width: windowWidth / 2.5,
    paddingTop: 30,
    marginHorizontal: 20,
  },
  image: {
    height: windowWidth / 2.5,
    width: windowWidth / 2.5,
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
    //justifyContent: 'flex-end',
    paddingTop: 10,
    justifyContent: "center",
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
  options: {
    paddingTop: 30,
    // backgroundColor: Colors.white,
    flex: 1,
    flexDirection: "row",
    // alignItems: 'center',
    //  justifyContent: 'center',
  },
  btnAnswer: {
    marginTop: 10,
    width: 100,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "gray",
    //  backgroundColor: 'pink',
  },

  btnAnswer2: {
    marginTop: 10,
    width: "85%",
    padding: 10,
    margin: 10,
    marginLeft: 30,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "pink",
  },
});

export default ResultsScreen;
