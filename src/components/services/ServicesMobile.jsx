"use client";

import "@/assets/styles/globals.css";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import { servicesData } from "./servicesData";
import Link from "next/link";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function ServicesMobile() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4;

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedService(null);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = servicesData.slice(
    indexOfFirstService,
    indexOfLastService
  );

  return (
    <div className="px-4 my-8 max-w-[1488px] text-main-500">
      <div className="header mb-12 mt-16">
        <h1 className="text-3xl font-bold mb-4">Tjenester</h1>
        <div className="flex  items-center justify-between">
          <h2 className="max-w-8/10 text-xl mb-4 md:mb-0">
            Her får du hjelp til dine akutte og langvarige problemer gjennom
            manuell behandling som sørger for å minske smerte og gjenskape
            kroppens naturlige funksjon og bevegelighet. Hos oss får du time
            kjapt slik at du kommer raskt tilbake fra din skade.
          </h2>
          <div className="my-6">
            <Stack spacing={2} direction="row">
              <Pagination
                count={Math.ceil(servicesData.length / servicesPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                renderItem={(item) => {
                  if (item.type === "page") return null;
                  return (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  );
                }}
              />
            </Stack>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        {currentServices.slice(0, 2).map((service, index) => (
          <div
            key={index}
            className={`group relative bg-white hover:bg-main-500 hover:text-white hover:rounded-3xl p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
              index < 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <div className="absolute top-4 right-4">
              <Link href="#" onClick={() => handleOpen(service)}>
                <ArrowOutwardRoundedIcon className="text-main-500  group-hover:border-white group-hover:border-2 group-hover:rounded-full  group-hover:translate-x-1 transition-all duration-300 cursor-pointer" />
              </Link>
            </div>

            <div className="mt-10 md:mt-20">
              <h2 className="text-xl font-semibold mb-2">{service.header}</h2>
              <p className="text-base">
                {service.text.length > 100
                  ? service.text.slice(0, 100) + "..."
                  : service.text}
              </p>
            </div>
          </div>
        ))}

        <div className="col-span-2 flex justify-center">
          <div className="w-full h-[1px] bg-gray-300 my-6 mx-auto"></div>
        </div>

        {currentServices.slice(2, 4).map((service, index) => (
          <div
            key={index + 2}
            className={`group relative hover:bg-main-500 hover:text-white hover:rounded-3xl p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
              index < 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <div className="absolute top-4 right-4">
              <Link href="#" onClick={() => handleOpen(service)}>
                <ArrowOutwardRoundedIcon className="text-main-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 cursor-pointer" />
              </Link>
            </div>

            <div className="mt-10 md:mt-20">
              <h2 className="text-lg font-semibold mb-2">{service.header}</h2>
              <p className="text-base">
                {service.text.length > 100
                  ? service.text.slice(0, 100) + "..."
                  : service.text}
              </p>
            </div>
          </div>
        ))}
      </div>

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
                Lukk
              </button>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
}
