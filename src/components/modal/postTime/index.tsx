import React, { useState } from "react";
import { DatePicker, DatePickerProps, Modal } from "antd";

type ModalPostTime = {
  isModalPostTimeOpen: boolean;
  handleCancel: () => void;
};

const ModalPostTime: React.FC<ModalPostTime> = ({
  isModalPostTimeOpen,
  handleCancel,
}) => {
  const [startDate, setStartDate] = useState<string | string[]>("");
  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };

  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };

  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };
  const onChangeStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    setStartDate(dateString);
    console.log("date", date);
  };
  const onChangeEndDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log("dateString", dateString);
    console.log("date", date);
  };
  console.log("startDate", startDate);
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalPostTimeOpen}
        onCancel={handleCancel}>
        <div className="flex items-center justify-between">
          <DatePicker
            status={startDate ? "" : "error"}
            style={{
              height: "40px",
              width: "200px",
              padding: "8px",
            }}
            placeholder="Start date"
            onChange={onChangeStartDate}
          />
          <span className="text-base">~</span>
          <DatePicker
            style={{
              height: "40px",
              width: "200px",
              padding: "8px",
            }}
            placeholder="End date"
            onChange={onChangeEndDate}
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalPostTime;
