import { act, useReducer } from "react";
import ContentContext from "./ContentContext";
import importedContent from "../../../data/content.json";

const initialState = {
    activeTab: 0,
    sections: importedContent
}

function contentReducer(state, action) {
    switch (action.type) {
        case "switchTab":
            if (action.payload < 0 || action.payload >= state.sections.length) {
                throw new Error("Invalid tab index: " + action.payload);
            }
            return { ...state, activeTab: action.payload };
        default:
            throw new Error("Unknown action type: " + action.type);
  }
}

const ContentProvider = ({ children }) => {
  const [content, dispatch] = useReducer(contentReducer, initialState);

  return (
    <ContentContext.Provider value={{ content, dispatch }}>
      {children}
    </ContentContext.Provider>
  )
};

export default ContentProvider;