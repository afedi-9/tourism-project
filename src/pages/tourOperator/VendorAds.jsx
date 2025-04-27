import React, { useEffect, useState } from "react";
import VendorAdsCard from "../../Components/VendorAdsCard";
import { apiGetOperatorToursAds } from "../../services/tours";

const VendorAds = () => {
  const [ads, setAds] = useState([]);
  //featching data from api//
  const getAds = async () => {
    try {
      const response = await apiGetOperatorToursAds();
      console.log(response.data);
      setAds(response.data);
      con
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {ads.map((ad) => {
          return <VendorAdsCard key={ad.id} ad={ad} />;
        })}
      </div>
    </div>
  );
};

export default VendorAds;
