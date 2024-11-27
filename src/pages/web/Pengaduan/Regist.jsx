import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate from react-router-dom
import LayoutWeb from "../../../layouts/Web";
import WebHeader from "../../../components/web/Header";

function Home() {
    document.title = "SIPANTAI - PUSAT LAYANAN SATU PINTU DAN INFORMASI” SEBAGAI INOVASI KREATIF PARIWISATA KABUPATEN PESISIR SELATAN";

    // State untuk menyimpan data input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // initialize useNavigate

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');

        // Data yang akan dikirim ke API
        const data = {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
        };

        try {
            const response = await fetch('https://backend-sipantai2.rakis.my.id/api/web/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Registrasi berhasil!');
            } else {
                setMessage(result.message || 'Registrasi gagal.');
            }
        } catch (error) {
            setMessage('Terjadi kesalahan. Silakan coba lagi.');
        }
    };

    const handleLoginRedirect = () => {
        navigate('/admin/login'); // navigate to /admin/login
    };

    return (
        <React.Fragment>
            <WebHeader />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-100">
                        <div className="text-center mb-4 text-white">
                            <h4><i className="fa fa-map-marked-alt"></i> <strong>Registrasi</strong></h4>
                        </div>
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">DaftarKan Akun Anda</h6>
                                    <hr />
                                </div>
                                <form onSubmit={handleSubmit}>
                                    {message && (
                                        <div className="alert alert-info">{message}</div>
                                    )}
                                    <label className="mb-1">EMAIL ADDRESS</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <label className="mb-1">Nama Anda</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nama Anda"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <label className="mb-1">PASSWORD</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <label className="mb-1">CONFIRM PASSWORD</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            value={passwordConfirmation}
                                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button
                                        className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                        type="submit"
                                    >
                                        Daftar Akun
                                    </button>
                                </form>
                                <button
                                    className="btn btn-link mt-3 w-100"
                                    onClick={handleLoginRedirect}
                                >
                                    Sudah punya akun? Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
