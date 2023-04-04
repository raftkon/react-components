import React from "react";
import Button from "./components/button/button.jsx";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
const App = () => {
  return (
    <div>
      <div>
        <Button primary outline rounded>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Hello
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoCloudDownload />
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Danger
        </Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
    </div>
  );
};

export default App;
