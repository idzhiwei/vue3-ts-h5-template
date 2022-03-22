export const useStringToArray = (text: any) => {
  try {
    if (Array.isArray(text)) {
      return text;
    } else {
      return text.split(",");
    }
  } catch (e) {
    return [];
  }
};

export const useStringParseArray = (text: string) => {
  try {
    return JSON.parse(text);
  } catch (e) {
    return [];
  }
};

