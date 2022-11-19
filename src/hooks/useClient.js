import React from "react";
import { getClientInfo } from "../api/controller";

const useClient = (id) => {
  const [info, setInfo] = React.useState({});

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getClientInfo(id).then((res) => {
      setInfo(res);
      setLoading(false);
    });
  }, [id]);

  return { info, loading };
};

export default useClient;
