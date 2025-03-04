export const changeUnit = () => {
  const unit_C = document.querySelector("#unit_C") as HTMLButtonElement;
  const unit_F = document.querySelector("#unit_F") as HTMLButtonElement;

  unit_C.addEventListener("click", () => {
    unit_C.classList.remove("text-green-600");
    unit_C.classList.add("bg-green-600", "text-white");
    unit_F.classList.remove("bg-green-600", "text-white");
    unit_F.classList.add("text-green-600");
  });

  unit_F.addEventListener("click", () => {
    unit_F.classList.remove("text-green-600");
    unit_F.classList.add("bg-green-600", "text-white");
    unit_C.classList.remove("bg-green-600", "text-white");
    unit_C.classList.add("text-green-600");
  });
};
