import jj = require("./cloud-snow-alt-svgrepo-com.svg");

export const createPara = () => {
  const para = document.createElement("p");
  para.textContent = "Hello World";
  para.classList.add(
    "text-red-600",
    "font-bold",
    "text-4xl",
    "dark:text-amber-400"
  );
  document.body.appendChild(para);
  const img = document.createElement("img");
  img.src = String(jj);
  img.classList.add("h-10", "w-10");
  document.body.appendChild(img);
};
