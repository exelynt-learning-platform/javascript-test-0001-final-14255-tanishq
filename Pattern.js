let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {

    let row = "";

    // spaces before star
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // first star
    row += "*";

    // spaces inside diamond
    if (i > 1) {
        for (let j = 1; j <= 2 * i - 3; j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {

    let row = "";

    // spaces before star
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // first star
    row += "*";

    // spaces inside
    if (i > 1) {
        for (let j = 1; j <= 2 * i - 3; j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}
