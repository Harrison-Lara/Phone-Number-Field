import { useState } from "react";

import "./App.css";

const formatter = (areaCode, firstThreeDigits, lastFourDigits) => {
  if (!areaCode) {
    return "";
  }

  if (areaCode && firstThreeDigits && lastFourDigits) {
    return `(${areaCode}) ${firstThreeDigits}-${lastFourDigits}`;
  } else if (areaCode && firstThreeDigits) {
    return `(${areaCode}) ${firstThreeDigits}`;
  } else {
    return `(${areaCode}`;
  }
};

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formattedPhoneValue = (value) => {
    const parsedPhoneNumber = value.replace(/\D/g, "");

    // phone number sections
    const areaCode = parsedPhoneNumber.substring(0, 3);
    const firstThreeDigits = parsedPhoneNumber.substring(3, 6);
    const lastFourDigits = parsedPhoneNumber.substring(6, 10);

    setPhoneNumber(formatter(areaCode, firstThreeDigits, lastFourDigits));
  };

  return (
    <main className="App">
      <input
        id="phoneNumberInput"
        type="tel"
        placeholder="(555) 555-5555"
        onChange={(event) => formattedPhoneValue(event.target.value)}
        value={phoneNumber}
      />

      <p>{phoneNumber}</p>
    </main>
  );
};

export default App;
