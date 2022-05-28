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
  displayNotify: boolean;
  notifyView: string;
  openModal: () => void;
  closeModal: () => void;
  setModalView: (view: keyof typeof MODAL_VIEWS) => void;
  openNotify: () => void;
  closeNotify: () => void;
  setNotifyView: (view: keyof typeof NOTIFY_VIEWS) => void;
}

export enum MODAL_VIEWS {
  "ONLINE_CONSULTATION" = "Online consultation",
  "CALLBACK" = "Callback",
  "SPECIALIST_CONSULTATION" = "Specialist consultation",
  "ORDER_YACHT" = "Order yacht",
  "EVALUATE_PROPERTY" = "Evaluate property",
  "SELL_PROPERTY" = "Sell property",
  "SUBSCRIBE" = "Subscribe now",
  "ORDER_JET" = "Order Private jet charter!",
}

export enum NOTIFY_VIEWS {
  "FORM_SEND_SUCCESS" = "Success sending",
  "FORM_SEND_ERROR" = "Error sending",
}

const initialState = {
  displayModal: false,
  modalView: Object.keys(MODAL_VIEWS)[0],
  displayNotify: false,
  notifyView: Object.keys(NOTIFY_VIEWS)[0],
  openModal: () => null,
  closeModal: () => null,
  setModalView: () => null,
  openNotify: () => null,
  closeNotify: () => null,
  setNotifyView: () => null,
};

type Action =
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MODAL" }
  | { type: "SET_MODAL_VIEW"; view: keyof typeof MODAL_VIEWS }
  | { type: "OPEN_NOTIFY" }
  | { type: "CLOSE_NOTIFY" }
  | { type: "SET_NOTIFY_VIEW"; view: keyof typeof NOTIFY_VIEWS };

const UIContext = createContext<UIState>(initialState);
UIContext.displayName = "UIContext";

const uiReducer = (state: UIState, action: Action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, displayModal: true };
    case "CLOSE_MODAL":
      return { ...state, displayModal: false };
    case "SET_MODAL_VIEW":
      return { ...state, modalView: action.view };
    case "OPEN_NOTIFY":
      return { ...state, displayNotify: true };
    case "CLOSE_NOTIFY":
      return { ...state, displayNotify: false };
    case "SET_NOTIFY_VIEW":
      return { ...state, notifyView: action.view };
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

  const openNotify = useCallback(
    () => dispatch({ type: "OPEN_NOTIFY" }),
    [dispatch]
  );
  const closeNotify = useCallback(
    () => dispatch({ type: "CLOSE_NOTIFY" }),
    [dispatch]
  );
  const setNotifyView = useCallback(
    (view: keyof typeof NOTIFY_VIEWS) =>
      dispatch({ type: "SET_NOTIFY_VIEW", view }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
      openNotify,
      closeNotify,
      setNotifyView,
    }),
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
