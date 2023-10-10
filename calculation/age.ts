const CalculateAge =  (date: number , month : number , year : number, setAge : Function) => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const digitPlace = 2;
  const data = new Date();
  const birthDate = new Date(
    `${monthName[month - 1]} ${date}, ${data.getFullYear()}`
  );
  const birthdayPassed = data > birthDate;
  const currentYear = data.getFullYear();

  const ageX = birthdayPassed ? currentYear - year : currentYear - year - 1;
  //calculation of month
  const currentMonth = data.getMonth() + 1;
  var calculatedMonth =
    currentMonth > month
      ? ((currentMonth - month) / 12).toFixed(digitPlace)
      : ((currentMonth + (12 - month)) / 12).toFixed(digitPlace);
  if (calculatedMonth == "1.00") {
    calculatedMonth =
      data.getDate() >= date
        ? (Number(calculatedMonth) % 1).toString()
        : "0.99";
  }
  //calculation of date
  const currentDate = data.getDate();
  const calculatedDate =
    currentDate > date
      ? ((currentDate - date) / 30).toFixed(digitPlace)
      : ((30 - (date - currentDate)) / 30).toFixed(digitPlace);

  //calculation of time
  const calculatedHour = (data.getHours() / 24).toFixed(digitPlace);
  const calculatedMinute = (data.getMinutes() / 60).toFixed(digitPlace);
  const calculatedSecond = (data.getSeconds() / 60).toFixed(digitPlace);

  const x = (
    ageX +
    Number(calculatedMonth) +
    Number(calculatedDate) / 100 +
    Number(calculatedHour) / 10000 +
    Number(calculatedMinute) / 1000000 +
    Number(calculatedSecond) / 100000000
  ).toFixed(10);
  setAge(x);
};

export default CalculateAge;
