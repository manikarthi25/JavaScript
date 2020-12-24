var bioData = {
    name : "mani",
    mobileNumber: "xxxxxx",
    address : function() {
        console.log("india")
    }
}

console.log(bioData);
console.log(bioData.name);
console.log(bioData['name']);
bioData.address();