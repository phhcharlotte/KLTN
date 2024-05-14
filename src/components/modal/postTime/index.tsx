import React, { useState } from "react";
import { Button, DatePicker, DatePickerProps, Modal } from "antd";

type ModalPostTime = {
  isModalPostTimeOpen: boolean;
  handleCancel: () => void;
};

const ModalPostTime: React.FC<ModalPostTime> = ({
  isModalPostTimeOpen,
  handleCancel,
}) => {
  const [startDate, setStartDate] = useState<string | string[]>("");
  const [endDate, setEndDate] = useState<string | string[]>("");
  const [isError, setIsErrors] = useState<boolean>(false);
  const onChangeStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    setStartDate(dateString);
    console.log("date", date);
  };
  const onChangeEndDate: DatePickerProps["onChange"] = (date, dateString) => {
    setEndDate(dateString);
    console.log("date", date);
  };
  const handleSubmit = () => {
    if (startDate && endDate) {
      setIsErrors(false);
    } else setIsErrors(true);
  };
  // const disableDateValue = (current:string) =>{
  //   const customDate = moment().format("YYYY-MM-DD");
  //   return current && current < moment(customDate, "YYYY-MM-DD");
  // }
  return (
    <>
      <Modal
        title="Đăng hạn đăng ký"
        open={isModalPostTimeOpen}
        onCancel={handleCancel}>
        <div className="flex items-center justify-between">
          <DatePicker
            status={isError ? "error" : ""}
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
            status={isError ? "error" : ""}
            style={{
              height: "40px",
              width: "200px",
              padding: "8px",
            }}
            placeholder="End date"
            onChange={onChangeEndDate}
          />
        </div>
        {isError ? <p>Hãy chọn thời gian</p> : null}
        <div className="flex justify-center gap-4 mt-4">
          <Button type="primary" onClick={handleCancel}>
            Huỷ bỏ
          </Button>
          <Button type="primary" onClick={handleSubmit}>
            Đăng ký
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalPostTime;
