import React, { useState } from "react";
import { schema } from "../data";
import readXlsxFile from "read-excel-file";
import CustomerList from "./customerList";
import { addCustomerDetails, getCustomerDetails } from "../services";
import { customerDetails } from "../actions";
import { useDispatch } from "react-redux";

const UploadUser = (props) => {
  let { close } = props;
  const dispatch = useDispatch();
  const [xlsData, setXlsData] = useState({
    data: [],
  });
  const onSubmit = () => {
    if (xlsData.data.length !== 0) {
      addCustomerDetails(xlsData.data).then((response) => {
        if (response.status === 201) {
          getCustomerDetails()
            .then((res) => res.json())
            .then((repos) => {
              dispatch(customerDetails(repos));
            });
        }
      });
    }
    close();
  };
  const handleChanges = (event) => {
    setXlsData({ ...xlsData, data: [] });
    let { files } = event.target;
    let allSheetData = [];
    readXlsxFile(files[0], { getSheets: true }).then((sheets) => {
      sheets.forEach((sheetsData) => {
        let { name } = sheetsData;
        readXlsxFile(files[0], {
          sheet: name,
          schema,
        }).then((data) => {
          let { errors, rows } = data;
          if (errors.length === 0) {
            // allSheetData = allSheetData.concat(rows);
            setXlsData((prevState) => ({
              ...prevState,
              data: prevState.data.concat(rows),
            }));
          }
        });
      });
    });
    // setXlsData({ ...xlsData, data: allSheetData });
  };

  return (
    <div>
      <input type="file" id="input" onChange={handleChanges} />
      {xlsData.data.length > 0 && <CustomerList cust_list={xlsData.data} />}
      <div className="subButton"> <input type="button" onClick={onSubmit} value="Submit" /></div>
    </div>
  );
};

export default UploadUser;
