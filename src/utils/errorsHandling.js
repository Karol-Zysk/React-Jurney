export const emptyInputAlert = (setErrorMessage) => {
  setErrorMessage("No Empty Inputs !");
  setTimeout(() => {
    setErrorMessage("");
  }, 3500);
  clearTimeout();
};

export const incorrectInputAlert = (setErrorMessage) => {
  setErrorMessage("Not to long jurney?");

  setTimeout(() => {
    setErrorMessage("");
  }, 3500);
  clearTimeout();
};

export const ErrorAlert = (error, setErrorMessage) => {
  if (error === "NOT_FOUND") {
    setErrorMessage("Incorrect Value !");
  } else if (error === "ZERO_RESULTS") {
    setErrorMessage("Your Car can't fly!");
  } else if (error === "MAX_ROUTE_LENGTH_EXCEEDED") {
    setErrorMessage("Too Long Jurney !");
  } else {
    setErrorMessage("Something Went wrong !");
  }
  setTimeout(() => {
    setErrorMessage("");
  }, 3500);
  clearTimeout();
};
