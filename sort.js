function miniMaxSum(arr) {
    let ignore1 = arr[1]+arr[2]+arr[3]+arr[4]
    let ignore2 = arr[0]+arr[2]+arr[3]+arr[4]
    let ignore3 = arr[0]+arr[1]+arr[3]+arr[4]
    let ignore4 = arr[0]+arr[1]+arr[2]+arr[3]
    let ignore5 = arr[0]+arr[1]+arr[2]+arr[3]

    let sums = [ignore1, ignore2, ignore3, ignore4, ignore5]
    let sorted = sums.sort()
    console.log(`${sorted[0]}  ${sorted[4]}`);
}

miniMaxSum([1,15,3,23,4])
