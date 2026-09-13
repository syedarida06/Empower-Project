/* =========================================
   EMPOWER DASHBOARD
   Reads user + support case from localStorage
========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       GET SAVED USER
    ========================================= */

    const savedUser =
        localStorage.getItem("currentUser");


    let user = null;


    if (savedUser) {

        try {

            user = JSON.parse(savedUser);

        } catch (error) {

            console.log("Unable to read user data.");

        }

    }


    /* =========================================
       DISPLAY USER NAME
    ========================================= */

    const dashboardName =
        document.getElementById("dashboardName");


    if (user && user.fullName) {

        dashboardName.textContent =
            user.fullName + ".";

    }



    /* =========================================
       GET SUPPORT CASE
    ========================================= */

    const savedCase =
        localStorage.getItem("supportCase");


    let supportCase = null;


    if (savedCase) {

        try {

            supportCase =
                JSON.parse(savedCase);

        } catch (error) {

            console.log("Unable to read support case.");

        }

    }



    /* =========================================
       IF NO CASE EXISTS
    ========================================= */

    if (!supportCase) {

        document.getElementById("activeRequests")
            .textContent = "0";

        return;

    }



    /* =========================================
       ACTIVE REQUEST
    ========================================= */

    document.getElementById("activeRequests")
        .textContent = "1";



    /* =========================================
       CASE ID
    ========================================= */

    document.getElementById("currentCaseId")
        .textContent =
        supportCase.caseId || "—";


    document.getElementById("caseId")
        .textContent =
        supportCase.caseId || "—";



    /* =========================================
       CASE CATEGORY
    ========================================= */

    const categoryNames = {

        education:
            "Education Support",

        financial:
            "Financial Assistance",

        child:
            "Child Development",

        legal:
            "Legal Guidance",

        employment:
            "Employment Support",

        family:
            "Family / Community Support",

        other:
            "Other"

    };


    const category =
        categoryNames[supportCase.category]
        || supportCase.category
        || "—";


    document.getElementById("caseCategory")
        .textContent = category;



    /* =========================================
       CASE PRIORITY
    ========================================= */

    const priorityNames = {

        normal:
            "Normal",

        important:
            "Important",

        urgent:
            "Urgent"

    };


    const priority =
        priorityNames[supportCase.priority]
        || supportCase.priority
        || "—";


    document.getElementById("casePriority")
        .textContent = priority;



    /* =========================================
       SUBMITTED DATE
    ========================================= */

    document.getElementById("caseDate")
        .textContent =
        supportCase.submittedDate || "—";



    /* =========================================
       CASE STATUS
    ========================================= */

    const caseStatus =
        supportCase.status || "Under Review";


    document.getElementById("caseStatus")
        .textContent = caseStatus;



    /* =========================================
       CASE TITLE
    ========================================= */

    document.getElementById("caseTitle")
        .textContent =
        "Your request is under review";



    /* =========================================
       DESCRIPTION
    ========================================= */

    if (supportCase.description) {

        const descriptionBox =
            document.getElementById(
                "caseDescriptionBox"
            );

        const description =
            document.getElementById(
                "caseDescription"
            );


        description.textContent =
            supportCase.description;


        descriptionBox.style.display =
            "block";

    }



    /* =========================================
       PROGRESS
    ========================================= */

    const progressFill =
        document.getElementById("progressFill");


    const progressText =
        document.getElementById("progressText");


    if (caseStatus === "Under Review") {

        progressFill.style.width =
            "40%";

        progressText.textContent =
            "2 of 5 steps";

    }

    else if (caseStatus === "Support Assigned") {

        progressFill.style.width =
            "60%";

        progressText.textContent =
            "3 of 5 steps";

    }

    else if (caseStatus === "Support in Progress") {

        progressFill.style.width =
            "80%";

        progressText.textContent =
            "4 of 5 steps";

    }

    else if (caseStatus === "Resolved") {

        progressFill.style.width =
            "100%";

        progressText.textContent =
            "5 of 5 steps";

    }

    else {

        progressFill.style.width =
            "20%";

        progressText.textContent =
            "1 of 5 steps";

    }



    /* =========================================
       REQUEST HISTORY
    ========================================= */

    const requestHistory =
        document.getElementById(
            "requestHistory"
        );


    requestHistory.innerHTML = `

        <div class="request-row">

            <strong>
                ${supportCase.caseId || "—"}
            </strong>

            <span>
                ${category}
            </span>

            <span>
                ${supportCase.submittedDate || "—"}
            </span>

            <span class="table-status reviewing">
                ${caseStatus}
            </span>

        </div>

    `;

});