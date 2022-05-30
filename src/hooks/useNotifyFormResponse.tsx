import { errorMessages } from "@/constants";
import { useUI } from "@/contexts/ui-context";

interface ResponseProps {
  status: boolean;
  errors?: { key: string; value: string }[];
}

export const useNotifyFormResponse = () => {
  const { openNotify, setNotifyView } = useUI();

  return (response: ResponseProps) => {
    if (response) {
      // errors on server
      if (response.status) {
        setNotifyView("FORM_SEND_SUCCESS");
        openNotify();
        return true;
      } else {
        // each errors
        if (response.errors?.length) {
          setNotifyView(
            "FORM_SEND_ERROR",
            response.errors.map((error, index: number) => {
              const [key, value] = Object.entries(error)[0];
              return <div key={index}>{`${key}: ${value}`}</div>;
            })
          );
          openNotify();
        } else {
          setNotifyView("FORM_SEND_ERROR", errorMessages.sendingError);
          openNotify();
        }
        return false;
      }
    } else {
      setNotifyView("FORM_SEND_ERROR", errorMessages.sendingError);
      openNotify();
      return false;
    }
  };
};
