const padding = {
  top: '16px',
  bottom: '16px',
  left: '28px',
  right: '28px'
}
const borderRadius = '30px';

//transitions on gradients don't work
export function feedback(){
  return `
    transition: all 3s;
  `
}

//move to framework
export function buttonBase(){
  return `
    ${feedback()}
    padding-right: ${padding.right};
    padding-left: ${padding.left};
    padding-top: ${padding.top};
    padding-bottom: ${padding.bottom};
    border-radius: ${borderRadius};
    border:0;
    text-decoration: none;
    background-position: 0px;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    color: #ffffff;
  `
}
