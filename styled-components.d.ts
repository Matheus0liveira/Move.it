
import light from 'styles/theme/light';

type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}