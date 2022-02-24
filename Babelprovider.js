import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";

import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

import AsyncStorage from "@react-native-async-storage/async-storage";

//#region something

const _0x2937 = [
  "228qGwqcK",
  "2034732ePRSjq",
  "234NFTYea",
  "152hPDTFC",
  "createContext",
  "1711DMvwJo",
  "4101LWyZTB",
  "373MHoqfG",
  "313884Xxdabe",
  "625132FNhWeO",
  "41670vtuiRw",
];
const _0x2acd = function (_0x1bb1c1, _0x3914ba) {
  _0x1bb1c1 = _0x1bb1c1 - 0xdc;
  let _0x29378b = _0x2937[_0x1bb1c1];
  return _0x29378b;
};
const _0x1ef3f6 = _0x2acd;
(function (_0x13b69c, _0x4189d0) {
  const _0x533e89 = _0x2acd;
  while (!![]) {
    try {
      const _0x1b9c84 =
        -parseInt(_0x533e89(0xe4)) +
        -parseInt(_0x533e89(0xe0)) * parseInt(_0x533e89(0xe2)) +
        -parseInt(_0x533e89(0xe6)) * parseInt(_0x533e89(0xdd)) +
        -parseInt(_0x533e89(0xe5)) +
        -parseInt(_0x533e89(0xe1)) * parseInt(_0x533e89(0xde)) +
        parseInt(_0x533e89(0xe3)) +
        parseInt(_0x533e89(0xdc));
      if (_0x1b9c84 === _0x4189d0) break;
      else _0x13b69c["push"](_0x13b69c["shift"]());
    } catch (_0x5d36e9) {
      _0x13b69c["push"](_0x13b69c["shift"]());
    }
  }
})(_0x2937, 0x5993b);
const EcomContext = React[_0x1ef3f6(0xdf)]();

//#endregion

export const EcomProvider = ({ children }) => {
  const [Token, setToken] = useState("");
  const [ExcludedId, setExcludedId] = useState([]);

  const APILogin = axios.create({
    baseURL: `https://metafeapi.azurewebsites.net/api`,
    timeout: 1000 * 1,
    // baseURL: "https://dietaapi.azurewebsites.net/api/FatSecret/Food",

    // headers: { Authorizaton: `bareer ${Token}` },
  });

  const API = axios.create({
    baseURL: `https://metafeapi.azurewebsites.net/api`,
    // timeout: 100,
    // baseURL: "https://dietaapi.azurewebsites.net/api/FatSecret/Food",

    headers: { Authorization: `bearer ${Token}` },
  });

  function Login() {
    // setLogin_Loading(true);
    APILogin.post("/Auth/Authenticate", {
      Username: Email, // "M.ali_nutritionist@gmail.com",
      Password: Password, // "Test Plan",
    })
      .then((response) => {
        //   console.log(response);
        if (response.data) {
          console.log(response.data);
          //    alert("Case Success");
          //  setToken(response.data.result.accessToken);
          //  setLogin_Loading(false);
          //  return "true";
        }
      })
      .catch(function (error) {
        // console.log(error.response.data.message);
        // alert(error.response.data.message);
        //  setLogin_Loading(false);
      });
  }

  const [TokenUserAsyncS, setTokenUserAsyncS] = useState("");

  const increaseByTen = async (TokenUserAsync) => {
    try {
      //console.log(verificationId);
      const jsonValue1 = JSON.stringify(TokenUserAsync);
      //  const jsonValue2 = JSON.stringify(PasswordUserAsync);
      // console.log(jsonValue);
      await AsyncStorage.setItem("TokenUserAsync", jsonValue1);
      // await AsyncStorage.setItem("UPassword2", jsonValue2);
    } catch (e) {
      console.log("Async Storage Fail storing--------------]]]]]]]");
    }
  };

  const increaseByTenGet = async () => {
    try {
      const res1 = await AsyncStorage.getItem("TokenUserAsync");
      const parsed1 = JSON.parse(res1);
      console.log("in get Async");
      if (parsed1 !== null) {
        console.log("has value");
        console.log(parsed1);
        console.log("in get Async 2");
        setTokenUserAsyncS(parsed1);
        setuserid(parsed1);
      } else {
        console.log("Async Storage Fail--------------]]]]]]]");
      }
    } catch (err) {
      console.log("Async Storage Fail catch ---------]]]]]]]");
      console.log(err);
    }
  };

  const removeValueCookie = async () => {
    try {
      await AsyncStorage.removeItem("TokenUserAsync");
    } catch (e) {
      // remove error
      console.log("Error removing cookie");
    }
    console.log("Done. delete async uid");
    setTokenUserAsyncS("");
  };

  //#region get

  const [Modules, setModules] = useState([]);
  const [Modulesprogress, setModulesprogress] = useState();

  const GetModules = async () => {
    try {
      const response = await API.get(
        `/Modules/GetAllModules?ID=0&PageNumber=1`
      );
      console.log("Get All Modules");
      if (response.data) {
        console.log("Module Data ", response.data.modules.$values);
        setModules(response.data.modules.$values);
        setModulesprogress(response.data.progress);
      }
    } catch (err) {
      alert(err);
      // setErrorMessage("Api Call Failed");
    }
  };

  //#endregion

  // forgot pass
  const [dataF, setDataF] = React.useState({
    //  username: "test8@gmail.com",
    // password: "1234567",
    username: "",
    /*  password: "", */
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    Signupl: false,
  });

  const [datal, setDatal] = React.useState({
   /*  username: "test8@gmail.com",
    password: "1234567", */
    username: "",
    password: "",  
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    Signupl: false,
  });

  const [Login_resdy, setLogin_resdy] = useState(false);
  const [userid, setuserid] = useState();

  const LoginUser = async () => {
    // setloading(true);
    const auth = firebase.auth();
    const firestore = firebase.firestore();

    try {
      const a = await auth
        .signInWithEmailAndPassword(datal.username, datal.password)
        .then(() => {
          //    navigation.navigate("MainAPp", { id: auth.currentUser.uid });
          //  alert(auth.currentUser.uid);
          setuserid(auth.currentUser.uid);
          setDatal({
            ...datal,
            Signupl: true,
          });

          setLogin_resdy(true);
          increaseByTen(auth.currentUser.uid);
        });
    } catch (e) {
      alert(e);
      //   setloading(false);
    }
  };

  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    SignupR: false,
  });

  const registerUser = async () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      await auth
        .createUserWithEmailAndPassword(data.username, data.password)
        .then(() => {
          alert("completed . you can sign in now");
        });
    } catch (e) {
      console.log(e);
    }
  };

  const Userlikes = async (
    name,
    desciption,
    price,
    id,
    product_image,
    product_url
  ) => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      // navigation.navigate("Login");
      //Once the user creation has happened successfully, we can add the currentUser into firestore
      //with the appropriate details.
      firestore.collection("userlikes").add({
        desciption: desciption,
        name: name,
        userid: userid,
        id: id,
        price: price,
        product_image: product_image,
        product_url: product_url,
      });
      // setUserID(auth.currentUser.uid);

      alert(auth.currentUser.uid);
    } catch (e) {
      console.log(e);
    }
  };
  const [data11, setdata11] = useState([]);
  const [RandomQIds, setRandomQIds] = useState([]);

  const getUserlikes = async () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      firestore
        .collection("userlikes")
        .get()
        // .doc(id)
        // .where( "")
        //  .where("userid", "==", "U2h8fzTgpJMofPUaveQm44zFDTd2")
        .then((querySnapshot) => {
          const users = [];
          console.log("Total users: ", querySnapshot.size);

          querySnapshot.forEach((documentSnapshot) => {
            console.log("documentSnapshot");
            const a = documentSnapshot.data();
            if (a.userid === userid) {
              //   alert("Found here");
              users.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            }
          });

          var data2 = users.filter((value, index, self) =>
          index === self.findIndex((t) => (
         t.id === value.id
          ))
           )

        //  console.log(data2);
          setdata11(data2);
        });

      // console.log("gggtttt", users);
    } catch (e) {
      console.log(e);
    }
  };

  
  const [ProductD, setProductD] = useState({});
  const ProductDetail = async (id) => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      firestore
        .collection("userlikes")
        .doc(id)
        .get()
        .then((documentSnapshot) => {
          console.log("Product exists: ", documentSnapshot.exists);

          if (documentSnapshot.exists) {
            console.log("Product data: ", documentSnapshot.data());
            const a = documentSnapshot.data();

            setProductD(a);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  const PasswordReset = async () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      // auth.sendPasswordResetEmail("test2@hotmail.com")
      auth
        .sendPasswordResetEmail(dataF.username)
        .then(alert("Please check your email..."));
    } catch (e) {
      console.log(e);
    }
  };
  /*   forgotPassword = (Email) => {
    firebase.auth().sendPasswordResetEmail(Email)
      .then(function (user) {
        alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
  } */

  const ProductDelete = async (key) => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      firestore
        .collection("userlikes")
        .doc(key)
        .delete()
        .then(() => {
          getUserlikes();
          alert("item deleted!");
        });
    } catch (e) {
      console.log(e);
    }
  };

  const [RecProducts, setRecProducts] = useState([]);
  const [Data1, setData1] = useState("");
  const [BaseNaswers, setBaseNaswers] = useState("");
  const [Data2, setData2] = useState("");

  useEffect(() => {
    //  LogBox.ignoreLogs(["Setting a timer"]);
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCRYLmtMR9QNHiD5xD69rhLvkiYWQifSnQ",
        authDomain: "giftaiapp.firebaseapp.com",
        projectId: "giftaiapp",
        storageBucket: "giftaiapp.appspot.com",
        messagingSenderId: "751237987974",
        appId: "1:751237987974:web:857766e4ba16db32369b07",
      });

      increaseByTenGet();
      // todate();
      // increaseByTenGet2();
      // increaseByTenGet3();
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }, []);

  return (
    <EcomContext.Provider
      value={{
        registerUser,
        data,
        setData,

        BaseNaswers, setBaseNaswers,

        LoginUser,
        datal,
        setDatal,
        PasswordReset,

        Login_resdy,
        userid,

        ExcludedId,
        setExcludedId,

        TokenUserAsyncS,
        removeValueCookie,

        ProductDelete,

        RandomQIds, 
        setRandomQIds,

        RecProducts,
        setRecProducts,
        Data1,
        setData1,
        Data2,
        setData2,

        Userlikes,
        getUserlikes,

        data11,
        dataF,
        setDataF,

        ProductDetail,
        ProductD,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

export default EcomContext;
