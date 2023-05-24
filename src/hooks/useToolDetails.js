import { useEffect, useState } from "react";


const useToolDetails = (toolId) => {
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch(`https://tool-place-server-1bxqf488v-aninditaroy.vercel.app/tool/${toolId}`)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            });
    }, [tool]);
    return [tool]
};

export default useToolDetails;
