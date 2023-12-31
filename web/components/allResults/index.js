import { useEffect, useState, useContext } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import Notice from "../notice";

import StateContext from "../../Context/StateContext";
import styles from "./styles.module.scss";
import VerifiedIcon from "../../images/icons/verified.svg";
import UnverifiedIcon from "../../images/icons/hourglass.svg";
import axios from "axios";
import LoaderDarkBig from "../loaderDarkBig";

// const data = [
//   { id: 1, name: "my prescription", verified: true },
//   { id: 2, name: "test prescription", verified: false },
//   { id: 3, name: "Item 2", verified: false },
//   { id: 4, name: "Item 3", verified: true },
// ];

const AllResultsPage = () => {
  const RESET_NOTICE = { type: "", message: "" };
  const [notice, setNotice] = useState(RESET_NOTICE);
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const appState = useContext(StateContext);

  useEffect(() => {
    async function prescriptions() {
      try {
        const token = appState.person.token;
        setIsLoading(true);
        const res = await axios.get("/prescription/allPrescriptions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        switch (res.data.type) {
          case "success":
            setIsLoading(false);
            setData(res.data.prescriptions);
            break;
          case "error":
            setIsLoading(false);
            console.log(res);
            break;
        }
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }
    prescriptions();
  }, []);

  const handleUpgradePlan = (e) => {
    e.preventDefault();
    router.push("/upgradePlan");
  };

  return (
    <>
      <h1 className="pageHeading">All your results</h1>
      {!isLoading ? (
        <>
          <div className={styles.gridContainer}>
            {data.map((data, key) => {
              return (
                <NextLink
                  href={
                    data.isVerified
                      ? {
                          pathname: `/verifiedResult`,
                          query: { id: `${data._id}` },
                        }
                      : {
                          pathname: `/unverifiedResult`,
                          query: { id: `${data._id}` },
                        }
                  }
                  key={key}
                >
                  <div className={styles.box}>
                    <div className={styles.name}>{data.name}</div>
                    {data.isVerified ? (
                      <div className={styles.verified}>
                        <img src={VerifiedIcon} alt="Verified Icon" />
                      </div>
                    ) : (
                      <div className={styles.verified}>
                        <img src={UnverifiedIcon} alt="Unverified Icon" />
                      </div>
                    )}
                  </div>
                </NextLink>
              );
            })}
          </div>
          {data.length >= 5 ? (
            <Notice style={{ marginTop: "2rem" }}>
              <h3>Your free tier has been expired</h3>
              <p>To continue using medassist, upgrade your plan</p>
              <div
                className={styles.buttonContainer}
                onClick={handleUpgradePlan}
              >
                <button className={styles.button}>Upgrade Plan</button>
              </div>
            </Notice>
          ) : (
            <div className={styles.buttonContainer}>
              <button
                className={styles.button}
                onClick={() => {
                  router.push("/prescriptionUpload");
                }}
              >
                Upload Prescription
              </button>
            </div>
          )}
        </>
      ) : (
        <div className={styles.loader}>
          <LoaderDarkBig />
        </div>
      )}
    </>
  );
};

export default AllResultsPage;
