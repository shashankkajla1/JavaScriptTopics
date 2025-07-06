const parseDate = (str) => {
    const [day, month, year] = str.split('.').map(Number);
    return new Date(year, month - 1, day); // Month is 0-indexed
};


const x= parseDate("4.05.2025");
console.log(x);

const today = new Date();
console.log(today.setHours(0, 0, 0, 0));

