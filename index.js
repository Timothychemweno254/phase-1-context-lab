// 1. createEmployeeRecord
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

// 2. createEmployeeRecords
function createEmployeeRecords(employeeArrays) {
  return employeeArrays.map(createEmployeeRecord);
}

// 3. createTimeInEvent
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}

// 4. createTimeOutEvent
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}

// 5. hoursWorkedOnDate
function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(e => e.date === date);
  const timeOut = this.timeOutEvents.find(e => e.date === date);
  return (timeOut.hour - timeIn.hour);
}

// 6. wagesEarnedOnDate
function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

// 7. allWagesFor
function allWagesFor() {
  const allDates = this.timeInEvents.map(e => e.date);
  return allDates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
}

// 8. findEmployeeByFirstName
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

// 9. calculatePayroll
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}
