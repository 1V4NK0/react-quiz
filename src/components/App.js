import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import StartScreen from "./StartScreen";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import UploadQuiz from "./UploadQuiz";
import Footer from "./Footer";
import Timer from "./Timer";
import Exit from "./Exit";
import { useQuiz } from "./QuizContext";
//створити функцію яка буде брати купу параметрів? і повертати форматований обʼєкт питань.

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}

        {status === "upload" && <UploadQuiz />}
        {status === "active" && (
          <>
            <Progress />
            <Question />

            <Footer>
              <Timer />
              <NextButton />
              <Exit />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
