import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsSharedService {
  getCurrentIpAddress() {
    let address;
    const ifaces = require('os').networkInterfaces();
    for (const dev in ifaces) {
      ifaces[dev].filter((details) =>
        details.family === 'IPv4' && details.internal === false
          ? (address = details.address)
          : undefined,
      );
    }
    return address === undefined ? 'undefined' : address;
  }
  getCurrentDatePtBr() {
    const data = new Date();
    const dia = data.getDate().toString();
    const diaF = dia.length == 1 ? '0' + dia : dia;
    const mes = (data.getMonth() + 1).toString();
    const mesF = mes.length == 1 ? '0' + mes : mes;
    const anoF = data.getFullYear();
    return (
      diaF +
      '/' +
      mesF +
      '/' +
      anoF +
      ' at ' +
      data.getHours() +
      ':' +
      data.getMinutes() +
      ':' +
      data.getSeconds()
    );
  }

  getWordWithFirstLetterCapitalized(letter: string): string {
    return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
  }

  getAppLoggingData(
    path: string,
    httpMethod: string,
    requesterIp: string,
    httpCode,
  ): string {
    const loggingData = JSON.stringify({
      server: this.getCurrentIpAddress(),
      method: httpMethod,
      statusCode: httpCode,
      routePath: path,
      requestFrom: requesterIp,
      date: this.getCurrentDatePtBr(),
    });
    return loggingData;
  }
}
