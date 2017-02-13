/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//Runtime beats 83.90% of javascript submissions.
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    if (m > n) return findMedianSortedArrays(nums2, nums1);
    let minidx = 0, maxidx = m, i, j, num1, mid = (m + n + 1) >> 1,num2;
    while (minidx <= maxidx) {
        i = (minidx + maxidx) >> 1;
        j = mid - i;
        if (i<m && j>0 && nums2[j-1] > nums1[i]) minidx = i + 1;
        else if (i>0 && j<n && nums2[j] < nums1[i-1]) maxidx = i - 1;
        else {
            if (i === 0) num1 = nums2[j-1];
            else if (j === 0) num1 = nums1[i - 1];
            else num1 = Math.max(nums1[i-1],nums2[j-1]);
            break;
        }
    }
    if (((m + n) & 1)) return num1;
    if (i == m) num2 = nums2[j];
    else if (j == n) num2 = nums1[i];
    else num2 = Math.min(nums1[i],nums2[j]);
    return (num1 + num2) / 2;
};
