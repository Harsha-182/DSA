# Imagine You Have a Few Boxes to Arrange 📦📦📦📦
You have some boxes, and you want to arrange them in the best way to save time. But here, instead of arranging boxes, we are multiplying matrices in the best way to save calculations.

## What is Matrix Chain Multiplication?
👉 Imagine you have some matrices (think of them as groups of numbers), and you want to multiply them together.
👉 The order in which you multiply them changes the total work you need to do!
👉 Our goal is to find the best order to do the multiplication with the least effort.

## Example: Multiplying 3 Numbers in Different Ways
Let’s say you have three numbers: **2, 3, and 4**.
You can multiply them in two ways:

### 1️⃣ (2 × 3) × 4 = 6 × 4 = 24
Here, we did one multiplication first (2 × 3 = 6), then multiplied the result with 4.

Total multiplications = **2** (because 1 multiplication for 2×3 and 1 for 6×4).

### 2️⃣ 2 × (3 × 4) = 2 × 12 = 24
Here, we first did (3 × 4 = 12) and then multiplied by 2.

Total multiplications = **2** again.

Now, imagine if we had **10 numbers instead of 3**! 😵 The number of ways to do the multiplication would increase **A LOT**.

## How Does It Work with Matrices?
Each matrix has a size (rows and columns), and multiplying them takes time based on their size.

Suppose you have **3 matrices**:

- **A1** (10 × 20)
- **A2** (20 × 30)
- **A3** (30 × 40)

### 👉 Multiplying (A1 × A2) first, then A3:

- **A1 × A2** → (10×20) × (20×30) → Takes **10×20×30 = 6000** multiplications
- **Then result × A3** → (10×30) × (30×40) → Takes **10×30×40 = 12000** multiplications

**Total = 6000 + 12000 = 18000**

### 👉 Multiplying (A2 × A3) first, then A1:

- **A2 × A3** → (20×30) × (30×40) → Takes **20×30×40 = 24000** multiplications
- **Then A1 × result** → (10×20) × (20×40) → Takes **10×20×40 = 8000** multiplications

**Total = 24000 + 8000 = 32000**

🛑 The **first method is better** because it only takes **18000 multiplications instead of 32000**!

## How Do We Solve This?
We try all possible ways of multiplying matrices and find the one that takes the least calculations.
This is done using a **smart way (Dynamic Programming)** so that we don’t repeat the same calculations multiple times.

