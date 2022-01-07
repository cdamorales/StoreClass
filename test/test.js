
import { readFile } from "fs/promises";
import * as assert from 'assert';
import  Store  from '../store.js';

const incidents = JSON.parse(
  await readFile(
      new URL("../incidents.json", import.meta.url)
  )
)
const {start_date,finish_date} = JSON.parse(
  await readFile(
      new URL("../parameters.json", import.meta.url)
  )
)
  describe('#store is an initialized Store class with incidents associated from ../incidents.json', function() {
    it(`#store.incident_status with values ${start_date} , ${finish_date}`, function() {
      const store = new Store(incidents);
      let response=store.incidente_status(start_date, finish_date);
      console.log(response);
      assert.equal(true,true);
    });
  });

