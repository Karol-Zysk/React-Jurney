export const storeRoutes = (originRef, destinationRef) => {
  let storageArr = [];
  const object = {
    origin: `${originRef.current.value}`,
    destination: `${destinationRef.current.value}`,
  };

  storageArr.push(object, ...(JSON.parse(localStorage.getItem("route")) || []));

  window.localStorage.setItem("route", JSON.stringify(storageArr) || []);
};
