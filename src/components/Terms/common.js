'use strict';

import {
  ICommon as Commonn,
  IDeployedObjects,
  IFormattedDim,
  IInjectStyleOptions,
  IJsonToHtml,
} from './interfaces/common.interface';

export class Common {
  static DEFAULT_PIXEL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII=';
  body;
  deployedMap;
  _isIOSoolean;
  _canvas;
  constructor() {
    this.body = document.body || document.querySelector('body');
    this.deployedMap = new Map();
  }

  isIOS() {
    if (typeof this._isIOS === 'boolean') return this._isIOS;
    const isIOS = () => {
      var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
      ];

      if (!!navigator.platform) {
        while (iDevices.length) {
          if (navigator.platform === iDevices.pop()) {
            return true;
          }
        }
      }

      return false;
    };
    this._isIOS = isIOS();
    return this._isIOS;
  }

  jsonToHtml(obj) {
    let elm = document.createElement(obj.type);
    for (let i in obj.attrs) {
      elm.setAttribute(i, obj.attrs[i]);
    }
    for (let i in obj.children) {
      let newElem = null;
      if (obj.children[i].type === '#text') {
        newElem = document.createTextNode(obj.children[i].text);
      } else newElem = this.jsonToHtml(obj.children[i]);
      if (
        (newElem &&
          newElem.tagName &&
          newElem.tagName.toLowerCase() !== 'undefined') ||
        newElem.nodeType === 3
      )
        elm.appendChild(newElem);
    }
    return elm;
  }

  injectStyle(css, innerOptions = {}) {
    let sheet = document.createElement('style');
    sheet.appendChild(document.createTextNode(css));
    if (innerOptions.className) sheet.classList.add(innerOptions.className);
    this.body.appendChild(sheet);
    return sheet;
  }

  getFormattedDim(value) {
    if (!value) return null;

    value = String(value);

    let returnBySuffix = function (val, suffix) {
      return {
        size: val.substring(0, val.indexOf(suffix)),
        suffix: suffix,
      };
    };

    if (value.indexOf('%') > -1) return returnBySuffix(value, '%');
    if (value.indexOf('px') > -1) return returnBySuffix(value, 'px');
    if (value.indexOf('em') > -1) return returnBySuffix(value, 'em');
    if (value.indexOf('rem') > -1) return returnBySuffix(value, 'rem');
    if (value.indexOf('pt') > -1) return returnBySuffix(value, 'pt');
    if (value === 'auto') return returnBySuffix(value, '');
  }

  extend(src: any, dest: any) {
    for (let i in src) {
      if (typeof src[i] === 'object') {
        if (dest && dest[i]) {
          if (dest[i] instanceof Array) src[i] = dest[i];
          else src[i] = this.extend(src[i], dest[i]);
        }
      } else if (typeof dest === 'object' && typeof dest[i] !== 'undefined') {
        src[i] = dest[i];
      }
    }
    return src;
  }

  injectIconsFont(urls, callback) {
    if (urls && urls.length) {
      let head = document.getElementsByTagName('head')[0];
      let counter = 0;
      let hasErrors = false;
      let onload = (e) => {
        hasErrors = hasErrors || e.type === '';
        if (!--counter) callback(hasErrors);
      };
      urls.forEach((url) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        link.className = `_access-font-icon-${counter++}`;
        link.onload = onload;
        link.onerror = onload;
        this.deployedObjects.set('.' + link.className, true);
        head.appendChild(link);
      });
    }
  }

  getFixedFont(name) {
    if (this.isIOS()) return name.replaceAll(' ', '+');
    return name;
  }

  getFixedPseudoFont(name) {
    if (this.isIOS()) return name.replaceAll('+', ' ');
    return name;
  }

  isFontLoaded(fontFamily, callback) {
    try {
      const onReady = () => {
        return callback(
          document.fonts.check(`1em ${fontFamily.replaceAll('+', ' ')}`)
        );
        // return callback(document.fonts.check(`1em ${fontFamily}`));
      };
      document.fonts.ready.then(
        () => {
          onReady();
        },
        () => {
          onReady();
        }
      );
    } catch (e) {
      return callback(true);
    }
  }

  warn(msg) {
    let prefix = 'Accessibility: ';
    if (console.warn) console.warn(prefix + msg);
    else console.log(prefix + msg);
  }

  get deployedObjects() {
    return {
      get: (key) => {
        return this.deployedMap.get(key);
      },
      contains: (key) => {
        return this.deployedMap.has(key);
      },
      set: (key, val) => {
        this.deployedMap.set(key, val);
      },
      remove: (key) => {
        this.deployedMap.delete(key);
      },
      getAll: () => {
        return this.deployedMap;
      },
    };
  }

  createScreenshot(url) {
    return new Promise((resolve, reject) => {
      if (!this._canvas) this._canvas = document.createElement('canvas');
      const img = new Image();
      this._canvas.style.position = 'fixed';
      this._canvas.style.top = '0';
      this._canvas.style.left = '0';
      this._canvas.style.opacity = '0.05';
      this._canvas.style.transform = 'scale(0.05)';
      img.crossOrigin = 'anonymous';
      img.onload = async () => {
        document.body.appendChild(this._canvas);
        const ctx = this._canvas.getContext('2d');
        this._canvas.width = img.naturalWidth;
        this._canvas.height = img.naturalHeight;
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        // await this.setTimeout(1500);
        ctx.drawImage(img, 0, 0);
        let res = Common.DEFAULT_PIXEL;
        try {
          res = this._canvas.toDataURL('image/png');
        } catch (e) {}
        resolve(res);
        this._canvas.remove();
      };
      img.onerror = () => {
        // Return a 1X1 pixels transparent image as a fallback
        resolve(Common.DEFAULT_PIXEL);
      };
      img.src = url;
    });
  }

  getFileExtension(filename) {
    return (
      filename.substring(filename.lastIndexOf('.') + 1, filename.length) ||
      filename
    );
  }
}
