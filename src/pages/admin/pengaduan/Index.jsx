import React, { useState, useEffect, useRef } from "react";
import LayoutAdmin from "../../../layouts/Admin";
import Api from "../../../api";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import PaginationComponent from "../../../components/utilities/Pagination";
import toast from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function PengaduanIndex() {
  // Title page
  useEffect(() => {
    document.title = "Pengaduan - Administrator Travel GIS";
  }, []);

  // State
  const [pengaduans, setPengaduans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const ref = useRef(null);

  // Token
  const token = Cookies.get("token");

  // Function fetchData
  const fetchData = async (pageNumber = currentPage, searchData = search) => {
    try {
      const response = await Api.get(`/api/admin/pengaduan?q=${search}&page=${pageNumber}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = response.data.data;
      setPengaduans(data.data);
      setCurrentPage(data.current_page);
      setPerPage(data.per_page);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Hook
  useEffect(() => {
    fetchData();
  }, []);

  // Function searchHandler
  const searchHandler = (e) => {
    e.preventDefault();
    fetchData(1, search);
  };

  // Function deletePengaduan
  const deletePengaduan = async (id) => {
    try {
      await Api.delete(`/api/admin/pengaduan/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Data Deleted Successfully!", {
        duration: 4000,
        position: "top-right",
        style: { borderRadius: "10px", background: "#333", color: "#fff" }
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting pengaduan:", error);
    }
  };

  // Determine if "Read More" button should be shown
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight)
      setShowReadMoreButton(ref.current.scrollHeight != ref.current.clientHeight);
    }
  }, [pengaduans]);

  return (
    <React.Fragment>
      <LayoutAdmin>
        <div className="row mt-4">
          <div className="col-12">
            <div className="card border-0 rounded shadow-sm border-top-success">
              <div className="card-header">
                <span className="font-weight-bold">
                  <i className="fa fa-folder"></i> Pengaduan
                </span>
              </div>
              <div className="card-body">
                <form onSubmit={searchHandler} className="form-group">
                  <div className="input-group mb-3">
                    <Link to="/admin/pengaduan/create" className="btn btn-md btn-success">
                      <i className="fa fa-plus-circle"></i> ADD NEW
                    </Link>
                    <input
                      type="text"
                      className="form-control"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="search by content"
                    />
                    <button type="submit" className="btn btn-md btn-success">
                      <i className="fa fa-search"></i> SEARCH
                    </button>
                  </div>
                </form>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hovered">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Image</th>
                        <th scope="col">Content</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pengaduans.map((pengaduan, index) => (
                        <tr key={index}>
                          <td className="text-center">{++index + (currentPage - 1) * perPage}</td>
                          <td className="text-center">
                            <PhotoProvider>
                              <PhotoView src={pengaduan.image}>
                                <img
                                  src={pengaduan.image}
                                  width={100}
                                />
                              </PhotoView>
                            </PhotoProvider>
                          </td>
                          <td style={{ width: 900 }}>
                            <p style={isOpen ? null : {
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              display: '-webkit-box',
                              maxWidth: '100%',
                              textAlign: "justify"
                            }} ref={ref}>
                              {pengaduan.content}
                            </p>

                            {showReadMoreButton && (
                              <button  className="btn btn-secondary btn-sm" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? 'Read Less...' : 'Read More...'}
                              </button>
                            )}
                          </td>
                          <td className="text-center">
                            <Link to={`/admin/pengaduan/edit/${pengaduan.id}`} className="btn btn-sm btn-primary me-2">
                              <i className="fa fa-pencil-alt"></i>
                            </Link>
                            <Link to={`/admin/pengaduan/detail/${pengaduan.id}`} className="btn btn-sm btn-info me-2">
                              <i className="fa fa-eye"></i>
                            </Link>
                            <button onClick={() => deletePengaduan(pengaduan.id)} className="btn btn-sm btn-danger">
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <PaginationComponent
                    currentPage={currentPage}
                    perPage={perPage}
                    total={total}
                    onChange={(pageNumber) => fetchData(pageNumber)}
                    position="end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </React.Fragment>
  );
}

export default PengaduanIndex;
