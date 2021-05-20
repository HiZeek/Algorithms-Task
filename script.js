// TASK 1

function convertFahrToCelsius(val) {
    if (isNaN(val)) {
        if (val instanceof Array) {
            return `${val} is not a valid number but a/an Array`;
        } else if (val instanceof Object) {
            return `${JSON.stringify(
                val
            )} is not a valid number but a/an ${typeof val}`;
        }
        return `${string(val)} is not a valid number but a/an ${typeof val}`;
    }
    return ((val - 32) * (5 / 9)).toFixed(4);
}

console.log(convertFahrToCelsius({ temp: 0 }));

// TASK 2

function checkYuGiOh(numb) {
    if (isNaN(numb)) {
        return `invalid parameter: "${numb}"`;
    }
    const numbArray = [];

    for (i = 1; i <= numb; i++) {
        let num = "";
        if (i % 2 == 0) {
            num = "yu";
        }
        if (i % 3 == 0) {
            if (num == "") {
                num = "gi";
            } else {
                num += "-gi";
            }
        }
        if (i % 5 == 0) {
            if (num == "") {
                num = "oh";
            } else {
                num += "-oh";
            }
        }

        if (num == "") {
            numbArray.push(i);
        } else {
            numbArray.push(num);
        }
    }
    return numbArray;
}

console.log(checkYuGiOh("fizzbuh"));