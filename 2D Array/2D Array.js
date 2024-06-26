// 2D array = useful for games, spreadsheet or representing images
const matrix = [[1,2,3],[4,5,6],[7,8,9]];

matrix[0][0]='x';
matrix[0][1]='p';


for(let row of matrix){
    const rowstring = row.join(' ');
    console.log(rowstring);
}
