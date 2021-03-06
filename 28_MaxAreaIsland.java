// Given a non-empty 2D array grid of 0's and 1's,
// an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
// You may assume all four edges of the grid are surrounded by water.
//
// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
//
// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int rowSize = grid.length;
        int colSize = grid[0].length;
        int count = 0;
        int temp = 0;
        boolean[][] check = new boolean[rowSize][colSize];

        for (int i=0; rowSize>i; i++) {
            for (int j=0; colSize>j; j++) {
                if (grid[i][j] == 1 && check[i][j] == false) {
                    temp = search(grid, check, i, j);
                    if (temp > count)
                        count = temp;
                }
            }
        }
        return count;
    }
    public int search(int[][] grid, boolean[][] check, int x, int y) {
        int count = 1;
        check[x][y] = true;

        if(x-1 >= 0 && grid[x-1][y] == 1 && check[x-1][y] == false)
            count += search(grid, check, x-1, y);

        if(x+1 < grid.length && grid[x+1][y] == 1 && check[x+1][y] == false)
            count += search(grid, check, x+1, y);

        if(y-1 >= 0 && grid[x][y-1] == 1 && check[x][y-1] == false)
            count += search(grid, check, x, y-1);

        if(y+1 < grid[0].length && grid[x][y+1] == 1 && check[x][y+1] == false)
            count += search(grid, check, x, y+1);

        return count;
    }
}
