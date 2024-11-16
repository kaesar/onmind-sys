import { ComponentSheet } from "../model/ComponentSheet.ts";

type Data = {
  components: ComponentSheet[];
};

export class DB {
  private data: any;
  private path: string;

  constructor(path: string) {
    this.path = path;
    this.data = {};
  }

  async read() {
    try {
      const text = await Deno.readTextFile(this.path);
      this.data = JSON.parse(text);
    } catch {
      this.data = {};
    }
  }

  async write() {
    await Deno.writeTextFile(this.path, JSON.stringify(this.data, null, 2));
  }
}

export default new DB("./db.json");
