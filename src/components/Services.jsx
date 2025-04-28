"use client";

import "@/assets/styles/globals.css";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LaunchIcon from "@mui/icons-material/Launch";
import { servicesData } from "../data/servicesData";
import Link from "next/link"; // Dodaj to jeśli chcesz przechodzić na inną stronę
import { useState } from "react";

// Komponent modalny
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function Services() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedService(null);
  };

  return (
    <div className="px-8">
      {/* Wprowadzenie i paginacja */}
      <div className="header mb-8">
        <h1 className="text-lg mb-4">Tjenester</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-gray-700 mb-4 md:mb-0">
            Her får du hjelp til dine akutte og langvarige problemer gjennom
            manuell behandling som sørger for å minske smerte og gjenskape
            kroppens naturlige funksjon og bevegelighet. Hos oss får du time
            kjapt slik at du kommer raskt tilbake fra din skade.
          </p>
          <div>
            <Stack spacing={2} direction="row">
              <Pagination
                count={5}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </div>
        </div>
      </div>

      {/* Grid z kartami */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pierwszy rząd: Karty */}
        {servicesData.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className={`relative bg-white p-6 transition ${
              index < 2 ? "border-r border-gray-300" : ""
            }`}
          >
            {/* Strzałka */}
            <div className="absolute top-4 right-4">
              <Link href={`/service/${index}`}>
                <LaunchIcon className="text-gray-500 hover:text-black cursor-pointer" />
              </Link>
            </div>

            {/* Header */}
            <div className="mt-20">
              <h2 className="text-lg font-semibold mb-2">{service.header}</h2>
              <p className="text-gray-700">
                {service.text.length > 100
                  ? service.text.slice(0, 100) + "..."
                  : service.text}
              </p>
            </div>
          </div>
        ))}

        {/* Drugi rząd: Linia oddzielająca */}
        <div className="col-span-3">
          <div className="w-full h-[1px] bg-gray-300 my-6"></div>
        </div>

        {/* Trzeci rząd: Kolejne 3 karty */}
        {servicesData.slice(3, 6).map((service, index) => (
          <div
            key={index + 3}
            className={`relative bg-white p-6 rounded-lg transition ${
              index < 2 ? "border-r border-gray-300" : ""
            }`}
          >
            {/* Strzałka */}
            <div className="absolute top-4 right-4">
              <Link href={`/service/${index + 3}`}>
                <LaunchIcon className="text-gray-500 hover:text-black cursor-pointer" />
              </Link>
            </div>

            {/* Header */}
            <div className="mt-20">
              <h2 className="text-lg font-semibold mb-2">{service.header}</h2>
              <p className="text-gray-700">
                {service.text.length > 100
                  ? service.text.slice(0, 100) + "..."
                  : service.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal z pełnymi szczegółami */}
      {selectedService && (
        <Modal open={openModal} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: 24,
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {selectedService.header}
            </h2>
            <p className="text-gray-700">{selectedService.text}</p>
            <div className="mt-4">
              <button
                onClick={handleClose}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              >
                Zamknij
              </button>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
}
