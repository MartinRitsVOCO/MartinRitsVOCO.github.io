import { createContext, useContext } from "react";

const ContentContext = createContext();

export default ContentContext;

export const useContentContext = () => useContext(ContentContext);