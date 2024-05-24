import React from "react";
import { Modal } from "flowbite-react";
import { Country } from "@/types";

interface CountryCardModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  country?: Country;
}

const CountryCardModal = ({ onCloseModal, openModal, country }: CountryCardModalProps) => {
  return (
    <Modal show={openModal} size="2xl" onClose={onCloseModal} popup>
      <Modal.Header>
        <h2 className="text-2xl font-bold p-5">{country?.name?.common}</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="flex justify-center mb-5">
          <img src={country?.flags?.png} alt={`${country?.name?.common} flag`} className="full h-40 object-cover" />
        </div>
        <div className="space-y-6 text-gray-700">
          <p className="flex justify-between">
            <strong>Official Name:</strong> <span>{country?.name?.official}</span>
          </p>
          <p className="flex justify-between">
            <strong>Region:</strong> <span>{country?.region}</span>
          </p>
          <p className="flex justify-between">
            <strong>Subregion:</strong> <span>{country?.subregion}</span>
          </p>
          <p className="flex justify-between">
            <strong>Population:</strong> <span>{country?.population}</span>
          </p>
          <p className="flex justify-between">
            <strong>Area:</strong> <span>{country?.area} km²</span>
          </p>
          <p className="flex justify-between">
            <strong>Capital:</strong> <span>{country?.capital.join(", ")}</span>
          </p>
          <p className="flex justify-between">
            <strong>Languages:</strong> <span>{Object.values(country?.languages || {}).join(", ")}</span>
          </p>
          <p className="flex justify-between">
            <strong>Currencies:</strong>{" "}
            <span>
              {Object.values(country?.currencies || {})
                .map(currency => currency?.name)
                .join(", ")}
            </span>
          </p>
          <p className="flex justify-between">
            <strong>Timezones:</strong> <span>{country?.timezones.join(", ")}</span>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default CountryCardModal;
