export interface IColor {
  hexaCode: string;
  name: string;
  cod: string;
}

export interface IColorGroup {
  name: string;
  colors: IColor[];
}
