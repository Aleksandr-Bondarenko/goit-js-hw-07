const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

const onInputChanges = (event) => {
  if (event.currentTarget.value === "") {
    refs.outputEl.textContent = "незнакомец";
  } else {
    refs.outputEl.textContent = event.currentTarget.value;
  }
};

refs.inputEl.addEventListener("input", onInputChanges);
