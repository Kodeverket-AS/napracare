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

export default function ServicesDesktop() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;

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
    <div className="mx-8 my-8 max-w-[1488px] text-main-500">
      <div className="header mb-12 mt-16">
        <h1 className="mt-8 lg:mt-0 text-[48px] font-DMSans text-main-500 font-semibold">Tjenester</h1>
        <div className="flex  items-center justify-between">
          <h2 className="max-w-8/10  text-main-500 text-base font-normal mb-4 md:mb-0">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentServices.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className={` group relative bg-white hover:bg-main-500 hover:text-white hover:rounded-3xl p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
              index < 2 ? "border-r border-gray-300" : ""
            }`}
          >
            <div className=" absolute top-4 right-4">
              <Link href="#" onClick={() => handleOpen(service)}>
                <ArrowOutwardRoundedIcon className="text-main-500 group-hover:border-white group-hover:border-2 group-hover:rounded-full cursor-pointer group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-medium font-DMSans mb-2">{service.header}</h2>
              <p className="text-base  text-dark-text group-hover:text-white">
                {service.text.length > 100
                  ? service.text.slice(0, 100) + "..."
                  : service.text}
              </p>
            </div>
          </div>
        ))}

        <div className="col-span-3">
          <div className="w-9/10 h-[1px] bg-gray-300 my-6"></div>
        </div>

        {currentServices.slice(3, 6).map((service, index) => (
          <div
            key={index + 3}
            className={`group relative bg-white hover:bg-main-500 hover:text-white hover:rounded-3xl p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
              index < 2 ? "border-r border-gray-300" : ""
            }`}
          >
            <div className="absolute top-4 right-4">
              <Link href="#" onClick={() => handleOpen(service)}>
                <ArrowOutwardRoundedIcon className="text-main-500 group-hover:border-white group-hover:border-2 group-hover:rounded-full cursor-pointer group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-medium font-DMSans mb-2">{service.header}</h2>
              <p className="text-base  text-dark-text group-hover:text-white">
                {service.text.length > 100
                  ? service.text.slice(0, 100) + "..."
                  : service.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <Modal
          open={openModal}
          onClose={handleClose}
          sx={{
            backgroundColor: "rgba(0, 84, 147, 0.2)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "32px",
              borderRadius: "12px",
              boxShadow: 24,
              width: "75vw",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <div className="flex flex-row gap-8">
              <div className="w-1/2 flex justify-center items-start">
                <img
                  src="/nakke.jpg"
                  alt="Nakke"
                  className="max-w-full max-h-[600px] object-cover rounded-xl"
                />
              </div>

              <div className="w-px bg-gray-300"></div>

              <div className="w-1/2 pl-6">
                <h2 className="text-3xl font-semibold mb-6">
                  {selectedService.header}
                </h2>
                <p className="text-gray-700 text-base">
                  {selectedService.text}
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-300" />

            <div className="flex justify-center items-center gap-6">
              <button
                onClick={handleClose}
                className="bg-main-500 w-[240px] h-[56px] rounded-[8px] text-white text-lg"
              >
                Lukk
              </button>
              <button className="bg-main-500 w-[240px] h-[56px] rounded-[8px] text-white text-lg">
                Bestill time
              </button>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
}
