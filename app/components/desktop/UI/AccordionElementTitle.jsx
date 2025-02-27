import { useContentContext } from "../../context/ContentContext";

const AccordionElementTitle = ({ index }) => {
  const { content, dispatch } = useContentContext();

  return (
    <div onClick={() => dispatch({ type:"switchTab", payload: index })} className="flex flex-col justify-start items-center w-24 h-full bg-gray-500 hover:bg-gray-600">
        <object data={content.sections[index].icon} type="image/svg+xml" aria-label="{title} Icon" className={ index === content.activeTab ? "w-4/5 mt-4 p-2 border-4 bg-cyan-300 pointer-events-none" : "w-4/5 mt-4 p-2 border-4 bg-cyan-600 pointer-events-none" } />
        <h1 className="mt-4 writing-vertical text-orientation-upright text-2xl font-bold uppercase pointer-events-none">
            {content.sections[index].header1}
        </h1>
    </div>
  )
}
export default AccordionElementTitle