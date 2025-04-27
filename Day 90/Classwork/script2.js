n = Number(prompt('Type a number in the box:'))
sum = 0

for (let i = 1; i <= n; i += 2) {
    sum += i
}

console.log(sum)