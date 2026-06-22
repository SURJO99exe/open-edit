import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function ModelSelector() {
    const [models, setModels] = useState([]);
    const [current, setCurrent] = useState("");
    useEffect(() => {
        loadModels();
    }, []);
    async function loadModels() {
        const list = await window.api.getModels();
        setModels(list);
        const preferred = list.find((m) => m.name ===
            "deepseek-coder:latest");
        if (preferred)
            setCurrent(preferred.name);
        else if (list.length)
            setCurrent(list[0].name);
    }
    return (_jsx("select", { value: current, onChange: e => setCurrent(e.target.value), children: models.map(model => (_jsx("option", { children: model.name }, model.name))) }));
}
