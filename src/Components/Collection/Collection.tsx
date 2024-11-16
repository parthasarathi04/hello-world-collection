import { useContext } from "react";
import { HelloWorldData } from "../../Data/Data";
import HelloWorldView from "../HelloWorld/HelloWorldView";
import "./Collection.css";
import { SortContext } from "../../Context/Sort";

const Collection = () => {
  const sort = useContext(SortContext);
  return (
    <div id="collection">
      {sort
        ? [...HelloWorldData]
            .sort((a, b) => a.language.localeCompare(b.language))
            .map((data) => <HelloWorldView data={data} key={data.language} />)
        : HelloWorldData.map((data) => (
            <HelloWorldView data={data} key={data.language} />
          ))}
    </div>
  );
};

export default Collection;
