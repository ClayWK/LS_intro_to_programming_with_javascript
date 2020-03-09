if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// => 'No...' because the and operator (&&) requires that both elements evaluate as truthy,
// and false is a falsy value in javascript.  