import { useEffect, useState } from "react";


const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://tool-place-server-1bxqf488v-aninditaroy.vercel.app/tool')
            .then(res => res.json())
            .then(data => {
                setTools(data)
            });
    }, [tools]);
    return [tools]
};

export default useTools;