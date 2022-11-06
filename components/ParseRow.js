export const ParseRow = (values, amount, images) => {
    let amountRow = [];

    switch (values) {
        case '1':
            while (amountRow.length < amount) {
                let randomNum = Math.ceil(Math.random() * (23 - 1) + 1);
                if (!amountRow.find((item) => item.value === String.fromCharCode(randomNum + 97).toUpperCase())) {
                    amountRow.push({
                        id: amountRow.length,
                        value: String.fromCharCode(randomNum + 97).toUpperCase(),
                        image: images[Math.floor(Math.random() * images.length)]
                    });
                }
            }
            break;
        case '2':
            while (amountRow.length < amount) {
                let randomNum = Math.ceil(Math.random() * (9 - 1) + 1);
                if (!amountRow.find((item) => item.value === randomNum)) {
                    amountRow.push({
                        id: amountRow.length,
                        value: randomNum,
                        image: images[Math.floor(Math.random() * images.length)]
                    });
                }
            }
            break;
        case '3':
            while (amountRow.length < amount) {
                let randomNum = Math.ceil(Math.random() * (19 - 1) + 1);
                if (!amountRow.find((item) => item.value === randomNum)) {
                    amountRow.push({
                        id: amountRow.length,
                        value: randomNum,
                        image: images[Math.floor(Math.random() * images.length)]
                    });
                }
            }
            break;
        case '4':
            while (amountRow.length < amount) {
                let randomNum = Math.ceil(Math.random() * (50 - 1) + 1);
                if (!amountRow.find((item) => item.value === randomNum)) {
                    amountRow.push({
                        id: amountRow.length,
                        value: randomNum,
                        image: images[Math.floor(Math.random() * images.length)]
                    });
                }
            }
            break;
        case '5':
            while (amountRow.length < amount) {
                let randomNum = Math.ceil(Math.random() * (99 - 1) + 1);
                if (!amountRow.find((item) => item.value === randomNum)) {
                    amountRow.push({
                        id: amountRow.length,
                        value: randomNum,
                        image: images[Math.floor(Math.random() * images.length)]
                    });
                }
            }
            break;
        case '6':
            while (amountRow.length < amount) {
                let randomNum = Math.ceil(Math.random() * (999 - 1) + 1);
                if (!amountRow.find((item) => item.value === randomNum)) {
                    amountRow.push({
                        id: amountRow.length,
                        value: randomNum,
                        image: images[Math.floor(Math.random() * images.length)]
                    });
                }
            }
            break;
    }

    return amountRow;
}