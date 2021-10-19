import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((result) => result.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="title p-14">
        <h1 className="text-4xl	">Our Services</h1>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
