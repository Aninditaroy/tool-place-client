import { useEffect, useState } from "react";


const useToolDetails = (toolId) => {
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch(`https://tool-place-server-side.vercel.app/tool/${toolId}`)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            });
    }, [tool]);
    return [tool]
};

export default useToolDetails;
