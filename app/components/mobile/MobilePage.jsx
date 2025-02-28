import MobileElement from './UI/MobileElement'
import { useContentContext } from "../context/ContentContext";

const MobilePage = () => {
    const { content } = useContentContext();

    return (
        <div className="flex flex-column flex-wrap w-screen justify-center items-center">
            {
                content.sections.map((_, index) => (
                    <MobileElement key={index} index={index}/>
                ))
            }
        </div>
    )
}

export default MobilePage