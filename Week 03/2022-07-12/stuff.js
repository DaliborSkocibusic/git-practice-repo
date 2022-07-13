function digitize(n) {
    let forarr = [];
    let revarr = [];

    if (n == 0) {
        return [0];
    }

    forarr.push(parseInt(n / 10000));
    n = n - parseInt(n / 10000) * 10000;

    console.log(n + "\t" + forarr);

    forarr.push(parseInt(n / 1000));
    n = n - parseInt(n / 1000) * 1000;

    console.log(n + "\t" + forarr);

    forarr.push(parseInt(n / 100));
    n = n - parseInt(n / 100) * 100;

    console.log(n + "\t" + forarr);

    forarr.push(parseInt(n / 10));
    n = n - parseInt(n / 10) * 10;

    console.log(n + "\t" + forarr);


    forarr.push(parseInt(n / 1));
    n = n - parseInt(n / 1);

    console.log(n + "\t" + forarr);

    let looplen = forarr.length;
    for (let i = 0; i < looplen; i++) {
        revarr.push(forarr.pop());
    }

    return revarr;
}

console.log(digitize(55332));
