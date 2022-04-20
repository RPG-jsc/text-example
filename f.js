import fetch from 'node-fetch';

const response = await fetch('http://example.com');
const text = await response.text();

let content = text.slice(text.indexOf('<p>')+3, text.indexOf('</p>'));
console.log(content)

const resp = await fetch('http://ipapi.com')
const data = await resp.text()
let cont = data.slice(5348, 5362)
console.log(cont)

export {content, cont}