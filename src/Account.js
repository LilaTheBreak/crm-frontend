import React, { useEffect, useState } from "react";
import "../styles/Account.css";

const Account = () => {
    const [company, setCompany] = useState({
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        website: "www.google.com",
        mainContact: "Laura Hinkins",
        primaryEmail: "pr@google.com",
        secondaryEmail: "laura@google.com",
        location: "Google UK Team",
        activeDeals: 5,
        wikipediaSummary: "",
        googleResults: [],
    });

    const [relatedContacts, setRelatedContacts] = useState([
        { name: "Connor Matthews", role: "Head of Marketing", email: "connor@google.com" },
        { name: "Sarah Johnson", role: "PR Lead", email: "sarah@google.com" }
    ]);

    const [deals, setDeals] = useState([
        { name: "Sony Activation Deal", status: "Active" },
        { name: "Apple Social Media Deal", status: "Active" },
        { name: "Snapchat Speaking Event", status: "Completed" }
    ]);

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        fetchEmails();
        fetchCompanyData();
    }, []);

    const fetchEmails = async () => {
        try {
            const response = await fetch("http://localhost:5050/emails"); // Replace with actual API call
            if (!response.ok) throw new Error("Failed to fetch emails");
            const data = await response.json();
            setEmails(data);
        } catch (error) {
            console.error("Error fetching emails:", error);
        }
    };

    const fetchCompanyData = async () => {
        try {
            const response = await fetch(`http://localhost:5050/api/company-insights?company=Google`);
            if (!response.ok) throw new Error("Failed to fetch company insights");
            const data = await response.json();

            setCompany((prev) => ({
                ...prev,
                wikipediaSummary: data.wikipedia_summary || "No Wikipedia page found.",
                googleResults: data.top_google_results || [],
            }));
        } catch (error) {
            console.error("Error fetching company data:", error);
        }
    };

    return (
        <div className="account-page">
            <div className="account-content">
                <header className="account-header">
                    <h1>Account Dashboard</h1>
                    <div className="header-actions">
                        <button className="btn">📩 All Inboxes</button>
                        <input type="text" placeholder="Search..." className="search-bar" />
                        <button className="btn">Slack</button>
                        <button className="btn">🔍 Filter</button>
                        <button className="btn new-deal">New Deal</button>
                        <button className="btn new-template">New Template</button>
                    </div>
                </header>

                {/* Company Profile */}
                <div className="company-info">
                    <img src={company.logo} alt={company.name} className="company-logo" />
                    <h2>{company.name}</h2>
                    <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">{company.website}</a>
                    <p>Main Contact: <strong>{company.mainContact}</strong></p>
                    <p>Primary Email: <strong>{company.primaryEmail}</strong></p>
                    <p>Secondary Email: <strong>{company.secondaryEmail}</strong></p>
                    <p>Location: {company.location}</p>
                    <p>Active Deals: <strong>{company.activeDeals}</strong></p>
                </div>

                {/* Wikipedia Summary */}
                <div className="panel wikipedia">
                    <h3>Company Overview</h3>
                    <p>{company.wikipediaSummary}</p>
                </div>

                {/* Google Top Links */}
                <div className="panel google-results">
                    <h3>Top Links</h3>
                    <ul>
                        {company.googleResults.map((link, index) => (
                            <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Deal Management */}
                <div className="panel deals">
                    <h3>Deal Management</h3>
                    <ul>
                        {deals.map((deal, index) => (
                            <li key={index} className={deal.status === "Active" ? "active-deal" : "completed-deal"}>
                                {deal.name} {deal.status === "Active" ? "🟢" : "🔴"}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Related Contacts */}
                <div className="panel contacts">
                    <h3>Related Contacts</h3>
                    <ul>
                        {relatedContacts.map((contact, index) => (
                            <li key={index}>
                                <strong>{contact.name}</strong> - {contact.role} <br />
                                <span>{contact.email}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Correspondence */}
                <div className="panel emails">
                    <h3>Recent Emails & Communication</h3>
                    {emails.length > 0 ? (
                        emails.map((email, index) => (
                            <div key={index} className="email-item">
                                <p><strong>From:</strong> {email.sender}</p>
                                <p><strong>Subject:</strong> {email.subject}</p>
                                <p><strong>Snippet:</strong> {email.snippet}</p>
                            </div>
                        ))
                    ) : (
                        <p>No recent emails found.</p>
                    )}
                </div>

                {/* Company Performance */}
                <div className="panel performance">
                    <h3>Performance Metrics</h3>
                    <p><strong>Engagement:</strong> 100M Average Shares</p>
                    <p><strong>Total Followers:</strong> 100M</p>
                    <p><strong>Key Topics:</strong> <span className="badge">SPORT</span> <span className="badge">FASHION</span></p>
                </div>

                {/* Active Campaigns */}
                <div className="panel campaigns">
                    <h3>Current Campaigns</h3>
                    <p>Google Coachella Activation</p>
                    <button className="btn">Send Wrap Up Report</button>
                </div>

                {/* Ads & Promotions */}
                <div className="panel ads">
                    <h3>Ads by Page</h3>
                    <div className="ad-images">
                        <img src="https://via.placeholder.com/100" alt="Ad 1" />
                        <img src="https://via.placeholder.com/100" alt="Ad 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;


