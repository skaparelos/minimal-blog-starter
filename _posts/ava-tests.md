---
title: "Ava tests"
excerpt: "In the context of Ava, a test runner for Node.js designed to run tests concurrently by default, `test.serial` is a method used to specify that certain tests should be run serially"
date: "2024-03-10"
---
In the context of Ava, a test runner for Node.js designed to run tests concurrently by default, `test.serial` is a method used to specify that certain tests should be run serially, one after the other, rather than concurrently. This is useful in situations where tests need to be run in a specific order or when tests cannot be run at the same time because they share state that might interfere with each other.

By default, Ava runs tests in parallel in separate processes, which is great for performance and isolating tests from each other. However, there are cases where tests need to access or modify shared resources, like a database or filesystem, where running tests concurrently could lead to unpredictable results due to race conditions. In such scenarios, you would use `test.serial` to define tests that should not be run in parallel with any other tests.

## Example

Here's a basic example of how you might use `test.serial` in Ava:

```javascript
const test = require('ava');

// This test will run concurrently with other tests
test('concurrent test 1', async t => {
    // Test implementation
});

// This test will run serially, one after the other
test.serial('serial test 1', async t => {
    // Test implementation
});

// Another serial test
test.serial('serial test 2', async t => {
    // Test implementation, guaranteed to run after 'serial test 1'
});

// This test will run concurrently with other tests
test('concurrent test 2', async t => {
    // Test implementation
});
```

In this example, "serial test 1" and "serial test 2" are guaranteed to run in the order they are defined and not concurrently with any other tests. "Concurrent test 1" and "Concurrent test 2", however, will run concurrently with each other and with any other tests not defined with `test.serial`.

## Conclusion

Using `test.serial` helps ensure that when you have tests that need to run in a specific sequence or cannot safely run in parallel, you can control their execution order while still benefiting from Ava's default behavior of running other tests concurrently for faster test suite execution.