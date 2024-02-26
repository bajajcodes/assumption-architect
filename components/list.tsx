import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface Props {
  data: Array<Record<"key" | "label" | "value", string>>;
}

export function List(props: Props) {
  return (
    <section>
      <ul>
        {props.data.map((item) => (
          <ListItem {...item} key={item.key} />
        ))}
      </ul>
    </section>
  );
}

function ListItem(props: Record<"label" | "value", string>) {
  return (
    <li>
      <Label>{props.label}</Label>
      <Textarea value={props.value} readOnly className="resize-none" />
    </li>
  );
}
