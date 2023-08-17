const getInputFromInputField = (fieldId) => {
  const inputField = document.getElementById(fieldId);
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

const getInputFromTagField = (fieldId) => {
  const inputTag = document.getElementById(fieldId);
  const inputText = inputTag.innerText;
  return inputText;
};

const setNewAmout = (fieldId, currentAmout) => {
  const element = document.getElementById(fieldId);
  element.innerText = currentAmout;
};
