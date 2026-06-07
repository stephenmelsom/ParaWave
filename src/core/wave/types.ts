export interface WaveField {
  f(x: number, y: number): number;
  dfdy(x: number, y: number): number;
}
