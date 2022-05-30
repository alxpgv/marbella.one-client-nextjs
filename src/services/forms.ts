export interface FormResponse {
  status: boolean;
  errors?: { key: string; value: string }[];
}

export const sendFeedback = async (body: any): Promise<FormResponse | null> => {
  const fetchUrl = `${process.env.SEND_FORM_URL}/feedback.php`;
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
    console.error(`Could not fetch feedback: ${error}`);
    return null;
  }
};
