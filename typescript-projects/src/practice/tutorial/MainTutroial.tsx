import { useState } from "react";
import Button from "./components/Button";
// import Form from "./components/Form";
import { CounterContextProvider } from "./context/Counter";
import { Counter } from "./components/Counter";

interface Book{
  name : string;
  sold : number;
}

function MainTutorial() {
  const [books, setBooks] = useState<Book>({name : "Atomic Habits", sold : 10});
  const [count, setCount] = useState<number>(0);
  const [something, setSomething] = useState(false);

  function handleClick() {
    (count>=0) ? setSomething(true) : setSomething(false);
    setCount((prev) => prev + 1);
  }

  function onReduce(){
    (count>=0) ? setSomething(true) : setSomething(false);
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <Button text={count} onClick={handleClick} onReduce={onReduce} something={something}/>
      <div>
        <h3>Book : {books.name} and copy sold : {books.sold}</h3>
        <button onClick={()=> setBooks({name : "Prathna", sold : 30})}>Change Book Info</button>
      </div>
      {/* <div>
        <Form/>
      </div> */}
      <CounterContextProvider>
          <Counter/>
      </CounterContextProvider>
    </>
  );
}

export default MainTutorial;
