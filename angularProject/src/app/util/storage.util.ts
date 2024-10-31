export class StorageUtil {

  static saveToLocalStorage(key: string, data: any) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  static getFromLocalStorage(key: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
  }

  static removeFromLocalStorage(key: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    }
  }

}
