import { useEffect, useState } from "react";


const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://secret-peak-21813.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => {
                setTools(data)
            });
    }, [tools]);
    return [tools]
};

export default useTools;