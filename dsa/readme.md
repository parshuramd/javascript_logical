# Big O Notation 📊

Big O notation is a way to measure the efficiency of an algorithm, especially how its runtime or space requirements grow as the input size increases. Understanding Big O helps you write scalable and optimized code!

---

## 🚀 **Why Big O Notation Matters**

- **Predict Performance:** Helps you understand how algorithms scale with larger inputs.
- **Compare Algorithms:** Lets you choose the most efficient solution for a given problem.
- **Identify Bottlenecks:** Pinpoints areas of your code that might slow down as data grows.

---

## 📈 **Common Time Complexities**

- **O(1) — Constant Time:** Always takes the same amount of time, no matter the input size.

    ```python
    def get_first_element(arr):
        return arr[0]
    ```

- **O(log n) — Logarithmic Time:** Time grows slowly as input size increases (e.g., binary search).

    ```python
    def binary_search(arr, target):
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1
    ```

- **O(n) — Linear Time:** Time grows directly with the size of the input.

    ```python
    def print_all_elements(arr):
        for element in arr:
            print(element)
    ```

- **O(n²) — Quadratic Time:** Time grows proportionally to the square of the input size (e.g., nested loops).

    ```python
    def print_pairs(arr):
        for i in range(len(arr)):
            for j in range(len(arr)):
                print(arr[i], arr[j])
    ```

- **O(2^n) — Exponential Time:** Time doubles with each additional element (e.g., recursive Fibonacci).

    ```python
    def fibonacci(n):
        if n <= 1:
            return n
        return fibonacci(n - 1) + fibonacci(n - 2)
    ```

---

## 🛠 **Space Complexity**

Big O notation can also describe how much memory an algorithm needs relative to input size. For example, recursive algorithms may require additional space for each recursive call.

---

## 🎯 **Quick Rules of Thumb**

- **Drop constants:** `O(2n)` → `O(n)`
- **Drop non-dominant terms:** `O(n² + n)` → `O(n²)`
- **Loops:** Typically contribute `O(n)` or more depending on nesting.
- **Dividing the problem:** Often leads to `O(log n)`.

---

## 📘 **Further Learning**

- [Big O Cheatsheet](https://www.bigocheatsheet.com)
- [Visualization of Complexities](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)


---


