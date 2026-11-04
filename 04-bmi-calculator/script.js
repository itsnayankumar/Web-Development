const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

calculate.addEventListener("click", function () {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);

  if (!weight || !height || weight < 0 || height < 0) {
    result.textContent = "Please enter valid numbers";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.textContent = `BMI: ${bmi.toFixed(1)} (${category})`;
});