function Validator({ dayRef, monthRef, yearRef, setAlert, alert, setValidatedData}) {
    let checked = true;
    let [day, month, year] = [
      dayRef.current.value,
      monthRef.current.value,
      yearRef.current.value
    ];
    let dateArray = [day, month, year];
    let regex = /^[0-9]+$/;
    let propertyNames = Object.getOwnPropertyNames(alert);
    dateArray.forEach((input, i) => {
      if (input === "") {
        setAlert((prev) => ({ ...prev, [propertyNames[i]]: "This field is required" }));
      } else if (!regex.test(input) || parseInt(input) <= 0) {
        setAlert((prev) => ({ ...prev, [propertyNames[i]]: `Must be a valid ${propertyNames[i]}`}));
        checked = false;
      } else {
        setAlert((prev) => ({ ...prev, [propertyNames[i]]: "" }));
      }
    });
    
    let currentDate = new Date();
    const maxDayNumber = new Date(year, month, 0).getDate();

    if (day > maxDayNumber) {
        setAlert((prev) => ({...prev, "day": "Must be a valid day"}))
        checked = false;
    }

    if (month > 12) {
        setAlert((prev)=> ({...prev, "month": "Must be a valid month"}))
        checked = false;
    }
    if (currentDate <= new Date(year, month, day)) {
        setAlert((prev)=> ({...prev, "year": "Must be in the past"}))
        checked = false;
    }
    if (year < 100) {
      year = parseInt(year) + 1900
  }
    if (checked) {
        setValidatedData({ day, month, year });
    }
  }
  
  export default Validator;
