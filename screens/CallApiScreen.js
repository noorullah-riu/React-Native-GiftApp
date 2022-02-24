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
} from "react-native";
import Colors from "../assets/Colors";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

import { useContext } from "react";
import EcomContext from "../Babelprovider";

const windowWidth = Dimensions.get("window").width;

const CallApiScreen = ({ navigation }) => {
  const {
    RecProducts,
    setRecProducts,
    Data1,
    Data2,
    postresult,
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
    bodyFormData.append("intList", Data1);
    bodyFormData.append("third", paraid.toString());
    bodyFormData.append("last", paralike.toString());
    bodyFormData.append("firstString", Data2.toString());
    // bodyFormData.append("firstString", "yes,yes,yes,yes");

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

  return (
    <View style={styles.Container}>
  


<TouchableOpacity
 style={{width:"80%",backgroundColor:"green",padding:20 ,marginLeft:30,marginTop:100}}
onPress={() => navigation.navigate("QuestionsScreen")}
>
<Text style={{ textAlign: "center" }}>Show Results{RecProducts.length}</Text>
</TouchableOpacity>

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

export default CallApiScreen;
