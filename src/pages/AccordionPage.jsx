import React from "react";
import Accordion from "../components/Accordion";
const AccordionPage = () => {
  const items = [
    {
      label: "Can i use React on a Project?",
      content: "You can use React on any project you want.",
    },
    {
      label: "Can i use JavaScript on a Project?",
      content: "You can use JavaScript on any project you want.",
    },
    {
      label: "Can i use TailwindCSS on a Project?",
      content: "You can use TailwindCSS on any project you want.",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
