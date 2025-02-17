import AccordionElement from "./AccordionElement";
import { useContentContext } from "../../context/ContentContext";

const AccordionContainer = () => {
    const { content } = useContentContext();

    return (
        <div className="flex flex-row h-screen justify-center items-center h-full">
            {
                content.sections.map((_, index) => (
                    <AccordionElement key={index} index={index}/>
                ))
            }
        </div>
    )
}

export default AccordionContainer