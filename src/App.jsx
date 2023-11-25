import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";

const App = () => {
  return (
    <div
      className={`py-5 px-2 lg:my-5 w-full shadow-sm rounded 
         bg-gray
         max-w-[350px] md:max-w-[1300px]  mx-auto h-auto`}
    >
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
