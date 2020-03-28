import _ from 'lodash';
import './style/index.css'; //loader => style-loader css-loader module 
import './style/a.scss';


function createDomElement() {
  var dom = document.createElement('div');
  dom.innerHTML = _.join(['王振鹏', '的第一个项目', 'Hello,Word'], '');
  dom.classList.add('box');
  return dom;
}
let divDom = createDomElement();

document.body.appendChild(divDom);