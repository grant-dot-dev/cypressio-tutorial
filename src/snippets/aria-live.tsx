import { useState } from "react";

const [formStatusMessage, setFormStatusMessage] = useState<string>("");

// status message html
{
    formStatusMessage !== "" && (
        <div aria-live="assertive">
            <h3 className="text-center text-green-400 text-xl">{formStatusMessage}</h3>
        </div>
    )
}