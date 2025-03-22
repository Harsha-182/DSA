# Matrix Chain Multiplication (MCM)

Matrix Chain Multiplication is an optimization problem that determines the most efficient way to multiply a given sequence of matrices. The goal is to minimize the number of scalar multiplications.

## Problem Statement
Given **n** matrices \( A_1, A_2, ..., A_n \), where the dimensions are given in an array **p** of size **n+1** such that:

- \( A_1 \) has dimensions \( p[0] \times p[1] \)
- \( A_2 \) has dimensions \( p[1] \times p[2] \)
- \( A_n \) has dimensions \( p[n-1] \times p[n] \)

We need to find the **optimal parenthesization** that minimizes the number of scalar multiplications.

## Understanding Matrix Multiplication Cost
If we multiply two matrices:

- Matrix **A** with dimensions \( p \times q \)
- Matrix **B** with dimensions \( q \times r \)

The multiplication cost is:

\[ p \times q \times r \]

scalar multiplications.

# Define the matrices
matrix1 = [
    [1, 2],  # 2x2 matrix
    [3, 4]
]

matrix2 = [
    [5, 6, 7],  # 2x3 matrix
    [8, 9, 10]
]

Resultant matrix (2x3):
\[
\begin{bmatrix}
1 \cdot 5 + 2 \cdot 8 & 1 \cdot 6 + 2 \cdot 9 & 1 \cdot 7 + 2 \cdot 10 \\
3 \cdot 5 + 4 \cdot 8 & 3 \cdot 6 + 4 \cdot 9 & 3 \cdot 7 + 4 \cdot 10
\end{bmatrix}
=
\begin{bmatrix}
21 & 24 & 27 \\
47 & 54 & 61
\end{bmatrix}
\]

