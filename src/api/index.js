import { db } from "../store";
import "whatwg-fetch";

export const submitForm = async (formData) => {
  return await db.collection("profiles").add(formData);
}

export const getSuggestions = async (query) => {

  return fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token 94d4eca28ab534bcea0d7a49130be80a0089db05'
    },
    body: JSON.stringify({query, count: 10})
  }).then(response => response.json());
}
