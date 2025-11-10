"use client";
import { useEffect, useState } from "react";
import OrderWidget from "../widgets/orderWidget";

interface Service {
  name: string;
  price: string;
  description: string;
  unit: string;
  hot?: boolean;
  category: string;
}

export default function PriceList() {
  const [services, setServices] = useState<Record<string, Service[]>>({});

  useEffect(() => {
    fetch("/api/services") //GET request
      .then((res) => res.json())
      .then((data) => {
        const grouped = data.services.reduce(
          (acc: Record<string, Service[]>, service: Service) => {
            const type =
              service.category?.charAt(0).toUpperCase() +
              service.category?.slice(1) +
              "tisztítás";
            if (!type) return acc; // Skip invalid categories

            if (!acc[type]) {
              acc[type] = [];
            }
            acc[type].push(service);
            return acc;
          },
          {}
        );
        setServices(grouped);
      });
  }, []);

  return (
    <>
      <div
        className="p-10 flex flex-col gap-10 items-center justify-center
					*:flex *:flex-col *:justify-center *:items-center *:gap-4"
      >
        {Object.keys(services).map((group, index) => (
          <div key={index}>
            <h3 className="text-2xl text-neutral-200 font-semibold pb-3">
              {group || "Általános tisztítás"}
            </h3>
            <div className="flex flex-wrap gap-5 justify-center items-center">
              {services[group]?.map((service, idx) => (
                <OrderWidget
                  key={idx}
                  title={service.name || "Unknown Service"}
                  price={service.price || "-1"}
                  unit={service.unit || "unit"}
                  description={
                    service.description || "No description available"
                  }
                  popular={service.hot || false}
                />
                // <div key={idx}>
                //   {service.name}
                //   <br />
                //   {service.price}/{service.unit} <br />
                //   {service.description}
                // </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
