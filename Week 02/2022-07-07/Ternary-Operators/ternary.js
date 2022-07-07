// Common way

let result = 0;

if (apple) {
    result = 20;
} else {
    result = 10;
}

// Can be written as
result = apple ? 20 : 10;

// Result is 20 if apply is truthy, else 10 otherwise
// Less error prone, less code duplication
