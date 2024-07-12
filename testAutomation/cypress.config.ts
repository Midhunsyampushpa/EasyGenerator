import { defineConfig } from "cypress";
import fs from 'fs';
import path from 'path';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readFile(filePath) {
          return new Promise((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, '..', filePath), 'utf8', (err, data) => {
              if (err) {
                return reject(err);
              }
              resolve(data);
            });
          });
        }
      });
      
      // implement other node event listeners here if needed
    },
    testIsolation: false,
  },

  env: {
    test_env: "http://127.0.0.1:8084/"
  },

  watchForFileChanges: false,
  defaultCommandTimeout: 60000,
});
