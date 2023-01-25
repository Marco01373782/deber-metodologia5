
let nums = [9, 6, 7, 7, 3]

let i = 0, j = 1;
let conta = nums.length

for (i; i < conta; i++) { 
    console.log(".......");
    j = i + 1;
    if (i < conta) {
        for (j; j < conta; j++) {
            console.log(nums[i], nums[j]);
        }
    }
}
