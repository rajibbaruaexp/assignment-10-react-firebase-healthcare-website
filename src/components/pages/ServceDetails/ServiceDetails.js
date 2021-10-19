import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  let { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState({});

  //load data
  useEffect(() => {
    fetch("/fakeDataDetails.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data.service));
  }, []);

  //will be called after the state is set
  useEffect(() => {
    const foundService = serviceDetails.find((service) => service.id === id);
    setSingleService(foundService);
  }, [id, serviceDetails]);
  return (
    <div className="container mx-auto">
      <div className="title mt-14">
        <h3 className="text-3xl font-semibold">Our Services</h3>
      </div>
      <div className="single-service-details">
        <section className="relative pt-12 bg-blueGray-50">
          <div className="items-center flex flex-wrap">
            <div className=" md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src={singleService?.img}
              />
            </div>
            <div className="text-left w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-auto h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                  <i className="mr-5 fas fa-rocket text-xl"></i>
                  <h3 className="text-2xl font-semibold">
                    {singleService?.name}
                  </h3>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  {singleService?.description}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          <span className=" text-gray p-1 rounded text-sm">
                            Service Charge:{" "}
                            <span className="font-bold">
                              {singleService?.price} tk
                            </span>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </li>

                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          <span className=" text-gray p-1 rounded text-sm">
                            Pathologist:{" "}
                            <span className="font-bold">
                              {singleService?.pathologist}
                            </span>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          <span className=" text-gray p-1 rounded text-sm">
                            Time:{" "}
                            <span className="font-bold">
                              {singleService?.time}
                            </span>{" "}
                            everyday
                          </span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="title mt-14">
        <Link to="/contact-us">
          <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-800">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
