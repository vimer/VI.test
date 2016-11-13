/*
 *Promise.resolve(1).then(x => {
 *    console.log(x);
 *    return x+1
 *}).then(y => {
 *    console.log(y);
 *    return Promise.resolve(y+1);
 *}).then(z => {
 *    console.log(z);
 *    return Promise.reject('wrong');
 *}).then(n => {
 *    console.log(n);
 *})
 *.catch(e => {
 *    console.log(e)
 *})
 */


//callback和Promise的转化
/*
 *const promisefy = (nodefn) => (...args) => 
 *new Promise((resolve, reject) => {
 *    nodefn(...args, function(err, res) {
 *        if (err) {
 *            return reject(err)
 *        }
 *        resolve(res)
 *    })
 *})
 *const fs = require('fs');
 *const readFile = promisefy(fs.readFile);
 *readFile("./async.js", 'utf8').then(content => {
 *    return 'hello' + content;
 *}).then(helloContent => {
 *    console.log(helloContent)
 *}).catch(err => {
 *    console.log(err.message)
 *})
 */

/*
 *var fetch = require('node-fetch')
 *fetch('http://baidu.com')
 *.then(res => res.text())
 *.then(text => {
 *    console.log(text);
 *}).catch(err => {
 *    console.log(err);
 *})
 */

//Promise.all
/*
 *Promise.all([Promise.resolve(1), Promise.resolve(2)])
 *.then(results => console.log(results))
 *
 *Promise.all([Promise.resolve(1), Promise.reject('wrong')])
 *.then(results => console.log(results))
 *.catch(err => console.log(err))
 */

/*
 *function delay(ms, value) {
 *    return new Promise((resolve, reject) => {
 *        setTimeout(() => resolve(value), ms)
 *    })
 *}
 *
 *Promise.race([delay(10, 'tom'), delay(20, 'jack')])
 *.then(result => console.log('results', result))
 */
