import React, {
  FC,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

interface UIState {
  displayModal: boolean;
  modalView: string;
}

export enum MODAL_VIEWS {
  "ONLINE_CONSULTATION" = "Online consultation",
  "CALLBACK" = "Callback",
  "SPECIALIST_CONSULTATION" = "Specialist consultation",
  "ORDER_YACHT" = "Order yacht",
  "EVALUATE_PROPERTY" = "Evaluate property",
  "SELL_PROPERTY" = "Sell property",
  "SUBSCRIBE" = "Subscribe now",
  "FORM_SEND_SUCCESS" = "Success sending",
  "FORM_SEND_ERROR" = "Error sending",
}

const initialState = {
  displayModal: false,
  modalView: Object.keys(MODAL_VIEWS)[0],
};

type Action =
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MODAL" }
  | { type: "SET_MODAL_VIEW"; view: keyof typeof MODAL_VIEWS };

const UIContext = createContext<UIState | any>(initialState);
UIContext.displayName = "UIContext";

const uiReducer = (state: UIState, action: Action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, displayModal: true };
    case "CLOSE_MODAL":
      return { ...state, displayModal: false };
    case "SET_MODAL_VIEW":
      return { ...state, modalView: action.view };
  }
};

export const UIProvider: FC = ({ children }, props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openModal = useCallback(
    () => dispatch({ type: "OPEN_MODAL" }),
    [dispatch]
  );
  const closeModal = useCallback(
    () => dispatch({ type: "CLOSE_MODAL" }),
    [dispatch]
  );
  const setModalView = useCallback(
    (view: keyof typeof MODAL_VIEWS) =>
      dispatch({ type: "SET_MODAL_VIEW", view }),
    [dispatch]
  );

  const value = useMemo(
    () => ({ ...state, openModal, closeModal, setModalView }),
    [state]
  );

  return (
    <UIContext.Provider value={value} {...props}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
