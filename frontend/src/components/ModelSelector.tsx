import {
  useEffect,
  useState
} from "react";

export default function
ModelSelector() {

  const [
    models,
    setModels
  ] = useState<any[]>([]);

  const [
    current,
    setCurrent
  ] = useState("");

  useEffect(() => {

    loadModels();

  }, []);

  async function
  loadModels() {

    const list =
      await (
        window as any
      ).api.getModels();

    setModels(list);

    const preferred =
      list.find(
        (m:any)=>
          m.name ===
          "deepseek-coder:latest"
      );

    if(preferred)
      setCurrent(
        preferred.name
      );

    else if(list.length)
      setCurrent(
        list[0].name
      );
  }

  return (
    <select
      value={current}
      onChange={
        e =>
        setCurrent(
          e.target.value
        )
      }
    >
      {
        models.map(
          model => (
            <option
              key={
                model.name
              }
            >
              {
                model.name
              }
            </option>
          )
        )
      }
    </select>
  );
}