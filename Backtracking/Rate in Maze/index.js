// Backtracking 

//Rat in a maze problem
//Given a maze, NxN matrix. A rat has to find a path from source to destination. maze[0][0] (left top corner)is the source and maze[N-1][N-1](right bottom corner) is destination. 
// There are few cells which are blocked, means rat cannot enter into those cells. Rat can move in any direction ( left, right, up and down).

const findPaths = (maze) => {
    let result = [];
    let path = [];
    let n = maze.length;
    let visited = Array(n).fill().map(() => Array(n).fill(false));

    function solveMaze(x, y) {
        if (x == n - 1 && y == n - 1) {
            result.push(path.join(''));
            return;
        }

        let moves = [
            { move: 'D', dx: 1, dy: 0 },
            { move: 'R', dx: 0, dy: 1 },
            { move: 'U', dx: -1, dy: 0 },
            { move: 'L', dx: 0, dy: -1 }
        ];

        visited[x][y] = true;

        for (let { move, dx, dy } of moves) {
            let newX = x + dx;
            let newY = y + dy;

            if (isSafe(newX, newY)) {
                path.push(move);
                solveMaze(newX, newY);
                path.pop();
            }
        }

        visited[x][y] = false;
    }

    function isSafe(x, y) {
        return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1 && !visited[x][y];
    }

    solveMaze(0, 0);
    return result;
};

// Example usage
let maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];

console.log(findPaths(maze));
