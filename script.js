//your JS code here. If required.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const button = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
  const text = textInput.value;
  const time = Number(delayInput.value);

	
  output.textContent = "";
	
  await delay(time);
	
  output.textContent = text;
});
