const fs = require('fs');

// Load the JSON file
const json = JSON.parse(fs.readFileSync('Json.json', 'utf8'));

let roots = [];
const n = parseInt(json.keys.n);

// Keys in the JSON file are strings "1", "2", ..., "10"
for (let i = 1; i <= n; i++) {
    let key = i.toString();
    if (!json[key]) {
        console.error("Missing key:", key);
        continue;
    }
    let base = parseInt(json[key].base);
    let value = json[key].value;
    // Use BigInt to handle very large numbers
    let root = BigInt(parseInt(value, base));
    roots.push(root);
}

// Calculate product with BigInt
let C = BigInt(1);
roots.forEach(root => {
    C *= root;
});

console.log("Decoded roots:", roots.map(r=>r.toString()));
console.log("Correct value for C:", C.toString());


