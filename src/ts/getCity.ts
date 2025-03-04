export const getCity = (): string => {
  const input = document.querySelector("input") as HTMLInputElement;
  const submitBtn = document.querySelector("#submit") as HTMLButtonElement;
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value !== "") {
      const city = input.value;
      input.value="";
      return city;
    } else {
      console.log("please enter a valid city");
      return "";
    }
  });
  return "";
};
