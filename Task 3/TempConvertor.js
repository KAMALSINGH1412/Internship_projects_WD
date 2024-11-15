function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitInput = document.getElementById("unitInput");
    const result = document.getElementById("result");
  
    const temperature = parseFloat(temperatureInput.value);
  
    if (isNaN(temperature)) {
      result.textContent = "Please enter a valid number";
      return;
    }
  
    let convertedTemperature;
    let convertedUnit;
  
    switch (unitInput.value) {
      case "celsius":
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
        break;
      case "fahrenheit":
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
        break;
      case "kelvin":
        if (temperature >= 0) {
          // Convert from Celsius to Kelvin
          convertedTemperature = temperature + 273.15;
          convertedUnit = "Kelvin";
        } else {
          // Convert from Fahrenheit to Kelvin
          convertedTemperature = (temperature + 459.67) * 5/9;
          convertedUnit = "Kelvin";
        }
        break;
    }
  
    result.textContent = `${temperature} ${unitInput.value} is ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
  }