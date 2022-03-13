import configs from 'configs';

export const isProduction = configs.env === 'production';

export class Util {
  static isServer(): boolean {
    return typeof window === 'undefined';
  }

  static isEqualJSON(
    objectOne: { [key: string]: any },
    objectTwo: { [key: string]: any }
  ): boolean {
    const isObject = (value: { [key: string]: any }): boolean =>
      value !== null && typeof value === 'object';

    if (isObject(objectOne) && isObject(objectTwo)) {
      const keysOne = Object.keys(objectOne);
      const keysTwo = Object.keys(objectTwo);

      if (keysOne.length !== keysTwo.length) {
        return false;
      }

      for (const key of keysOne) {
        const valueOne = objectOne[key];
        const ValueTwo = objectTwo[key];

        if (isObject(valueOne) && isObject(ValueTwo) && !this.isEqualJSON(valueOne, ValueTwo)) {
          return false;
        }
        if (!isObject(valueOne) && !isObject(ValueTwo) && valueOne !== ValueTwo) {
          return false;
        }
      }

      return true;
    }
    return false;
  }
}
