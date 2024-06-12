import * as os from 'node:os';
const cluster = require('cluster');
import * as process from 'node:process';
import { Injectable } from '@nestjs/common';
const cpus = os.cpus().length * 2;

@Injectable()
export class Cluster {
  static clusterize(callback: Function) {
    if (cluster.isPrimary) {
      this.runPrimaryProcess();
    } else {
      // this.runWorkProcess();
      callback();
    }
  }

  private static runPrimaryProcess() {
    console.log(`Primary ${process.pid} is running`);
    console.log(`Forking Server with ${cpus} processes\n`);

    for (let index = 0; index < cpus; index++) cluster.fork();

    // When Worker process has died, Log the worker
    cluster.on('exit', (worker, code, signal) => {
      if (code !== 0 && !worker.exitedAfterDisconnect) {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
      }
    });
  }

  private static async runWorkProcess() {
    await import('../../../main');
  }
}

const runWorkProcess = async () => {
  await import('../../../main');
};

cluster.isPrimary;
