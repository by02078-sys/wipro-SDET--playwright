function logLength(item: string | any[]): void {
    // Both string and array have a .length property
    console.log("Length is: " + item.length);
}

logLength("Krishna"); // Works: Length is 7
logLength([1, 2, 3]); // Works: Length is 3

// logLength(10); 
