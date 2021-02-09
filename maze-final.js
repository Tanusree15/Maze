document.getElementById("dfs")
.addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp(); searchMazeWithDFS(outsetx, outsety, 30);
});

document.getElementById("gen-res")
.addEventListener('click', function () {
	setUp(); initialize();
	generateMaze(randint(generatex), randint(generatey));
	mazeGenerated = true; currMaze = JSON.stringify(maze);

	paintMaze(maze);
});

document.getElementById("dfs-res")
.addEventListener('click', function () {
	if (!mazeGenerated) return;
	setUp(); searchMazeWithDFS(outsetx, outsety, 0);
});


function setUp() {
	timeouts.forEach(function(t) {
		clearTimeout(t);
	});
	dumps = []; backTrack = true;
	if (mazeGenerated) maze = JSON.parse(currMaze);
}
