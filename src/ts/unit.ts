export const unit = () => {
  let mainUnit = "C";
  const Unit_C = document.querySelector("#Unit_C") as HTMLButtonElement;
  const Unit_F = document.querySelector("#Unit_F") as HTMLButtonElement;

  Unit_C.addEventListener("click", () => {
    mainUnit = "C";
    Unit_C.classList.remove("text-green-600");
    Unit_C.classList.add("bg-green-600", "text-white");
    Unit_F.classList.remove("bg-green-600", "text-white");
    Unit_F.classList.add("text-green-600");
  });

  Unit_F.addEventListener("click", () => {
    mainUnit = "F";
    Unit_F.classList.remove("text-green-600");
    Unit_F.classList.add("bg-green-600", "text-white");
    Unit_C.classList.remove("bg-green-600", "text-white");
    Unit_C.classList.add("text-green-600");
  });
  return mainUnit;
};
