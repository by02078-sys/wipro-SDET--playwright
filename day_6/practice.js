//problem1 
const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

function cleanFlightData(flights) {
  const processed = flights
    .map(flightStr => {
      const [cities, rawPrice] = flightStr.split(":");
      const [from, to] = cities.split("-");
      let price = Number(rawPrice);
      
      if (isNaN(price)) {
        price = 0;
      }

      return { from, to, price };
    })
    .filter(flight => flight.price >= 100 && flight.price <= 500)
    .sort((a, b) => a.price - b.price);

  return JSON.stringify(processed);
}

const result = cleanFlightData(rawFlights);
console.log(result);


//problem 2
const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

const checkEligibility = (product) => {
  return product.category === "Electronics" && product.price > 200;
};

function applyPromo(cartArray, promoCallback) {
  let discountedCount = 0;
  let totalSavings = 0;

  const updatedCart = cartArray.map(item => {
    const isEligible = promoCallback(item);

    if (isEligible) {
      const discountAmount = item.price * 0.10;
      discountedCount++;
      totalSavings += discountAmount;

      return {
        ...item,
        price: item.price - discountAmount,
        isDiscounted: true
      };
    }

    return {
      ...item,
      isDiscounted: false
    };
  });

  console.log(`Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSavings}.`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedCart);
    }, 1000);
  });
}

applyPromo(cart, checkEligibility).then(updatedCart => {
  console.log(updatedCart);
});

//problem 3

const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];

function analyzeMovies(movieData) {
  const processedMovies = movieData
    .map(movieStr => {
      const parts = movieStr.split("|").map(part => part.trim());
      const [name, genre, rawViews] = parts;
      
      let views = Number(rawViews);
      
      if (isNaN(views)) {
        views = 0;
      }

      return { name, genre, views };
    })
    .filter(movie => {
      return (movie.genre === "Action" || movie.genre === "Sci-Fi") && movie.views > 5000;
    })
    .sort((a, b) => b.views - a.views);

  return JSON.stringify(processedMovies);
}

const a = analyzeMovies(rawMovies);
console.log(a);

//problem 4
const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

const taxLogic = (salary) => {
  return salary > 5000 ? 0.20 : 0.10;
};

function calculatePayroll(employeeArray, taxCallback) {
  let totalNetPayout = 0;

  const processedEmployees = employeeArray.map(emp => {
    const taxRate = taxCallback(emp.salary);
    const taxAmount = emp.salary * taxRate;
    const netSalary = emp.salary - taxAmount;

    totalNetPayout += netSalary;

    const status = netSalary > 4000 ? "Premium" : "Standard";

    return {
      ...emp,
      netSalary: netSalary,
      status: status
    };
  });

  console.log(`Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employeeArray.length} employees.`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(processedEmployees);
    }, 2000);
  });
}

calculatePayroll(employees, taxLogic).then(result => {
  console.log("Final Payroll Data:", result);
});