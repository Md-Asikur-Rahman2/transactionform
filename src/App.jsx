import "./App.css";
import LeftSide from "./Component/LeftSide/LeftSide";
import Right from "./Component/LeftSide/RightSide/Right";

function App() {
  return (
    <>
      <div className="justify-between  max-w-screen-xl mx-auto  bg-white">
        {/* left site button  */}
        <div className=" mb-10 mt-5">
          <LeftSide></LeftSide>
        </div>
        {/* rihgt side button  */}
        {/* <div className="">
          <Right></Right>
        </div> */}
      </div>
    </>
  );
}

export default App;
