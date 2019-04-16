module.exports = [{
  filename: 'demo.html',
  template: 'src/demo.ejs',
  inject: false,
  scriptSrc: "avionics.js"
},
{
  filename: 'demoKeys.html',
  template: 'src/demoKeys.ejs',
  inject: false,
  scriptSrc: "avionics.js"
},
{
  filename: 'SpecRunner.html',
  template: 'src/SpecRunner.ejs',
  inject: false,
  scriptSrc: "avionics.js"
}];
