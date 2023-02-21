/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * 方法1:暴力破解法
   */
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * 方法2:map
   */
  const myMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let temp = myMap.get(target - nums[i])
    if (temp !== undefined) {
      return [temp, i]
    } else {
      myMap.set(nums[i], i)
    }
  }
}
