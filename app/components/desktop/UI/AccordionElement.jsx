import AccordionElementTitle from "./AccordionElementTitle";
import AccordionElementContent from "./AccordionElementContent";
import { useContentContext } from "../../context/ContentContext";

const AccordionElement = ({ index }) => {
  const { content } = useContentContext();

  return (
    <div className="border-2 border-gray-500 flex flex-row justify-start h-full w-fit">
      <AccordionElementTitle index={index}/>
      {index === content.activeTab && <AccordionElementContent index={index}/>}
    </div>
  )
}
export default AccordionElement