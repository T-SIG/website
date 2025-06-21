"use client";
import "../../../styles/validate.css";
import "../../../styles/mainSect.css";
import certData from "../../../data/db.json";
import "../../../styles/fonts.astro";

export default function Navbar({ id }) {
  return (
    <div className="cert-container">
      <div className="certificate">
        <img className="certificate-image" src="/images/certificate.jpg" alt="Certificate"/>
        <h1 className="name">
          {id ? certData.certificates.find((c) => c.id === id).name : ""}
        </h1>
      </div>
    </div>
  );
}
