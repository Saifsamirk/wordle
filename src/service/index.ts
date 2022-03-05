import AxiosInstance from "../axios";

// Create a function that fetches all user from the backend
export async function searchWords(word: string) {
  return new Promise((resolve, reject) => {
    AxiosInstance.get(
      `/${word.toLowerCase()}/definitions?includeRelated=false&useCanonical=false&includeTags=false&api_key=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
