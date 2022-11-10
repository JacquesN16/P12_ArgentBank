import React from "react";
import { Link } from "react-router-dom";
import "./account.scss";

export default function Account  (props)  {
    return (
        <div className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.title}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Link to="/transaction" className="transaction-button">
                    View transactions
                </Link>
            </div>
        </div>
    );
};
