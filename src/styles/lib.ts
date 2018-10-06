import colors from './varibles';

export function cross(bottom, top){
  return `linear-gradient(30deg, ${bottom} -8%, ${top} 120%);`
}
export function fade(bottom){
  return `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${bottom} 100%)`
}

export const coreGradients = {
  RO: cross(colors.red, colors.orangeL1),
  RY: cross(colors.redL1, colors.yellow),
  BP: cross(colors.blue, colors.pink),
  GC: cross(colors.green, colors.cyan),
  BC: cross(colors.blue, colors.cyan),
  PC: cross(colors.pink, colors.cyan),
  PY: cross(colors.pink, colors.yellow),
};

export const sizes = {
  xs: '375px',
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1440px'
}

const width = 96;
const gutter = 4;

export function container(def){
  return `
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  `
}
function getWidth(width, n1, gutter, n2, n3) {
  return ( width / n1 ) - (gutter * n2 / n3 );
}


export function grid(sheet){
  //http://simplegrid.io/
  return {
    'container': container('auto'),
    'col-1-sm': `width: ${getWidth(width, 12, gutter, 11, 12)}`,
    'col-2-sm': `width: ${getWidth(width, 6, gutter, 10, 12)}`,
    'col-3-sm': `width: ${getWidth(width, 4, gutter, 9, 12)}`,
    '.col-4-sm': `width: ${getWidth(width, 3, gutter, 8, 12)}`,
    '.col-5-sm': `width: ${getWidth(width, (12/5), gutter, 7, 12)}`,
    '.col-6-sm': `width: ${getWidth(width, 2, gutter, 7, 12)}`,
    '.col-7-sm': `width: ${getWidth(width, (12/7), gutter, 5, 12)}`,
    '.col-8-sm': `width: ${getWidth(width, (12/8), gutter, 4, 12)}`,
    '.col-9-sm': `width: ${getWidth(width, (12/9), gutter, 3, 12)}`,
    '.col-10-sm': `width: ${getWidth(width, (12/10), gutter, 2, 12)}`,
    '.col-11-sm': `width: ${getWidth(width, (12/11), gutter, 1, 12)}`,
    '.col-12-sm': `width: ${width}`
  }
}
