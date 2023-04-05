import React from "react";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";
const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary outline rounded className="mb-2">
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

export default ButtonPage;
