import React, { useState } from "react";
import FeatureItem from "../FeatureItem";
import PropTypes from "prop-types";
import "./Frame25.css";
import emailjs from "emailjs-com";

const Frame25 = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    requestType: "rent",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_ipyk748"; // Замените на ваш Service ID
    const templateID = "template_dl232d9"; // Замените на ваш Template ID
    const userID = "tADfh_wUcEnyw0Aj6"; // Замените на ваш User ID

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Форма успешно отправлена!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Ошибка при отправке формы.");
      });
  };

  return (
    <div className={`frame133 ${className}`}>
      <div className="frame134">
        <div className="feature-title1">
          <div className="heading1">Мүлік бойынша сұрау формасы</div>
          <div className="divider1" />
        </div>
        <div className="feature-list1">
          <FeatureItem
            dataPoint="Сұрау Түрі"
            dataValue={
              <select
                className="input-field"
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
              >
                <option value="Жалға беру">Мүлікті Жалға Беру</option>
                <option value="Сату">Мүлікті Сату</option>
              </select>
            }
            iconList="/up-down.svg"
          />
          <FeatureItem
            dataPoint="Аты-жөні"
            featureDataAlignItems="center"
            featureDataHeight="unset"
            dataValue={
              <input
                type="text"
                className="input-field"
                placeholder="Еңгізіңіз"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            }
            iconList="pending_I42:1766;42:1188;42:671;11:260"
          />
          <FeatureItem
            dataPoint="Email"
            featureDataAlignItems="center"
            featureDataHeight="unset"
            dataValue={
              <input
                type="email"
                className="input-field"
                placeholder="example@domain.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            }
            iconList="pending_I42:1766;42:1188;42:671;4:452"
          />
          <FeatureItem
            dataPoint="Телефон (Міндетті Емес)"
            featureDataAlignItems="center"
            featureDataHeight="unset"
            dataValue={
              <input
                type="tel"
                className="input-field"
                placeholder="+7 (123) 456-7890"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            }
            iconList="pending_I42:1766;42:1188;42:671;4:457"
          />
          <FeatureItem
            dataPoint="Қосымша"
            featureDataAlignItems="flex-start"
            featureDataHeight="70.5px"
            dataValue={
              <textarea
                className="input-field textarea"
                placeholder="Хабарламаңызды Енгізіңіз"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            }
            iconList="pending_I42:1766;42:1188;42:671;4:462"
          />
        </div>
      </div>
      <div className="frame135">
        <button className="description2" onClick={handleSubmit}>
          Жіберу
        </button>
      </div>
    </div>
  );
};

Frame25.propTypes = {
  className: PropTypes.string,
};

export default Frame25;