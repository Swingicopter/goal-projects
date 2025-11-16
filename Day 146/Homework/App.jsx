import ParentComponent from "./Task1/ParentComponent";
import CityParent from "./Task2/CityParent";
import ProfileParent from "./Task3/ProfileParent";

function App() {
  return (
    <div>
      <ParentComponent />
      {<CityParent />}
      {<ProfileParent />}
    </div>
  );
}

export default App;