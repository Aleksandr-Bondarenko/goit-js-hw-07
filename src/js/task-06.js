const inputEl = document.querySelector("#validation-input");

const onInputValidation = (event) => {
  const dataLength = Number(inputEl.getAttribute("data-length"));
  const inputValueLength = event.currentTarget.value.length;

  if (inputValueLength !== dataLength) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.replace("invalid", "valid");
  }
};

inputEl.addEventListener("blur", onInputValidation);
