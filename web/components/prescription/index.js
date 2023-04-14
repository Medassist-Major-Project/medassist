import { useState } from "react";
import SideEffectsTable from "../sideEffectsTable";
import styles from "./styles.module.scss";
import Notice from "../notice";
import Input from "../input";
import { useRouter } from "next/router"

const Prescription = () => {
    const router = useRouter()
    const RESET_NOTICE = { type: "", message: "" };
    const [notice, setNotice] = useState(RESET_NOTICE);

    const drugsData = [
        {
            id: "1",
            type: "text",
            label: "Drug 1",
            required: false,
            name: "Drug 1",
            value: "",
            approved: "Yes",
        },
        {
            id: "2",
            type: "text",
            label: "Drug 2",
            required: true,
            name: "Drug 2",
            value: "",
            approved: "Yes",
        },
    ]; // Array of drugs

    const [drugApprovals, setDrugApprovals] = useState(
        drugsData.reduce((acc, drug) => {
            acc[drug.id] = { approval: "yes", suggestion: "" };
            return acc;
        }, {})
    );

    const handleApprovalChange = (e, drugId) => {
        const { value } = e.target;
        setDrugApprovals((prevApprovals) => ({
            ...prevApprovals,
            [drugId]: { ...prevApprovals[drugId], approval: value },
        }));
    };

    const handleSuggestionChange = (e, drugId) => {
        const { value } = e.target;
        setDrugApprovals((prevApprovals) => ({
            ...prevApprovals,
            [drugId]: { ...prevApprovals[drugId], suggestion: value },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submission logic with drug approvals data
        console.log(drugApprovals);
    };

    return (
        <>
            <h1 className="pageHeading">Analyze the prescription</h1>
            <div className={styles.table}>
                <SideEffectsTable />
            </div>
            <h2>Select no to write a suggestion, yes for approval</h2>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    {drugsData.map((drug) => (
                        <div key={drug.id} style={{ marginBottom: "10px" }}>
                            <h4>{drug.name} Approval</h4>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name={`drug${drug.id}Approval`}
                                        value="yes"
                                        checked={drugApprovals[drug.id].approval === "yes"}
                                        onChange={(e) => handleApprovalChange(e, drug.id)}
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`drug${drug.id}Approval`}
                                        value="no"
                                        checked={drugApprovals[drug.id].approval === "no"}
                                        onChange={(e) => handleApprovalChange(e, drug.id)}
                                    />
                                    No
                                </label>
                            </div>
                            {drugApprovals[drug.id].approval === "no" && (
                                <div>
                                    <label>
                                        Please provide suggestions:{" "}
                                        <Input
                                            type="text"
                                            value={drugApprovals[drug.id].suggestion}
                                            onChange={(e) => handleSuggestionChange(e, drug.id)}
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                    ))}
                    {notice.message && (
                        <Notice status={notice.type} mini>
                            {notice.message}
                        </Notice>
                    )}
                    <button type="submit" onClick={() => router.push("/prescriptions")}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Prescription;
