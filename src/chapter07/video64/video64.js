console.log("video 64")

const doSomething = () => {
    const a = 10, b = 0;

    if (b === 0) {
        throw new Error("Thực hiện chia cho 0")
    }

    return a / b;
}

try {
    doSomething();
} catch (error) {
    console.log(error)
} finally {
    console.log("run final")
}