import { useContentContext } from "../../context/ContentContext";

const AccordionElementContent = ({ index }) => {
    const { content } = useContentContext()
    const contentElements = [];

    for (const [i, element] of content.sections[index].content.entries()) {
        const keys = Object.keys(element);
        if (keys.length === 0) {
            continue;
        }

        let newElement;
        switch (keys[0]) {
            case "header2":
                newElement = <h2 className="mt-8 text-xl text-center font-bold">{element.header2}</h2>;
                break;
            case "header3":
                newElement = <h3 className="mt-4 text-l text-center font-bold">{element.header3}</h3>;
                break;
            case "paragraph":
                newElement = <p className="mt-2 px-12">{element.paragraph}</p>;
                break;
            case "image":
                newElement = <img className="mt-4 mx-auto w-2/3 border-double border-gray-500 border-4" src={element.image} alt={element.alt} />;
                break;
            default:
                console.error("Invalid content element type", element);
                break;
        }

        if (element.link) {
            newElement = (
                <a className="underline text-cyan-500 hover:text-teal-500" href={element.link} target="_blank" rel="noopener noreferrer">
                    {newElement}
                </a>
            );
        }

        newElement = <div key={i}>{newElement}</div>;

        contentElements.push(newElement);
    }

    return (
        <div className="w-[40rem] pb-8 overflow-y-auto">
            {contentElements}
        </div>
    )
}
export default AccordionElementContent