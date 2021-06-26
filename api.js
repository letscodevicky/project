
fetch('https://api.covid19india.org/v4/min/data.min.json').then((apidata)=>{
	console.log(apidata);
	return apidata.json();
})
.then((actualdata) => {
	console.log(actualdata);
})
.catch((error)=>{
console.log(error);
});
