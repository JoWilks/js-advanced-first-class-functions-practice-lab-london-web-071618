// Code your solution in this file!

const logDriverNames = collection => {
  collection.forEach(function(el) {
    console.log(el.name)
  })
};

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
    console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let sortable = [];
  for (var key in drivers)
    if(drivers.hasOwnProperty(key))
      sortable.push([key, obj[key]]);
  sortable.sort(function(a, b){
    return a[1]-b[1];
  })
  return sortable
  }