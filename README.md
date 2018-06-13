# My Environment

1. Windows 10 Pro 64-bit v1803
2. NodeJS v10.4.0
3. Gulp
   1. CLI v2.0.1
   2. Local v4.0.0
4. chokidar v2.0.3

# Tests

## Test 1: An array of a single and a glob of source files

### Scenario

1. check out branch `t1`
2. open a terminal in the project's root folder and run: `npx gulp`
3. repeat the following steps until you see in the output "Chokidar - Path unlink: index.js":
   1. change `index.js`
   2. save the file
4. after you see the "Path unlink" message repeat step (3) once more

### Actual Output

```
[...] Using gulpfile [...]/gulpfile.js
[...] Starting 'default'...
[...] Starting 'watch'...
Chokidar - Path add: index.js
Chokidar - Path add: a\1.js
Chokidar - Path change: index.js
Chokidar - Path unlink: index.js
```

In the above output the "Path unlink" message appears after the second change. You may need to repeat step (3) of the scenario more times before you see this message.

Also, notice that the message "Chokidar - Path change: index.js" did not appear, as we were expecting after executing step (4).

### Expected Output

```
[...] Using gulpfile [...]/gulpfile.js
[...] Starting 'default'...
[...] Starting 'watch'...
Chokidar - Path add: index.js
Chokidar - Path add: a\1.js
Chokidar - Path change: index.js
<Chokidar - Path unlink: index.js>
Gulp - Path index.js changed.
Chokidar - Path change: index.js
Gulp - Path index.js changed.
...
```

The message "\<Chokidar - Path unlink: index.js\>" indicates that you may see this "Path unlink" message or you may not. In any case, the watch process will continue after that and will not halt, as it happens in the actual output.

The last ellipsis (...) signifies that after every execution of step (3) you should see:

```
Chokidar - Path change: index.js
Gulp - Path index.js changed.
```

## Test 2: An array of a single source file

### Scenario

1. check out branch `t2`
2. execute steps (2) through (4) of "Test 1"

### Actual Output

```
[...] Using gulpfile [...]/gulpfile.js
[...] Starting 'default'...
[...] Starting 'watch'...
Chokidar - Path add: index.js
Gulp - Path index.js changed.
Chokidar - Path change: index.js
Chokidar - Path change: index.js
Gulp - Path index.js changed.
Chokidar - Path change: index.js
Gulp - Path index.js changed.
...
```

### Expected Output

In this case the actual output is the expected one.

## Test 3: An array of a glob of source files

### Scenario

1. check out branch `t3`
2. execute steps (2) through (4) of "Test 1", but this time change the `a/1.js` file

### Actual Output

```
[...] Using gulpfile [...]/gulpfile.js
[...] Starting 'default'...
[...] Starting 'watch'...
Chokidar - Path add: a\1.js
Gulp - Path a\1.js changed.
Chokidar - Path change: a\1.js
Chokidar - Path change: a\1.js
Gulp - Path a\1.js changed.
Gulp - Path a\1.js changed.
Chokidar - Path change: a\1.js
...
```

### Expected Output

Similar to "Test 2", in this case the actual output is the expected one.