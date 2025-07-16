const select = document.querySelector(".select");
const optionsList = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

select.addEventListener("click", () => {
  optionsList.classList.toggle("active");
  select.classList.toggle("active");
  select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => option.classList.remove("selected"));
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");

    optionsList.classList.toggle("active");
    select.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});