/*
 * Version: 1.0.0
 * Author: Pavan kalyan
 * Date: June 22, 2023
 * Description: This file contains JavaScript code for generating a random string of length n.
 */
exports.run = async function (options) {
    if (isNaN(options.length) || options.length <= 0) {
        throw new Error('Length should be a positive number.');
    };
    const n = parseInt(options.length);
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < n; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
}