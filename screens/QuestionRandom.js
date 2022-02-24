import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { useContext } from "react";
import EcomContext from "../Babelprovider";

const QuestionRandomScreen = ({ navigation }) => {
  const {
    RecProducts,
    setRecProducts,
    Data1,
    data11,
    setData1,
    Data2,
    setData2,
    getUserlikes,

    ExcludedId,
    BaseNaswers, setBaseNaswers,
  } = useContext(EcomContext);

  const que6 = [
    {
      id: 1,
      question: "Who is this gift for?",
      answers: ["male", "female"],
    },
    {
      id: 2,
      question: "how old is this person?",
      answers: ["baby", "child", "teen", "young adult", "adult", "senior"],
    },
    {
      id: 3,
      question: "What's your budget?",
      answers: ["25", "100", "250", "500", "ALL"],
    },
    {
      id: 4,
      question: "This person is your...",
      answers: [
        "significant other",
        "parent",
        "friend",
        "spouse",
        "child",
        "grandparent",
        "co-worker",
        "other",
      ],
    },
    {
      id: 5,
      question: "What's the occasion?",
      answers: [
        "birthday",
        "christmas",
        "romantic",
        "father's day",
        "mother's day",
        "other",
      ],
    },
    {
      id: 6,
      question: "Show NSFW gifts?",
      answers: ["sfw", "nsfw"],
    },
  ];

  const allQuestions = [
    {
      question: "What’s the biggest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Neptune", "Mercury"],
      correct_option: "Jupiter",
    },
    {
      question: "What attraction in India is one of the famus in the world?",
      options: ["Chand Minar", "Taj Mahal", "Stadium"],
      correct_option: "Taj Mahal",
    },
    {
      question: "What land animal can open its mouth the widest?",
      options: ["Alligator", "Crocodile", "Baboon", "Hippo"],
      correct_option: "Hippo",
    },
    {
      question: "What is the largest animal on Earth?",
      options: [
        "The African elephant",
        "The blue whale",
        "The sperm whale",
        "The giant squid",
      ],
      correct_option: "The blue whale",
    },
    {
      question: "What is the only flying mammal?",
      options: [
        "The bat",
        "The flying squirrel",
        "The bald eagle",
        "The colugo",
      ],
      correct_option: "The bat",
    },
  ];

  var que911=[];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const [QuesionID, setQuesionID] = useState([]);
  const [SelectedAnswers, setSelectedAnswers] = useState([]);

  const [SelectedAnswers2, setSelectedAnswers2] = useState([]);

  const validateAnswer = (selectedOption) => {
    setCurrentOptionSelected(selectedOption);
    setShowNextButton(true);

    /*    if(currentQuestionIndex== qu1.length-1)
        {
          setQuesionID([...QuesionID, qu1[currentQuestionIndex].id]);
          console.log(QuesionID);
          setSelectedAnswers([...SelectedAnswers, currentOptionSelected]);
          console.log(SelectedAnswers);
          postresult();
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setShowNextButton(false);
            setQuesionID([...QuesionID, qu1[currentQuestionIndex].id]);
            console.log(QuesionID);
            setSelectedAnswers([...SelectedAnswers, currentOptionSelected]);
            console.log(SelectedAnswers);
       } */
  };
  const handleNext = () => {
   // que911.push(...SelectedAnswers);
  //  setSelectedAnswers2(que911);

    if (currentQuestionIndex == qu1.length - 1) {
      // Last Question
      // Show Score Modal
       setShowScoreModal(true)
      setQuesionID([...QuesionID, qu1[currentQuestionIndex].id]);
      console.log(QuesionID);


      setSelectedAnswers([...SelectedAnswers, currentOptionSelected]);
      console.log(SelectedAnswers);


   // navigation.navigate("CallApiScreen");
    //  setqu1(que911);


    //  postresult();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      //   setCurrentOptionSelected(null);
      //   setCorrectOption(null);
      //  setIsOptionsDisabled(false);
      setShowNextButton(false);

      setQuesionID([...QuesionID, qu1[currentQuestionIndex].id]);
      console.log(QuesionID);

      setSelectedAnswers([...SelectedAnswers, currentOptionSelected]);
      console.log(SelectedAnswers);
    }
  
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
          }}
        >
          {qu1[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <ScrollView>
        {qu1[currentQuestionIndex]?.answers.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            //   disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
              /* option==correctOption 
                            ? "#fff" */
              borderColor: option == currentOptionSelected ? "#fff" : "#aaa",

              /*         backgroundColor: option==correctOption 
                            ? "green" +'20'
                            : option==currentOptionSelected 
                            ? "red" +'20'
                            : "blue"+'20', */
              //   borderColor:"#fff",
              height: 50,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 20, color: "black", textAlign: "center" }}>
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: "yellow",
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  const [qu1, setqu1] = useState([]);

  
  const GetModules = async () => {
    var ArrayLocal = [];
    var w=ExcludedId;
    w=w.toString();
  var bodyFormData = new FormData();
    // bodyFormData.append("intList", Aarray);

     // bodyFormData.append("intList", "122,123,125,128");
     bodyFormData.append("intList", w);

  axios({
    method: "post",
    url: "http://talhakhawar.pythonanywhere.com/sec",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      const result = Object.values(response.data);
     //   que6.push(...result);
        setqu1(result);
    })
    .catch(function (response) {
      //handle error
      alert("Loading Fail");
    });
  };

/* 
  const GetModules = async () => {
    try {
      const response = await axios.get(
        `http://talhakhawar.pythonanywhere.com/sec`
      );
      if (response.data) {
        const result = Object.values(response.data);
     //   que6.push(...result);
        setqu1(result);
      }
    } catch (err) {
      alert(err);
      // setErrorMessage("Api Call Failed");
    }
  }; */

/* 
  const [BaseAns, setBaseAns] = useState(); */

  function postresult() {
    setShowScoreModal(false);
    var a = qu1.slice(0, 4);
    var a1 = a[0].id;
    var a2 = a[1].id;
    var a3 = a[2].id;
    var a4 = a[3].id;


    console.log("SelectedAndrew",SelectedAnswers);
    var b = SelectedAnswers; // cinstant//  var b = SelectedAnswers.slice(0, 4);
    b = b.toString();
   var c = SelectedAnswers.slice(6, 11); // random//   var c = SelectedAnswers.slice(4, 10);

    //  c=c.trim();

    var t=ExcludedId;
    t=t.toString();

    var Aarray = [a1, a2, a3, a4];

   
    Aarray = Aarray.toString();
    //   b = b.replace(/\s/g, '');
   // (c[6] = "sfw"), (c = c.toString());
    c = c.toString();
   /*  console.log("a data", t);
    console.log("secString Data", BaseNaswers);
    console.log("c Data", b); */

    console.log("intList data", Aarray);
    console.log("secString Data", BaseNaswers);
    console.log("firstString Data", b);

    setData1(Aarray);
   // setData2(b);

    var bodyFormData = new FormData();
    bodyFormData.append("intList", Aarray); // ids of random questions
    bodyFormData.append("firstString", b); // random answers
    bodyFormData.append("secString", BaseNaswers); // base answers from other screen


    //   bodyFormData.append("intList", "122,123,125,128");
    //   bodyFormData.append("firstString", 'yes,yes,yes,yes');
    //  bodyFormData.append("secString", "female,adult,100,all,birthday,sfw");
    axios({
      method: "post",
      url: "http://talhakhawar.pythonanywhere.com/third",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        if(response.status===201){
          setRecProducts([]);
          alert("Loading Fail");
          navigation.navigate("ResultsScreen");
        }else{
        console.log("Recomendet products",response.data);
        setRecProducts(response.data.recommendation);
        navigation.navigate("ResultsScreen");
      }
      })

      .catch(function (response) {
        //handle error
        alert("Loading Fail");
        navigation.navigate("StartScreen");
        setRecProducts([]);
      });
  }


  useEffect(() => {
    //  LogBox.ignoreLogs(["Setting a timer"]);
    GetModules();
     getUserlikes();

    //console.log("Question screen load", data11);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={"white"} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: "gray",
          position: "relative",
        }}
      >
        {/*   <Text>{data11.length}0</Text> */}
        {/* ProgressBar */}
        {/*    { renderProgressBar() } */}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                //     onPress= { ()=>  navigation.navigate("ResultsScreen")}
                onPress={() =>  postresult()}
                style={{
                  backgroundColor: "blue",
                  padding: 20,
                  width: "100%",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Show Reccomendation
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default QuestionRandomScreen;
