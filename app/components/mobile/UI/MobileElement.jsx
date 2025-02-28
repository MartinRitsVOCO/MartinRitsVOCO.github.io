import { useContentContext } from "../../context/ContentContext";

const MobileElement = ({ index }) => {
    const { content } = useContentContext();
    const contentElements = [
        <div key={"title"} className="w-screen bg-gray-500 sticky top-0 flex flex-row justify-center items-center">
            <object data={content.sections[index].icon} type="image/svg+xml" aria-label="" className={ "size-12 ml-4 my-auto p-1 border-4 bg-cyan-300" } />
            <h1 className="pl-2 pr-8 py-4 w-screen text-center text-xl font-bold uppercase">{content.sections[index].header1}</h1>
        </div>
    ];

    for (const [i, element] of content.sections[index].content.entries()) {
        const keys = Object.keys(element);
        if (keys.length === 0) {
            continue;
        }

        let newElement;
        switch (keys[0]) {
            case "header2":
                newElement = <h2 className="mt-8 px-8 w-screen text-xl text-center font-bold">{element.header2}</h2>;
                break;
            case "header3":
                newElement = <h3 className="mt-4 px-8 w-screen text-l text-center font-bold">{element.header3}</h3>;
                break;
            case "paragraph":
                newElement = <p className="mt-2 px-8 w-screen px-12">{element.paragraph}</p>;
                break;
            case "image":
                newElement = <img className="mt-8 mx-auto w-2/3 border-double border-gray-500 border-4" src={element.image} alt={element.alt} />;
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

        newElement = <div className="w-full" key={i}>{newElement}</div>;

        contentElements.push(newElement);
    }

    return (
        <section className="w-screen flex flex-column flex-wrap items-center pb-12">
            {contentElements}
        </section>
    )
}
export default MobileElement