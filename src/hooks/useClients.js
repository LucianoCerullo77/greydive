import React from "react";
import { getDBData } from "../api/controller";

const useClients = () => {

    const [clients, setClients] = React.useState([]);

    const [loading, setLoading] = React.useState(false);
  
    React.useEffect(() => {
      setLoading(true);
      getDBData().then((res) => {
        setClients(res);
        setLoading(false);
      });
    }, []);

    return { clients, loading };

}

export default useClients
