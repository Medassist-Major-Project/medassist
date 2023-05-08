import { useContext, useState } from "react";
import { useRouter } from "next/router";

import Notice from "../notice";
import styles from "./styles.module.scss";
import UploadPageIllustration from "../../images/upload_page_illustration.svg";
import axios from "axios";
import StateContext from "../../Context/StateContext";

const LoginPage = () => {
  const RESET_NOTICE = { type: "", message: "" };
  const [notice, setNotice] = useState(RESET_NOTICE);
  const router = useRouter();
  const appState = useContext(StateContext);

  const [state, setState] = useState({
    selectedPdfs: null,
    loaded: 0,
    subName: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    type: "prescription",
  });

  const handleInputChange = (e, property) => {
    setFormData({
      ...formData,
      [property]: e.target.value,
    });
  };

  const maxSelectFile = (e) => {
    let files = e.target.files;
    if (files.length > 1) {
      setNotice({ type: "ERROR", message: "Maximum 1 file is allowed." });
      e.target.value = null;
      return false;
    } else {
      let err = "";
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 5000000) {
          // 5 MB
          err += files[i].name + ", ";
        }
      }
      if (err !== "") {
        // error caught
        e.target.value = null;
        setNotice({
          type: "ERROR",
          message: "file is too large. Please select file size < 5MB.",
        });
      }
    }
    return true;
  };

  const fileChangeHandler = (event) => {
    const files = event.target.files;
    console.log(files[0]);
    if (maxSelectFile(event)) {
      setState({ ...state, selectedPdfs: files[0], loaded: 0 });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", state.selectedPdfs);
    const token = appState.person.token;
    // a http post request to upload prescription
    const res = await axios.post(
      "http://localhost:8000/prescription/uploadPrescription",
      { file: state.selectedPdfs, name: formData.name },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    switch (res.data.type) {
      case "success":
        // setTimeout(() => {
        //   router.replace("/");
        // }, 3000);
        setNotice({ type: "SUCCESS", message: res.data.message });
        break;
      case "error":
        setNotice({ type: "ERROR", message: res.data.message });
        break;
    }
  };

  return (
    <div className="ContentContainer">
      <div className="ContentForm">
        <h1 className="pageHeading">Upload Prescription</h1>
        <form id="upload" onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label form="upload" htmlFor="name">
              Name of file
            </label>
            <input
              form="upload"
              id="name"
              name="name"
              type="text"
              required={true}
              value={formData.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label form="upload" htmlFor="name">
              Upload File
            </label>
            <input
              form="upload"
              id="file"
              type="file"
              name="file"
              required={true}
              onChange={(e) => fileChangeHandler(e)}
            />
          </div>
          {notice.message && (
            <Notice status={notice.type} mini>
              {notice.message}
            </Notice>
          )}
          <button type="submit" onClick={handleSubmit}>
            Upload
          </button>
        </form>
      </div>
      <div className="ContentPageIllustration">
        <img src={UploadPageIllustration} alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
