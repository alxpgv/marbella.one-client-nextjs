export interface FormResponse {
  status: boolean;
  errors?: { key: string; value: string }[];
}

const fetchForm = async (
  url: string,
  body: any
): Promise<FormResponse | null> => {
  const fetchUrl = `${process.env.SEND_FORM_URL}${url}`;
  try {
    return await fetch(fetchUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  } catch (error) {
    console.error(`Could not fetch form: ${error}`);
    return null;
  }
};

export const sendFeedback = (body: any) => {
  return fetchForm("/feedback.php", body);
};
