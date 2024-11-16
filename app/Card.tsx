/** @jsx h */
import { h, Component } from "https://deno.land/x/nano_jsx@v0.0.25/mod.ts";
import { ComponentSheet } from "../model/ComponentSheet.ts";

interface CardProps {
  component: ComponentSheet;
  onDelete: (id: string) => void;
}

export class Card extends Component<CardProps> {
  render() {
    const { component, onDelete } = this.props;
    return (
      <div class="p-4 max-w-sm bg-white border rounded-lg shadow-md">
        <h5 class="mb-2 text-xl font-bold tracking-tight">{component.name}</h5>
        <p>{component.description}</p>
        <button onClick={() => onDelete(component.id)} class="text-red-500">Delete</button>
      </div>
    );
  }
}
