export interface IColor {
  hexaCode: string;
  cod: string;
  stock: number;
}

export interface IColorGroup {
  name: string;
  colors: IColor[];
}
