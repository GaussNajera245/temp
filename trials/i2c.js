const i2c = require('i2c-bus');
 
const ADDR = 0x5a;
const TEMP_REG = 0x07;

const toCelsius = (t) => {
	return (t*0.02)-273.15;
};
 

 setInterval(()=>{
	const i2c1 = i2c.open(1, err => {
	  if (err) throw err;

	  i2c1.readWord(ADDR, TEMP_REG, (err, rawData) => {
	    if (err) throw err;
	 
	    console.log({raw:rawData,C:toCelsius(rawData),index:TEMP_REG.toString()});
	 
	    i2c1.close(err => {
	      if (err) throw err;
	    });
	  });
	});

 }, 100);


///64183