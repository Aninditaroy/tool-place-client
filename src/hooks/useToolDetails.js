import { useEffect, useState } from "react";


const useToolDetails = (toolId) => {
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch(`https://secret-peak-21813.herokuapp.com/tool/${toolId}`)
            .then(res => res.json())
            .then(data => {
                setTool(data)
            });
    }, [tool]);
    return [tool]
};

export default useToolDetails;
