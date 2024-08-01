import { useEffect, useState } from "react";

const API_URL =
  "https://v6.exchangerate-api.com/v6/71a7b4a5db5413acca92ceaf/latest/";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${API_URL}${currency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`);
        }
        return res.json();
      })
      .then((res) => {
        if (res.conversion_rates) {
          setData(res.conversion_rates);
        } else {
          throw new Error("Invalid response structure");
        }
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
