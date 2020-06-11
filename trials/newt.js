const i2c = require('i2c-bus');
 
const ADDR = 0x5a;
const TEMP_REG = 0x07;

const toCelsius = (t) => {
	return (t*0.02)-273.15;
};
 

 setInterval(()=>{

	const i2c1 = i2c.openSync(1);
	const rawData = i2c1.readWordSync(ADDR, TEMP_REG);
	console.log(toCelsius(rawData));
	i2c1.closeSync();

 }, 255);
