/** @jsx h */
import { h, Component } from "https://deno.land/x/nano_jsx@v0.0.25/mod.ts";
import db from "./db/db.ts";
import { ComponentSheet } from "./model/ComponentSheet.ts";
import { Card } from "./app/Card.tsx";

export class App extends Component {
  async loadData() {
    await db.read();
    return db.data?.components || [];
  }

  render() {
    return (
      <div class="container mx-auto">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl">Component-Sheet</h1>
          <button class="bg-blue-500 text-white p-2 rounded">Add Component</button>
        </div>
        <div class="grid grid-cols-4 gap-4">
          {this.loadData().map((component) => (
            <Card component={component} onDelete={this.handleDelete} />
          ))}
        </div>
      </div>
    );
  }
  
  handleDelete = async (id: string) => {
    db.data!.components = db.data!.components.filter(c => c.id !== id);
    await db.write();
    this.update();
  };
}
