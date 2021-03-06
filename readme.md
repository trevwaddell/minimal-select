

# Minimal Select

Minimal Select is a small, reusable select component for react.


## Installation


` $ npm install minimal-select`


## Usage

```
import Select from 'minimal-select' // ES6
```


| Prop | Description |
| ---|--- |
| onSelect | the method that is fired onChange |
| className | apply a css class to the select's parent div |
| options | the data that will build the options |
| valueProp | the value for each option |
| displayProp | the text that will display in each option | 


```
Select.defaultProps = {
  className: ""
};
Select.propTypes = {
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  valueProp: PropTypes.string.isRequired,
  displayProp: PropTypes.arrayOf(PropTypes.string).isRequired
};
```
