import React, { useState } from 'react';

const Profile: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, phone });
    };

    return (
        <div className="page profile-page">
            <div className="page-heading"><div><p className="eyebrow">Account settings</p><h1>Your profile<span className="accent">.</span></h1><p className="lede">Manage your personal details and communication preferences.</p></div></div>
            <section className="profile-layout"><div className="surface profile-card"><div className="profile-banner" /><div className="profile-identity"><span className="avatar profile-avatar">AR</span><div><h2>Alex Rivera</h2><p>Interaction Design &middot; Year 3</p></div></div><div className="profile-details"><div><span>Student ID</span><strong>NS-2024-0186</strong></div><div><span>Joined</span><strong>September 2022</strong></div><div><span>Advisor</span><strong>Dr. Maya Chen</strong></div></div></div><form className="surface profile-form" onSubmit={handleSubmit}><div className="form-heading"><h2>Personal details</h2><span>Last updated today</span></div>
                <div>
                    <label htmlFor="name">Full name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button className="primary-button" type="submit">Save changes</button>
            </form>
            </section>
        </div>
    );
};

export default Profile;