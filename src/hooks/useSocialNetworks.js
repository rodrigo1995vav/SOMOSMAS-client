import { useState, useEffect } from "react";
import { getPublic } from "../services/apiServices";

  const useSocialNetworks = () => {

    const [socialNetworks, setSocialNetworks] = useState(null);

    useEffect(() => {
      getPublic( `${process.env.REACT_APP_PUBLIC_URL_API}/organizations/1/public` )
        .then( ( resp ) => {
          const social = resp.data.organization.Social_networks;
          setSocialNetworks(social);
        })
    }, [])

    return{
      socialNetworks
    }

  }

  export default useSocialNetworks;
