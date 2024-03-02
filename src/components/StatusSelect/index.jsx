import { Container } from './styles';

import Select from 'react-select';
import chroma from 'chroma-js';

const options = [
  { value: 'pending', label: 'Pendente', color: '#AB222E'},
  { value: 'preparing', label: 'Preparando', color: '#FBA94C'},
  { value: 'delivered', label: 'Entregue', color: '#04D361'},
];

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 8,
    width: 8,
  },
});

const colorStyles = {
  control: (styles, state) => ({
    display: 'flex',
    height: '4.8rem',
    color: '#C4C4CC',
    backgroundColor: '#0D1D25',
    borderRadius: '5px',
    border: 'none',
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
    color: '#C4C4CC',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorContainer: (styles, state) => ({
    ...styles,
    color: 'red',
  }),
  menu: (styles, state) => ({
    ...styles,
    backgroundColor: '#0d1d25',
  }),
};

export function StatusSelect() {
  return (
    <Container>
      <Select
        options={options}
        isSearchable={false}
        defaultValue={options[0]}
        styles={colorStyles}
      />
    </Container>
  );
}