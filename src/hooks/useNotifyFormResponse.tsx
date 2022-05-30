import { errorMessages } from "@/constants";
import { useUI } from "@/contexts/ui-context";
import { type FormResponse } from "@/services/forms";

export const useNotifyFormResponse = () => {
  const { openNotify, setNotifyView } = useUI();

  return (response: FormResponse | null) => {
    // errors on server
    if (response?.status) {
      setNotifyView("FORM_SEND_SUCCESS");
      openNotify();
      return true;
    }

    // each errors
    if (response?.errors?.length) {
      setNotifyView(
        "FORM_SEND_ERROR",
        response.errors.map((error, index: number) => {
          const [key, value] = Object.entries(error)[0];
          return <div key={index}>{`${key}: ${value}`}</div>;
        })
      );
      openNotify();
      return false;
    }

    setNotifyView("FORM_SEND_ERROR", errorMessages.sendingError);
    openNotify();
    return false;
  };
};
